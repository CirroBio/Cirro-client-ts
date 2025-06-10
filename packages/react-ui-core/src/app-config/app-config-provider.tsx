import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { SystemInfoResponse } from "@cirrobio/api-client";
import { AppConfigContext, LoadState } from "./app-config-context";
import { DataService } from "@cirrobio/sdk";
import { InteractiveAuthenticationProvider } from "../auth-provider/interactive-authentication-provider";

interface IAppConfigProviderProps {
  children: React.ReactNode;
  apiBasePath: string;
  authProvider?: InteractiveAuthenticationProvider;
}

export function AppConfigProvider({ children, apiBasePath, authProvider }: IAppConfigProviderProps): ReactElement {
  const [loadState, setLoadState] = useState<LoadState>('LOADING');
  const [appConfig, setAppConfig] = useState<SystemInfoResponse>(null);

  const dataService = useMemo(() => {
    return new DataService({
      tokenGetter: authProvider.getAccessToken,
      basePath: apiBasePath
    })
  }, [apiBasePath]);

  const refresh = useCallback((): void => {
    fetch(`${apiBasePath}/info/system`)
      .then((resp) => resp.json())
      .then((config: SystemInfoResponse) => {
        setAppConfig(config);
        authProvider.configure(config);
        setLoadState(config.maintenanceModeEnabled ? 'MAINTENANCE_MODE' : 'LOADED');
      }).catch((e) => {
      console.error(e);
      setLoadState('ERROR');
    });
  }, [apiBasePath, authProvider]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo(() =>
    ({ appConfig, refresh, loadState, apiBasePath, authProvider, dataService }), [appConfig, refresh]);

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
}
