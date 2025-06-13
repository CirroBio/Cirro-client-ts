import { StaticTokenAuthProvider } from "@cirrobio/sdk";
import { InteractiveAuthenticationProvider } from "@cirrobio/react-core";


/**
 * StaticInteractiveAuthTokenProvider is a simple implementation of the InteractiveAuthenticationProvider
 * that uses a static token for authentication. This is useful for testing or when you have a known token.
 */
export class StaticInteractiveAuthTokenProvider
  extends StaticTokenAuthProvider
  implements InteractiveAuthenticationProvider {

  constructor(token: string) {
    super(token);
  }

  async getAccessToken(): Promise<string> {
    return this.token;
  }

  loginSSO(): Promise<void> {
    return Promise.resolve();
  }

  loginEmail(_): Promise<void> {
    return Promise.resolve();
  }

  finishLoginEmail(_): Promise<void> {
    return Promise.resolve();
  }

  signOut(): Promise<void> {
    return Promise.resolve();
  }

  getLoginProviders() {
    return [];
  }

  registerAuthEventHandler(_): void {
    // No-op for static token provider
  }
}
