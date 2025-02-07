import { AccessType, DatasetDetail, FileAccessRequest, Project } from "@cirrobio/api-client";

type ProjectIdentifiable = Pick<Project, 'id'>;

/**
 * Helper class to encapsulate the file access for a project.
 */
export class ProjectFileAccessContext {
  constructor(
    readonly project: ProjectIdentifiable,
    readonly dataset: DatasetDetail,
    readonly fileAccessRequest: FileAccessRequest
  ) {
  }

  static projectDownload(project: ProjectIdentifiable): ProjectFileAccessContext {
    const request: FileAccessRequest = { accessType: AccessType.ProjectDownload };
    return new ProjectFileAccessContext(project, null, request);
  }

  static datasetDownload(project: ProjectIdentifiable, dataset: DatasetDetail): ProjectFileAccessContext {
    const accessType = dataset.share ? AccessType.SharedDatasetDownload : AccessType.ProjectDownload;
    const request: FileAccessRequest = { accessType, datasetId: dataset.id };
    return new ProjectFileAccessContext(project, dataset, request);
  }
}
