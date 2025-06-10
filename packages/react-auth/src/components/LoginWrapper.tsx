import React from "react";
import { useAuthenticator } from "../auth-context/useAuthenticator";
import { LoginModal } from "./LoginModal";

interface IProps {
  children?: React.ReactNode;
}

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
