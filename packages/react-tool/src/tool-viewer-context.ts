import { Assets } from "@cirrobio/sdk";
import { Artifact, DatasetAssetsManifest, DatasetDetail, DatasetViz, ProjectDetail, Table } from "@cirrobio/api-client";
import { ViewerState } from "./viewer-state/viewer-state";

export class ToolViewerContext implements ViewerState {
  constructor(
    readonly project: ProjectDetail,
    readonly dataset: DatasetDetail,
    readonly manifest: DatasetAssetsManifest,
    readonly files: Assets,
    readonly selectedFile?: string | null,
  ) {
  }

  get basePath(): string {
    return this.manifest.domain;
  }
  get viz(): DatasetViz[] {
    return this.manifest.viz || [];
  }
  get tables(): Table[] {
    return this.manifest.tables || [];
  }
  get artifacts(): Artifact[] {
    return this.manifest.artifacts || [];
  }
}
