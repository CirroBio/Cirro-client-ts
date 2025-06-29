import { AWSCredentials, GenerateProjectFileAccessTokenRequest, ProjectAccessType } from "@cirrobio/api-client";
import { ProjectFileAccessContext } from "./project-access-context";
import { credentialsCache, credentialsMutex } from "./util/credentials-mutex.so";
import { GetFileUrlParams, getSignedUrl, GetSignedUrlOptions } from "./actions/sign-url.fn";
import { getProjectS3Bucket } from "./shared";
import { DownloadableFile } from "./models/file-object.model";

export interface IFileCredentialsApi {
  generateProjectFileAccessToken: (params: GenerateProjectFileAccessTokenRequest) => Promise<AWSCredentials>;
}

/**
 * Service for viewing files in Cirro
 *  currently this only operates on files within a project
 */
export class FileService {
  constructor(
    private readonly fileCredsApi: IFileCredentialsApi
  ) {}

  /**
   * Get contents of a file
   */
  async getProjectFile(file: DownloadableFile): Promise<Response> {
    const url = await this.getSignedUrlFromProjectFile(file);
    return fetch(url);
  }

  /**
   * Get a signed URL for a file
   */
  async getSignedUrlFromProjectFile(file: DownloadableFile, params?: GetSignedUrlOptions): Promise<string> {
    const credentials = await this.getProjectAccessCredentials(file.fileAccessContext);
    const _params: GetFileUrlParams = {
      ...params,
      filename: file.name,
      url: file.url,
      credentials,
    };
    return getSignedUrl(_params);
  }

  /**
   * Get a signed URL for a file given a path
   */
  async getSignedUrlFromProjectPath(fileAccessContext: ProjectFileAccessContext, path: string, params?: GetSignedUrlOptions): Promise<string> {
    const credentials = await this.getProjectAccessCredentials(fileAccessContext);
    const _params: GetFileUrlParams = {
      ...params,
      filename: path.split('/').pop(),
      url: `s3://${getProjectS3Bucket(fileAccessContext.project.id)}/${path}`,
      credentials,
    };
    return getSignedUrl(_params);
  }

  /**
   * Get credentials for accessing a project file
   */
  async getProjectAccessCredentials(fileAccessContext: ProjectFileAccessContext): Promise<AWSCredentials> {
    const accessType = fileAccessContext.fileAccessRequest.accessType;
    // Special case for project download, since we can cache the credentials
    if (accessType === ProjectAccessType.ProjectDownload || accessType === ProjectAccessType.SharedDatasetDownload) {
      return this.getProjectReadCredentials(fileAccessContext);
    }
    return this.fileCredsApi.generateProjectFileAccessToken({ projectId: fileAccessContext.project.id, projectFileAccessRequest: fileAccessContext.fileAccessRequest });
  }

  private async getProjectReadCredentials(fileAccessContext: ProjectFileAccessContext): Promise<AWSCredentials> {
    const projectId = fileAccessContext.project.id;
    // Append datasetId to cache key for shared dataset downloads since we need to generate a new token for each dataset
    let cacheKey = projectId;
    if (fileAccessContext.fileAccessRequest.accessType === ProjectAccessType.SharedDatasetDownload) {
      cacheKey = `${projectId}-${fileAccessContext.fileAccessRequest.datasetId}`;
    }

    return credentialsMutex.dispatch(async () => {
      const cachedCredentials = credentialsCache.get(cacheKey);
      const expirationTime = cachedCredentials ? cachedCredentials?.expiration : null;
      const fetchNewCredentials = !expirationTime || expirationTime < new Date();
      if (fetchNewCredentials) {
        const projectFileAccessRequest = fileAccessContext.fileAccessRequest;
        const credentials = await this.fileCredsApi.generateProjectFileAccessToken({ projectId, projectFileAccessRequest });
        credentialsCache.set(cacheKey, credentials);
        return credentials;
      }
      return cachedCredentials;
    });
  }
}
