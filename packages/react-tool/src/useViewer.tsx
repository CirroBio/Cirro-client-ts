import { useMemo } from "react";
import {
  Assets,
  DataService,
  FileService,
  IFileCredentialsApi,
  ManifestParser,
  ProjectFileAccessContext
} from "@cirrobio/sdk";
import { ViewerState } from "./viewer-state/viewer-state";
import { ViewerServices } from "./viewer-services/viewer-services";
import { useAppConfig } from "@cirrobio/react-ui-core";
import { ToolViewerContext } from "./tool-viewer-context";
import { useProjectLoader } from "./loaders/useProjectLoader";
import { useDatasetLoader } from "./loaders/useDatasetLoader";
import { useManifestLoader } from "./loaders/useManifestLoader";
import { useViewerStateInternal } from "./viewer-state/useViewerStateInternal";


interface ViewerContext {
  state: ViewerState;
  services: ViewerServices;
}

export function useViewer(): ViewerContext {
  const viewerState = useViewerStateInternal();
  const { apiBasePath, authProvider, loadState } = useAppConfig();

  if (viewerState.status !== 'READY' || loadState !== 'LOADED') {
    return { state: null, services: null };
  }

  const dataService = useMemo(() => {
    return new DataService({
      tokenGetter: authProvider.getAccessToken,
      basePath: apiBasePath
    })
  }, [apiBasePath]);

  const fileService = useMemo(() => {
    const fileApi: IFileCredentialsApi = {
      generateProjectFileAccessToken: async () => viewerState.s3Credentials
    }
    return new FileService(fileApi);
  }, [viewerState.s3Credentials]);

  const project = useProjectLoader(viewerState.config, dataService);
  const dataset = useDatasetLoader(viewerState.config, dataService);
  const manifest = useManifestLoader(viewerState.config, dataService);
  const assets = useMemo(() => {
    if (!manifest || !project || !dataset) {
      return new Assets();
    }
    const accessContext = ProjectFileAccessContext.datasetDownload(project, dataset);
    return new ManifestParser(manifest, accessContext).generateAssets(false);
  }, [manifest, project, dataset]);

  const state: ViewerState = useMemo(() => {
    return new ToolViewerContext(project, dataset, manifest, assets, viewerState.config.file)
  }, [dataService, project, dataset, manifest, viewerState.config.file]);

  return useMemo(() => ({
    state,
    services: {
      dataService,
      fileService,
    }
  }), [viewerState, dataService, fileService]);
}
