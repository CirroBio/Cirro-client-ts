import { SystemInfoResponse } from "@cirrobio/api-client";
import { Amplify } from "aws-amplify";

export function configureAmplify(config: SystemInfoResponse, clientIdOverride?: string): void {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: config.auth.userPoolId,
        userPoolClientId: clientIdOverride ?? config.auth.uiAppId,
        loginWith: {
          oauth: {
            domain: config.auth.endpoint,
            scopes: [
              'phone',
              'email',
              'profile',
              'openid',
              'aws.cognito.signin.user.admin'
            ],
            redirectSignIn: [window.location.origin],
            redirectSignOut: [window.location.origin],
            responseType: 'code',
          },
        },
      },
    },
    API: {
      GraphQL: {
        endpoint: config.liveEndpoint,
        region: config.region,
        defaultAuthMode: 'userPool',
      },
    },
  });
}
