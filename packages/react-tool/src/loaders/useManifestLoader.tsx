import { DataService, handlePromiseError } from "@cirrobio/sdk";
import { DatasetAssetsManifest } from "@cirrobio/api-client";
import { ViewerConfigPayload } from "../models/message";
import { useEffect, useState } from "react";

export function useManifestLoader(viewerConfig: ViewerConfigPayload, dataService: DataService): DatasetAssetsManifest {
  const projectId = viewerConfig.project.id;
  const datasetId = viewerConfig.dataset.id;
  const [manifest, setManifest] = useState<DatasetAssetsManifest>(null);

  useEffect(() => {
    const loadManifest = async () => {
      if (viewerConfig.manifest) {
        setManifest(viewerConfig.manifest);
      } else if (projectId && datasetId) {
        const _manifest = await dataService.datasets.getDatasetManifest({ projectId, datasetId });
        setManifest(_manifest);
      }
    };
    loadManifest().catch(handlePromiseError);
  }, [projectId, datasetId, dataService]);

  return manifest;
}
