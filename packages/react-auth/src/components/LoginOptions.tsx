import React, { Children, ReactElement, useMemo, useState } from 'react';
import { Button, Divider, Stack, TextField } from '@mui/material';
import { LoginProvider } from '@cirrobio/api-client';
import { LoadingButton } from '@mui/lab';
import { COGNITO_PROVIDER_ID } from "../amplify/magic-link";

interface IProps {
  loginProviders: LoginProvider[];
  onSelect: (providerId: string, email?: string) => void;
  busy: boolean;
  success: boolean;
}


export function LoginOptions({ loginProviders, onSelect, busy, success }: Readonly<IProps>): ReactElement {
  const [email, setEmail] = useState('');

  const ssoProviders = useMemo(() =>
    loginProviders.filter(p => p.id !== COGNITO_PROVIDER_ID), [loginProviders]);
  const cognitoEnabled = useMemo(() =>
    loginProviders.some(p => p.id === COGNITO_PROVIDER_ID), [loginProviders]);

  return (
    <Stack alignItems="center" gap={3} direction="column" sx={{ pt: 2 }}>
      {Children.toArray(ssoProviders.map(provider => {
        return (<Button
          sx={{ p: 2, width: '100%' }}
          variant="contained"
          color="secondary"
          fullWidth={true}
          startIcon={<img style={{ maxHeight: '17px' }} alt={provider.name} src={provider.logoUrl} />}
          onClick={() => onSelect(provider.id)}
        >{provider.name}</Button>)
      }))}
      {cognitoEnabled && (
        <form style={{ width: '100%' }}>
          <Stack alignItems="center" gap={3} direction="column">
            {ssoProviders.length > 0 && (<Divider textAlign="center" flexItem>OR</Divider>)}
            <TextField
              label="Email"
              size="medium"
              value={email}
              variant="outlined"
              autoComplete="off"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoadingButton
              type="submit"
              loading={busy}
              disabled={!email?.trim() || success}
              variant="contained"
              color="secondary"
              fullWidth={true}
              onClick={() => onSelect(COGNITO_PROVIDER_ID, email)}
            >
              Sign in with email
            </LoadingButton>
          </Stack>
        </form>
      )}
    </Stack>
  )
}
