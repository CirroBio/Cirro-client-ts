import * as React from "react";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { MessagePayload, ViewerConfigPayload } from "../models/message";
import { ViewerStateContext, ViewerStatus } from "./viewer-state-context";
import { ViewerMode } from "../helpers/viewer-mode";
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
      const config = {
        project: { id: params.get('projectId')},
        dataset: { id: params.get('datasetId')},
        file: params.get('file')
      };
      console.debug("Loaded config: ", config);
      setViewerConfig(config);
      return;
    }
    const handleMessage = async (event: MessageEvent<MessagePayload>) => {
      const credentials = event.data.credentials;
      const config = event.data.config;
      console.debug("Received config: ", config);
      setS3Credentials(credentials);
      setViewerConfig(config);
      setViewerStatus('READY');
    };
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ source: 'cirro-tool', payload: { status: 'READY' } });
    console.debug("Registered message handler");
    return () => {
      window.removeEventListener('message', handleMessage);
      console.debug("Deregistered message handler");
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
    status: viewerStatus, config: viewerConfig, s3Credentials, updateConfig, patchFetch
  }), [viewerStatus, viewerConfig]);

  return (
    <ViewerStateContext.Provider value={value}>
      {children}
    </ViewerStateContext.Provider>
  );
}
