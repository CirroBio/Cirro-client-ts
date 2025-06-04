import * as React from "react";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { MessagePayload, ViewerConfigPayload } from "../models/message";
import { ViewerStatus, ViewerStateContext } from "./viewer-state-context";
import { ViewerMode } from "../helpers/viewer-mode";
import { doPatchFetch } from "../helpers/patch-fetch";
import { AWSCredentials } from "@cirrobio/api-client";

interface ViewerStateProviderProps {
  children: React.ReactNode;
  mode: ViewerMode;
  patchFetch: boolean;
}

/**
 * Handles the viewer state for the viewer application.
 */
export const ViewerStateProvider = ({ children, mode, patchFetch }: ViewerStateProviderProps): ReactElement => {
  const [viewerStatus, setViewerStatus] = useState<ViewerStatus>('LOADING');
  const [viewerConfig, setViewerConfig] = useState<ViewerConfigPayload | null>(null);
  const [s3Credentials, setS3Credentials] = useState<AWSCredentials | null>(null);

  useEffect(() => {
    if (mode === ViewerMode.STANDALONE) {
      const params = new URLSearchParams(window.location.search);
      setViewerStatus('READY');
      setViewerConfig({
        project: { id: params.get('projectId')},
        dataset: { id: params.get('datasetId')},
        file: params.get('file')
      });
      return;
    }
    const handleMessage = async (event: MessageEvent<MessagePayload>) => {
      const credentials = event.data.credentials;
      const config = event.data.config;
      setS3Credentials(credentials);
      setViewerConfig(config);

      if (viewerStatus === 'LOADING' && patchFetch) {
         doPatchFetch(credentials);
      }
      setViewerStatus('READY');
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [mode]);

  const updateConfig = (config: ViewerConfigPayload) => {
    if (viewerStatus !== 'READY') {
      console.warn('Cannot update config when viewer is not ready');
      return;
    }
    setViewerConfig(config);
  }

  const value = useMemo(() => ({
    status: viewerStatus, config: viewerConfig, s3Credentials, updateConfig
  }), [viewerStatus, viewerConfig]);

  if (viewerStatus === 'LOADING') {
    return <p>Loading...</p>;
  }

  if (viewerStatus === 'ERROR') {
    return <p>Error loading tool context</p>;
  }

  return (
    <ViewerStateContext.Provider value={value}>
      {children}
    </ViewerStateContext.Provider>
  );
}
