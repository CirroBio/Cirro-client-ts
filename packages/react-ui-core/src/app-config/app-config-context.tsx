import { SystemInfoResponse } from "@cirrobio/api-client";
import { createContext } from "react";
import { AuthenticationProvider } from "@cirrobio/sdk";

export type LoadState = 'LOADING' | 'LOADED' | 'ERROR' | 'MAINTENANCE_MODE';

export type AppConfigContextType = {
  appConfig: SystemInfoResponse;
  refresh: () => void;
  loadState: LoadState;
  apiBasePath: string;
  authProvider: AuthenticationProvider;
}

export const AppConfigContext = createContext<AppConfigContextType>(null);

