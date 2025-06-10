# @cirrobio/react-auth
[![React-Auth](https://img.shields.io/npm/v/@cirrobio/react-auth?color=blue&label=@cirrobio/react-auth)](https://www.npmjs.com/package/@cirrobio/react-auth)

React-based authentication components and context providers for Cirro-based applications.


## Exports

### Providers

- `AuthenticationContextProvider`

  Provides authentication state and user info to the React component tree.

### Hooks

- `useAuthenticator`

  Custom React hook to access authentication state, user info, and sign-out functionality.

### Components

- `LoginModal`

  Modal dialog for user login (wraps the `LoginOptions` component).

- `LoginOptions`
  
  UI for selecting login methods.

- `LoginWrapper`

  Wrapper component to check authentication state and render children accordingly. 
  If not authenticated, it displays the `LoginModal`.

## Auth Providers

- `AmplifyAuthProvider`

   Handles user authentication using the AWS Amplify library.

- `StaticInteractiveAuthTokenProvider`

   Static token-based authentication provider for testing or service accounts.
