
import React from "react";
import { LoginModal, useAuthenticator } from "@cirrobio/react-auth";

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
