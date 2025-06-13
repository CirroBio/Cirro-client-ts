import { Alert, Dialog, IconButton, Stack, Typography } from '@mui/material';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { LoginOptions } from './LoginOptions';
import { LoginProvider } from '@cirrobio/api-client';
import { handlePromiseError } from "@cirrobio/sdk";
import { useAppConfig } from "@cirrobio/react-core";
import { CloseOutlined } from '@mui/icons-material';
import { COGNITO_PROVIDER_ID, LOGIN_SENT_SUCCESS_MSG } from "../amplify/magic-link";

interface IProps {
  onClose: () => void;
  open: boolean;
}

function getLoginMessage(loginProviders: LoginProvider[]): string {
  const loginMessage = 'Sign in using one of the options below.';
  const cognitoEnabled = loginProviders.some(p => p.id === COGNITO_PROVIDER_ID);
  const onlyCognito = loginProviders.length === 1 && cognitoEnabled;
  // Only email sign in is enabled.
  if (onlyCognito) {
    return `Sign in with your email below.`;
  }
  // Both SSO and email sign in is enabled
  if (!onlyCognito && cognitoEnabled) {
    return `${loginMessage} If your sign in method isn't listed, please enter your email.`;
  }
  // Only SSO sign in is enabled
  return loginMessage;
}

export function LoginModal({ onClose, open }: Readonly<IProps>): ReactElement {
  const { authProvider } = useAppConfig();
  const loginProviders = authProvider.getLoginProviders();
  const loginDescription = useMemo(() => getLoginMessage(loginProviders), [loginProviders]);

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const handleLogin = useCallback(async (providerId: string, email?: string): Promise<void> => {
    setError('');
    setMessage('');
    setBusy(true);
    if (providerId === COGNITO_PROVIDER_ID) {
      try {
        await authProvider.loginEmail({ username: email });
        setBusy(false);
        setMessage(LOGIN_SENT_SUCCESS_MSG);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An error occurred');
        setBusy(false);
      }
    } else {
      authProvider.loginSSO(providerId).catch(handlePromiseError);
      if (onClose) onClose();
    }
  }, [onClose]);

  useEffect(() => {
    // Log in automatically if there is only one provider (and it's not Cognito)
    const firstProviderId = loginProviders.at(0)?.id;
    if (loginProviders.length === 1 && firstProviderId !== COGNITO_PROVIDER_ID) {
      void handleLogin(firstProviderId);
    }
  }, [loginProviders, handleLogin]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { p: 3, background: "#FFF", width: '480px' } }}
      
      aria-label="login dialog"
    >
      <Stack alignItems="left" justifyContent="space-between" gap={1} direction={{ xs: 'row' }}>
        <Stack direction="column">
          <Typography id="dialog-title" variant="h4" color="secondary">
            Login
          </Typography>
          <Typography variant="body2">
            {loginDescription}
          </Typography>
        </Stack>
        {!!onClose &&
          <Stack alignItems="right" direction="row" gap={0}>
            <IconButton
              aria-label="Close"
              onClick={() => onClose()}
              size="small"
              color="secondary"
              sx={{ transform: 'translate(10px, 0px)' }}>
              <CloseOutlined sx={{ fontSize: '22px' }} />
            </IconButton>
          </Stack>
        }
      </Stack>
      <Stack sx={{  pt: 0 }}>
        <LoginOptions loginProviders={loginProviders} onSelect={handleLogin} busy={busy} success={!!message} />
        {error && (
          <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
        )}
        {message && (
          <Alert severity="success" sx={{ mt: 4 }}>{message}</Alert>
        )}
      </Stack>
    </Dialog>
  );
}

