import { useCallback, useContext } from 'react';
import { AuthenticatorContext, AuthenticatorContextType } from './authentication-context';
import { useAppConfig } from "@cirrobio/react-core";

type UseAuthenticator = AuthenticatorContextType & {
  isLoggedIn: boolean;
  signOut: () => void;
};

/**
 * Custom hook to access authentication context
 */
export function useAuthenticator(): UseAuthenticator {
  const context = useContext(AuthenticatorContext);
  const { authProvider } = useAppConfig();

  const signOut = useCallback(() => {
    sessionStorage.clear();
    authProvider.signOut().then(() => {
      // Location reload clears any in-memory state
      // Amplify does a hard reload automatically, but only if you are signing in from oauth / SSO
      location.reload();
    });
  }, [authProvider]);

  return {
    ...context,
    isLoggedIn: context?.authStatus === 'authenticated',
    signOut,
  }
}
