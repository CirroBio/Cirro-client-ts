import { Assets } from "@cirrobio/sdk";
import { Artifact, DatasetAssetsManifest, DatasetDetail, DatasetViz, ProjectDetail, Table } from "@cirrobio/api-client";
import { ViewerState } from "./viewer-state";
import { DownloadableFile, ProjectFileAccessContext } from "@cirrobio/sdk/dist";

export class ToolViewerState implements ViewerState {
  constructor(
    readonly project: ProjectDetail,
    readonly dataset: DatasetDetail,
    readonly manifest: DatasetAssetsManifest,
    readonly files: Assets,
    readonly fileAccessContext: ProjectFileAccessContext,
    readonly _selectedFile?: string | null,
  ) {
  }

  get selectedFile(): DownloadableFile {
    if (!this._selectedFile || !this.manifest) {
      return null;
    }
    return {
      name: this._selectedFile.substring(this._selectedFile.lastIndexOf('/') + 1),
      url: `${this.manifest.domain}/${this._selectedFile}`,
      fileAccessContext: this.fileAccessContext,
    }
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
