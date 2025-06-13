import { SystemInfoResponse } from "@cirrobio/api-client";
import { AuthenticationProvider } from "./authentication-provider";
import { CurrentUser } from "./current-user";


export class StaticTokenAuthProvider implements AuthenticationProvider {
  constructor(
    readonly token: string
  ) {
  }

  public configure(_ignore: SystemInfoResponse): void {
    console.log('StaticTokenAuthProvider loaded');
  }

  public async getAccessToken() {
    return this.token;
  }

  public async getCurrentUser() {
    const accessToken = await this.getAccessToken();
    const parsedToken = JSON.parse(atob(accessToken.split('.')[1]));
    return CurrentUser.fromCognitoUser(parsedToken);
  }

  public forceRefresh(): Promise<void> {
    return Promise.resolve();
  }
}
