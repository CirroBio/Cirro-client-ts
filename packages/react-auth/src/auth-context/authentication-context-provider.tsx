import * as React from "react";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { AuthenticatorContext, AuthenticatorContextType } from './authentication-context';
import { AuthStatus } from "../models/auth-status";
import { UserDetail } from "@cirrobio/api-client";
import { useAppConfig } from "@cirrobio/react-ui-core";
import { CurrentUser } from "@cirrobio/sdk";

export type AuthenticationProviderProps = {
  children: React.ReactNode;
  fetchUserInfo?: boolean;
}

/**
 * Manages the authentication state of the application.
 * @param children - The child components to render within the provider.
 * @param fetchUserInfo - If true, fetches detailed user information after authentication.
 */
export function AuthenticationContextProvider({ children, fetchUserInfo }: AuthenticationProviderProps): ReactElement {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('configuring');
  const [authInfo, setAuthInfo] = useState<CurrentUser>(null);
  const [userInfo, setUserInfo] = useState<UserDetail>(null);
  const { dataService, authProvider } = useAppConfig();

  const refresh = useCallback((): void => {
    authProvider.getCurrentUser()
      .then((currentUser) => {
        setAuthStatus('authenticated');
        setAuthInfo(currentUser);
        if (fetchUserInfo) {
          dataService.users.getUser({ username: currentUser.username })
            .then((data) => setUserInfo(data))
            .catch((error) => {
              console.error('Failed to fetch user info:', error);
              setUserInfo(null);
            });
        }
      })
      .catch(() => {
        setAuthStatus('unauthenticated');
      });
  }, []);

  const value: AuthenticatorContextType = useMemo(
    () => ({ authStatus, authInfo, refresh, userInfo }),
    [authStatus, authInfo, userInfo, refresh]
  );

  // Refresh auth state on page load
  useEffect(() => {
    refresh();
  }, [refresh]);

  // Refresh auth state in response to auth events
  useEffect(() => {
    const options = { onSignIn: refresh, onSignOut: refresh };
    return authProvider.registerAuthEventHandler(options);
  }, [refresh]);

  return (
    <AuthenticatorContext.Provider value={value}>
      {children}
    </AuthenticatorContext.Provider>
  );
}
