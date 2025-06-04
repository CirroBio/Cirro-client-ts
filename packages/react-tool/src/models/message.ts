import { AWSCredentials, DatasetAssetsManifest, DatasetDetail, ProjectDetail } from "@cirrobio/api-client";

export interface MessagePayload {
  credentials: AWSCredentials;
  config: ViewerConfigPayload;
}

export interface ViewerConfigPayload {
  project: Partial<ProjectDetail>;
  dataset: Partial<DatasetDetail>;
  manifest?: DatasetAssetsManifest;
  file?: string; // path relative to manifest domain
}
