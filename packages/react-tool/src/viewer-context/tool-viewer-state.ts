import { Assets, DownloadableFile, ProjectFileAccessContext } from "@cirrobio/sdk";
import { Artifact, DatasetAssetsManifest, DatasetDetail, DatasetViz, ProjectDetail, Table } from "@cirrobio/api-client";
import { ViewerState } from "./viewer-state";

export class ToolViewerState implements ViewerState {
  public readonly selectedFile: DownloadableFile;

  constructor(
    readonly project: ProjectDetail,
    readonly dataset: DatasetDetail,
    readonly manifest: DatasetAssetsManifest,
    readonly files: Assets,
    readonly fileAccessContext: ProjectFileAccessContext,
    readonly _selectedFile?: string | null,
  ) {
    if (_selectedFile && manifest) {
      this.selectedFile = {
        name: _selectedFile.substring(_selectedFile.lastIndexOf('/') + 1),
        url: `${this.manifest.domain}/${_selectedFile}`,
        fileAccessContext: this.fileAccessContext,
      };
    } else {
      this.selectedFile = null
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
