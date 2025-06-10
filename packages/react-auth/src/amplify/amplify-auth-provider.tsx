import { LoginProvider } from "@cirrobio/api-client";
import { configureAmplify } from "./configure-amplify";
import { fetchAuthSession } from "@aws-amplify/auth";
import {
  AppConfig,
  InteractiveAuthenticationProvider,
  IRedeemSignInLink,
  ISignInLinkRequest,
  AuthEventHandlerOptions
} from "@cirrobio/react-ui-core";
import { signInWithRedirect } from "aws-amplify/auth";
import { redeemSignInLink, requestSignInLink } from "./magic-link";
import { Hub } from "aws-amplify/utils";
import { amplifyAuthEventHandler } from "./auth-listener";
import { CurrentUser } from "@cirrobio/sdk";
import { signOut as amplifySignOut } from 'aws-amplify/auth';

export class AmplifyAuthProvider implements InteractiveAuthenticationProvider {
  private loginProviders: LoginProvider[];

  constructor(
    readonly clientId?: string
  ) {
  }

  public getLoginProviders() {
    return this.loginProviders;
  }

  public configure(config: AppConfig): void {
    configureAmplify(config, this.clientId);
    this.loginProviders = config.tenantInfo.loginProviders;
    console.log('AmplifyAuthProvider loaded with config');
  }

  public async getAccessToken(): Promise<string> {
    const session = await fetchAuthSession();
    return session.tokens.accessToken.toString();
  }

  public async getCurrentUser(): Promise<CurrentUser> {
    const session = await fetchAuthSession();
    const idToken = session.tokens.idToken.payload;
    return CurrentUser.fromCognitoUser(idToken);
  }

  public async forceRefresh(): Promise<void> {
    await fetchAuthSession({ forceRefresh: true });
  }

  public async loginSSO(loginProvider: string): Promise<void> {
    await signInWithRedirect({ provider: { custom: loginProvider } })
  }

  public async loginEmail(request: ISignInLinkRequest): Promise<void> {
    await requestSignInLink(request);
  }

  public async finishLoginEmail(request: IRedeemSignInLink): Promise<void> {
    await redeemSignInLink(request);
  }

  public async signOut(): Promise<void> {
    await amplifySignOut();
  }

  public registerAuthEventHandler(options: AuthEventHandlerOptions): () => void {
    return Hub.listen('auth', (data) => amplifyAuthEventHandler(data, options), 'authentication-provider');
  }
}
