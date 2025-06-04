import React from "react";
import { ViewerStateProvider } from "./viewer-state/viewer-state-provider";
import { getViewerMode, ViewerMode } from "./helpers/viewer-mode";
import { AppConfigProvider } from "@cirrobio/react-ui-core";
import { AmplifyAuthProvider } from "@cirrobio/react-auth";
import { Loader } from "./loader";

export interface ViewerProviderProps {
  children: React.ReactNode;
  patchFetch?: boolean;
  apiBasePath?: string;
}

const authProvider = new AmplifyAuthProvider();

export function ViewerProvider({ children, apiBasePath, patchFetch = false }: ViewerProviderProps) {
  const viewerMode = getViewerMode();
  const _apiBasePath = viewerMode === ViewerMode.EMBEDDED ? '/api' : apiBasePath;

  return (
    <AppConfigProvider apiBasePath={_apiBasePath} authProvider={authProvider}>
      <ViewerStateProvider mode={viewerMode} patchFetch={patchFetch}>
        <Loader>
          {children}
        </Loader>
      </ViewerStateProvider>
    </AppConfigProvider>
  );
}
