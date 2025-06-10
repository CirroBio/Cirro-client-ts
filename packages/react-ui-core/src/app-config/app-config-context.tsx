import { SystemInfoResponse } from "@cirrobio/api-client";
import { createContext } from "react";
import { DataService } from "@cirrobio/sdk";
import { InteractiveAuthenticationProvider } from "../auth-provider/interactive-authentication-provider";

export type LoadState = 'LOADING' | 'LOADED' | 'ERROR' | 'MAINTENANCE_MODE';
export type AppConfig = SystemInfoResponse;

export type AppConfigContextType = {
  appConfig: AppConfig;
  refresh: () => void;
  loadState: LoadState;
  apiBasePath: string;
  authProvider: InteractiveAuthenticationProvider;
  dataService: DataService;
}

export const AppConfigContext = createContext<AppConfigContextType>(null);

