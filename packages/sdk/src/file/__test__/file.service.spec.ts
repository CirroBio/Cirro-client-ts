import { FileService, IFileCredentialsApi } from "../file.service";
import { DownloadableFile } from "../models/file-object.model";
import { ProjectFileAccessContext } from "../project-access-context";

describe("fileService", () => {
  const accessContext = ProjectFileAccessContext.projectDownload({ id: 'project-1' });

  const fileAt = (url: string): DownloadableFile => ({
    url,
    name: url.split('/').pop(),
    fileAccessContext: accessContext,
  });

  it("returns the public URL untouched and asks for no credentials", async () => {
    const credsApi: IFileCredentialsApi = { generateProjectFileAccessToken: jest.fn() };
    const service = new FileService(credsApi);

    const url = await service.getSignedUrlFromProjectFile(
      fileAt('https://datasets.example.org/study-1/fastq/sample1_R1.fastq.gz'));

    expect(url).toBe('https://datasets.example.org/study-1/fastq/sample1_R1.fastq.gz');
    expect(credsApi.generateProjectFileAccessToken).not.toHaveBeenCalled();
  });

  it("signs S3 files with project credentials", async () => {
    const credsApi: IFileCredentialsApi = {
      generateProjectFileAccessToken: jest.fn().mockResolvedValue({
        accessKeyId: 'key',
        secretAccessKey: 'secret',
        sessionToken: 'token',
        expiration: new Date(Date.now() + 60_000),
        region: 'us-west-2',
      }),
    };
    const service = new FileService(credsApi);

    const url = await service.getSignedUrlFromProjectFile(fileAt('s3://project-1a1a/datasets/d1/data/a.txt'));

    expect(url).toContain('/datasets/d1/data/a.txt?');
    expect(url).toContain('X-Amz-Signature=');
    expect(credsApi.generateProjectFileAccessToken).toHaveBeenCalled();
  });
});
