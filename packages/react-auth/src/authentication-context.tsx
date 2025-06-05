import { createContext } from 'react';
import { CurrentUser } from "./models/user";
import { AuthStatus } from "./models/auth-status";


export type AuthenticatorContextType = {
  authStatus: AuthStatus;
  authInfo: CurrentUser | null;
  refresh: () => void;
}

export const AuthenticatorContext = createContext<AuthenticatorContextType>(null);
