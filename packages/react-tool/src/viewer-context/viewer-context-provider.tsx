import { useAppConfig } from "@cirrobio/react-core";
import * as React from "react";
import { ReactElement, useMemo } from "react";
import { Assets, FileService, IFileCredentialsApi, ManifestParser, ProjectFileAccessContext } from "@cirrobio/sdk";
import { GenerateProjectFileAccessTokenRequest } from "@cirrobio/api-client";
import { ViewerContext } from "./viewer-context";
import { useViewerState } from "../viewer-state/useViewerState";
import { useProjectLoader } from "../loaders/useProjectLoader";
import { useDatasetLoader } from "../loaders/useDatasetLoader";
import { useManifestLoader } from "../loaders/useManifestLoader";
import { ViewerState } from "./viewer-state";
import { ToolViewerState } from "./tool-viewer-state";
import { ViewerServices } from "./viewer-services";

export function ViewerContextProvider({ children }): ReactElement {
  const viewerState = useViewerState();
  const { dataService } = useAppConfig();

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

  const fileAccessContext = useMemo(() => {
    if (!project || !dataset) {
      return null;
    }
    return ProjectFileAccessContext.datasetDownload(project, dataset);
  }, [project, dataset]);

  const assets = useMemo(() => {
    if (!manifest || !fileAccessContext) {
      return new Assets();
    }
    return new ManifestParser(manifest, fileAccessContext).generateAssets(false);
  }, [manifest, fileAccessContext]);

  const state: ViewerState = useMemo(() => {
    return new ToolViewerState(project, dataset, manifest, assets, fileAccessContext, viewerState.config?.file)
  }, [dataService, project, dataset, manifest, viewerState.config?.file]);

  const services: ViewerServices = { dataService, fileService };
  const value = useMemo(() => ({ state, services }), [state, services]);

  return (
    <ViewerContext.Provider value={value}>
      {children}
    </ViewerContext.Provider>
  );
}
