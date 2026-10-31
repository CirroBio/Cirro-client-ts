
# @cirrobio/sdk

[![SDK](https://img.shields.io/npm/v/@cirrobio/sdk?color=blue&label=@cirrobio/sdk)](https://www.npmjs.com/package/@cirrobio/sdk)

This package provides a TypeScript SDK for Cirro, which includes utilities and types to interact with the Cirro API and File endpoints.


## Reading a publication

Datasets, sheets and dashboards published with [Cirro-publish-data-objects](https://github.com/CirroBio/Cirro-publish-data-objects) live in a public bucket laid out as Cirro API responses. `createPublicationFetch` answers API requests from that bucket, so the same `DataService` calls read either a Cirro tenant or a publication:

```ts
import { createPublicationFetch, DataService, parseDatasetUri } from '@cirrobio/sdk';

const dataService = new DataService({
  fetchApi: createPublicationFetch({ baseUrl: 'https://<bucket>.s3.<region>.amazonaws.com/<prefix>' }),
});
const { projectId, datasetId } = parseDatasetUri('cirro::<projectId>:dataset:<datasetId>');
const dataset = await dataService.datasets.getDataset({ projectId, datasetId });
const manifest = await dataService.datasets.getDatasetManifest({ projectId, datasetId });
```

File URLs in a publication's manifest are public `https://` URLs, which `FileService` returns without signing. Requests a publication cannot answer return 404.

Sheet row queries and raw SQL need a `runSql` function that runs one statement and returns its column names and rows, for example over a DuckDB-WASM connection:

```ts
const runSql = async (sql: string) => {
  const table = await connection.query(sql);
  return {
    columns: table.schema.fields.map(f => f.name),
    rows: table.toArray().map(row => table.schema.fields.map(f => row[f.name])),
  };
};
createPublicationFetch({ baseUrl, runSql });
```
