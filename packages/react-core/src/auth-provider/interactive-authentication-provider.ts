import { LoginProvider } from "@cirrobio/api-client";
import { AuthenticationProvider } from "@cirrobio/sdk";

export type ISignInLinkRequest = {
  username: string;
  redirectUri?: string;
}

export type IRedeemSignInLink = {
  username: string;
  challenge: string;
}

export type AuthEventHandlerOptions = {
  onSignIn?: () => void;
  onSignOut?: () => void;
}

/**
 * Authentication provider that supports interactive login methods.
 */
export interface InteractiveAuthenticationProvider extends AuthenticationProvider {
  /**
   * Login with the specified SSO provider.
   * @param providerId
   */
  loginSSO: (providerId: string) => Promise<void>;

  /**
   * Login with a magic link sent to the user's email.
   * @param request
   */
  loginEmail: (request: ISignInLinkRequest) => Promise<void>;

  /**
   * Finish the login process after the user clicks the magic link in their email.
   * @param request
   */
  finishLoginEmail: (request: IRedeemSignInLink) => Promise<void>;

  /**
   * Sign out the user.
   */
  signOut: () => Promise<void>;

  /**
   * List of login providers available for the user.
   */
  getLoginProviders: () => LoginProvider[];

  registerAuthEventHandler: (options?: AuthEventHandlerOptions) => void;
}
