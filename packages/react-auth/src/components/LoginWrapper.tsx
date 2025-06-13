import React from "react";
import { useAuthenticator } from "../auth-context/useAuthenticator";
import { LoginModal } from "./LoginModal";

interface IProps {
  children?: React.ReactNode;
}

/**
 * LoginWrapper component is used to conditionally render children based on the authentication status
 * or display a login modal if the user is unauthenticated.
 */
export function LoginWrapper({ children }: IProps) {
  const { authStatus } = useAuthenticator();

  if (!authStatus || authStatus === 'configuring') {
    return null;
  }

  if (authStatus === 'unauthenticated') {
    return <LoginModal onClose={null} open={true} />
  }

  return children;
}
