import { ProjectAccessType, DatasetDetail, ProjectFileAccessRequest, Project } from "@cirrobio/api-client";

type ProjectIdentifiable = Pick<Project, 'id'>;

/**
 * Helper class to encapsulate the file access for a project.
 */
export class ProjectFileAccessContext {
  constructor(
    readonly project: ProjectIdentifiable,
    readonly dataset: DatasetDetail,
    readonly fileAccessRequest: ProjectFileAccessRequest
  ) {
  }

  static projectDownload(project: ProjectIdentifiable): ProjectFileAccessContext {
    const request: ProjectFileAccessRequest = { accessType: ProjectAccessType.ProjectDownload };
    return new ProjectFileAccessContext(project, null, request);
  }

  static datasetDownload(project: ProjectIdentifiable, dataset: DatasetDetail): ProjectFileAccessContext {
    const accessType = dataset.share ? ProjectAccessType.SharedDatasetDownload : ProjectAccessType.ProjectDownload;
    const request: ProjectFileAccessRequest = { accessType, datasetId: dataset.id };
    return new ProjectFileAccessContext(project, dataset, request);
  }
}
