import { DataService, handlePromiseError } from "@cirrobio/sdk";
import { ViewerConfigPayload } from "../models/message";
import { Dataset, DatasetDetail } from "@cirrobio/api-client";
import { useEffect, useState } from "react";

export function useDatasetLoader(viewerConfig: ViewerConfigPayload, dataService: DataService): DatasetDetail {
  const projectId = viewerConfig.project.id;
  const datasetId = viewerConfig.dataset.id;
  const [dataset, setDataset] = useState<DatasetDetail>(null);

  useEffect(() => {
    const loadDataset = async () => {
      if (viewerConfig.dataset.name) {
        setDataset(viewerConfig.dataset as DatasetDetail);
      } else if (viewerConfig.dataset.id) {
        const datasetDetail = await dataService.datasets.getDataset({
          projectId,
          datasetId: viewerConfig.dataset.id,
        });
        setDataset(datasetDetail);
      }
    };
    loadDataset().catch(handlePromiseError);
  }, [datasetId, projectId, dataService]);

  return dataset;
}
