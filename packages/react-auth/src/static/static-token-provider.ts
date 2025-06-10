import { StaticTokenAuthProvider } from "@cirrobio/sdk";
import { InteractiveAuthenticationProvider } from "@cirrobio/react-ui-core";


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

  loginEmail(ignore): Promise<void> {
    return Promise.resolve();
  }

  finishLoginEmail(ignore): Promise<void> {
    return Promise.resolve();
  }

  signOut(): Promise<void> {
    return Promise.resolve();
  }

  getLoginProviders() {
    return [];
  }

  registerAuthEventHandler(ignore): void {
    // No-op for static token provider
  }
}
