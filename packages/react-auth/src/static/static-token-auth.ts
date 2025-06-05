import { SystemInfoResponse } from "@cirrobio/api-client";
import { AuthenticationProvider } from "@cirrobio/sdk";


export class StaticTokenAuthProvider implements AuthenticationProvider {
  constructor(
    readonly token: string
  ) {
  }

  public load(config: SystemInfoResponse): void {
    console.log('StaticTokenAuthProvider loaded');
  }

  public async getAccessToken() {
    return this.token;
  }
}
