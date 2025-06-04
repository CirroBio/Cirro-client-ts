import * as React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Viewer } from "./Viewer";
import { ViewerProvider } from "@cirrobio/react-tool";

// This viewer can use getSignedUrl directly so we don't need to patch fetch.
const patchFetch = false;
// The base API path for the viewer. Will be overridden by the ViewerProvider if running in embedded mode.
const apiBasePath = 'https://dev.cirro.bio/api';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewerProvider patchFetch={patchFetch} apiBasePath={apiBasePath}>
      <Viewer />
    </ViewerProvider>
  </StrictMode>,
)
