import { useAppConfig } from "@cirrobio/react-ui-core";
import { useViewerStateInternal } from "./viewer-state/useViewerStateInternal";
import React from "react";

interface LoaderProps {
  children: React.ReactNode;
}

export function Loader({ children }: LoaderProps) {
  const { loadState } = useAppConfig();
  const { status } = useViewerStateInternal();

  if (loadState === 'LOADING' || status === 'LOADING' ) {
    return <div>Loading...</div>;
  }

  if (loadState === 'ERROR' || status === 'ERROR') {
    return <div>Error loading viewer state</div>;
  }

  if (loadState === 'MAINTENANCE_MODE') {
    return <div>Maintenance mode is enabled. Please check back later.</div>;
  }

  return children;
}
