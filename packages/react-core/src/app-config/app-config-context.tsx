import { SystemInfoResponse } from "@cirrobio/api-client";
import { createContext } from "react";
import { DataService } from "@cirrobio/sdk";
import { InteractiveAuthenticationProvider } from "../auth-provider/interactive-authentication-provider";

export type LoadState = 'LOADING' | 'LOADED' | 'ERROR' | 'MAINTENANCE_MODE';
export type AppConfig = SystemInfoResponse;

export type AppConfigContextType = {
  /**
   * The current application configuration.
   */
  appConfig: AppConfig;
  /**
   * Refresh the application configuration.
   */
  refresh: () => void;
  /**
   * The current load state of the application configuration.
   */
  loadState: LoadState;
  /**
   * Authentication provider used for user authentication.
   */
  authProvider: InteractiveAuthenticationProvider;
  /**
   * Service for accessing data from the Cirro API.
   */
  dataService: DataService;
}

export const AppConfigContext = createContext<AppConfigContextType>(null);

