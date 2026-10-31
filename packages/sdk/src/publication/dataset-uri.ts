export interface DatasetUri {
  /** Empty in the URIs apps list for a publication, whose base URL takes the tenant's place. */
  tenantId: string;
  projectId: string;
  datasetId: string;
  /** Relative to the dataset's data directory, as in Cirro URI sheet cells; absent for the dataset itself. */
  path?: string;
}

const DATASET_URI = /^cirro:([^:]*):([^:/]+):dataset:([^:/]+)(?:\/(.+))?$/;

/** Parses `cirro:<tenantId>:<projectId>:dataset:<datasetId>[/<path>]`. */
export function parseDatasetUri(uri: string): DatasetUri {
  const match = DATASET_URI.exec(uri);
  if (!match) throw new Error(`Not a Cirro dataset URI: ${uri}`);
  const [, tenantId, projectId, datasetId, path] = match;
  return path === undefined ? { tenantId, projectId, datasetId } : { tenantId, projectId, datasetId, path };
}
