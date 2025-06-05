import { SystemInfoResponse } from "@cirrobio/api-client";
import { configureAmplify } from "./configure-amplify";
import { AuthenticationProvider } from "@cirrobio/sdk";
import { fetchAuthSession } from "@aws-amplify/auth";


export class AmplifyAuthProvider implements AuthenticationProvider {
  constructor(
    readonly clientId?: string
  ) {
  }

  public load(config: SystemInfoResponse): void {
    configureAmplify(config, this.clientId);
    console.log('AmplifyAuthProvider loaded with config');
  }

  public async getAccessToken() {
    const session = await fetchAuthSession();
    if (!session) {
      throw new Error("Authentication session is not valid or has expired.");
    }
    return session.tokens.accessToken.toString();
  }

}
