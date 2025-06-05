import React from "react";
import { ViewerStateProvider } from "./viewer-state/viewer-state-provider";
import { getViewerMode, ViewerMode } from "./helpers/viewer-mode";
import { AppConfigProvider } from "@cirrobio/react-ui-core";
import { AmplifyAuthProvider } from "@cirrobio/react-auth";
import { Loader } from "./loader";
import { ViewerContextProvider } from "./viewer-context/viewer-context-provider";

export interface ViewerProviderProps {
  children: React.ReactNode;
  /*
  *  If true, patch the default fetch function to sign S3 URLs
  *  This is a workaround for when we don't control the fetch calls in the viewer
  */
  patchFetch?: boolean;
  /*
  *  The base API path when calling the Cirro API.
  *  Will be overridden by the ViewerProvider if running in embedded mode.
  */
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
          <ViewerContextProvider>
            {children}
          </ViewerContextProvider>
        </Loader>
      </ViewerStateProvider>
    </AppConfigProvider>
  );
}
