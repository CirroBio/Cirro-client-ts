import React, { useMemo } from "react";
import { ViewerStateProvider } from "./viewer-state/viewer-state-provider";
import { getViewerMode, ViewerMode } from "./helpers/viewer-mode";
import { AppConfigProvider, InteractiveAuthenticationProvider } from "@cirrobio/react-ui-core";
import { AmplifyAuthProvider, AuthenticationProvider, LoginWrapper } from "@cirrobio/react-auth";
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
  /**
   * Authentication provider for the viewer.
   * Defaults to AmplifyAuthProvider.
   */
  authProvider?: InteractiveAuthenticationProvider;
}

const DefaultAuthProvider = AmplifyAuthProvider;


export function ViewerProvider({ children, apiBasePath, authProvider, patchFetch = false }: ViewerProviderProps) {
  const viewerMode = getViewerMode();
  const _apiBasePath = viewerMode === ViewerMode.EMBEDDED ? '/api' : apiBasePath;

  const authProviderToUse = useMemo(() =>
    authProvider || new DefaultAuthProvider(), [authProvider]);

  return (
    <AppConfigProvider apiBasePath={_apiBasePath} authProvider={authProviderToUse}>
      <ViewerStateProvider mode={viewerMode} patchFetch={patchFetch}>
        <Loader>
          <AuthenticationProvider fetchUserInfo={false}>
            <LoginWrapper>
              <ViewerContextProvider>
                {children}
              </ViewerContextProvider>
            </LoginWrapper>
          </AuthenticationProvider>
        </Loader>
      </ViewerStateProvider>
    </AppConfigProvider>
  );
}
