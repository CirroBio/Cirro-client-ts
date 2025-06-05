import { useAppConfig } from "@cirrobio/react-ui-core";
import * as React from "react";
import { ReactElement, useMemo } from "react";
import {
  Assets,
  DataService,
  FileService,
  IFileCredentialsApi,
  ManifestParser,
  ProjectFileAccessContext
} from "@cirrobio/sdk";
import { GenerateProjectFileAccessTokenRequest } from "@cirrobio/api-client";
import { ViewerContext } from "./viewer-context";
import { useViewerState } from "../viewer-state/useViewerState";
import { useProjectLoader } from "../loaders/useProjectLoader";
import { useDatasetLoader } from "../loaders/useDatasetLoader";
import { useManifestLoader } from "../loaders/useManifestLoader";
import { ViewerState } from "./viewer-state";
import { ToolViewerState } from "./tool-viewer-state";

export function ViewerContextProvider({ children }): ReactElement {
  const viewerState = useViewerState();
  const { apiBasePath, authProvider } = useAppConfig();

  const dataService = useMemo(() => {
    return new DataService({
      tokenGetter: authProvider.getAccessToken,
      basePath: apiBasePath
    })
  }, [apiBasePath]);

  const fileService = useMemo(() => {
    const fileApi: IFileCredentialsApi = {
      generateProjectFileAccessToken: async (params: GenerateProjectFileAccessTokenRequest) => {
        if (viewerState.s3Credentials) {
          return viewerState.s3Credentials;
        }
        return dataService.file.generateProjectFileAccessToken(params);
      }
    }
    return new FileService(fileApi);
  }, [viewerState.s3Credentials, dataService]);

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
    return new ToolViewerState(project, dataset, manifest, assets, viewerState.config?.file)
  }, [dataService, project, dataset, manifest, viewerState.config?.file]);

  const services = { dataService, fileService };

  return (
    <ViewerContext.Provider value={{ state, services }}>
      {children}
    </ViewerContext.Provider>
  );
}
