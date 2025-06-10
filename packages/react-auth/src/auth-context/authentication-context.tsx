import { createContext } from 'react';
import { AuthStatus } from "../models/auth-status";
import { UserDetail } from "@cirrobio/api-client";
import { CurrentUser } from "@cirrobio/sdk";



export type AuthenticatorContextType = {
  authStatus: AuthStatus;
  authInfo: CurrentUser | null;
  userInfo: UserDetail;
  refresh: () => void;
}

export const AuthenticatorContext = createContext<AuthenticatorContextType>(null);
