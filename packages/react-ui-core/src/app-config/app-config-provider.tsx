import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { SystemInfoResponse } from "@cirrobio/api-client";
import { AppConfigContext, LoadState } from "./app-config-context";
import { AuthenticationProvider } from "@cirrobio/sdk";

interface IAppConfigProviderProps {
  children: React.ReactNode;
  apiBasePath: string;
  authProvider?: AuthenticationProvider;
}

export function AppConfigProvider({ children, apiBasePath, authProvider }: IAppConfigProviderProps): ReactElement {
  const [loadState, setLoadState] = useState<LoadState>('LOADING');
  const [appConfig, setAppConfig] = useState<SystemInfoResponse>(null);

  const refresh = useCallback((): void => {
    fetch(`${apiBasePath}/info/system`)
      .then((resp) => resp.json())
      .then((config: SystemInfoResponse) => {
        setAppConfig(config);
        authProvider.load(config);
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
    ({ appConfig, refresh, loadState, apiBasePath, authProvider }), [appConfig, refresh]);

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
}
