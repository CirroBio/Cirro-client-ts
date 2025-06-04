import { Artifact, DatasetDetail, DatasetViz, ProjectDetail, Table } from "@cirrobio/api-client";
import { Assets } from "@cirrobio/sdk";

/**
 * Represents the state of the viewer, including data about the currently selected "item".
 */
export interface ViewerState {
  /**
   * The current project details.
   */
  project: ProjectDetail | null;

  /**
   * The current dataset details.
   */
  dataset: DatasetDetail | null;

  /**
   * Base path for the dataset files.
   */
  basePath: string;

  /**
   * The file path of the currently selected file.
   */
  selectedFile?: string | null;

  /**
   * The files associated with the dataset.
   */
  files: Assets | null;
  /**
   * The visualizations associated with the dataset.
   */
  viz: DatasetViz[] | null;
  /**
   * The tables associated with the dataset.
   */
  tables: Table[] | null;
  /**
   * The artifacts associated with the dataset.
   */
  artifacts: Artifact[] | null;
}
