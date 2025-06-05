import { SystemInfoResponse } from "@cirrobio/api-client";

export interface AuthenticationProvider {
  load: (config: SystemInfoResponse) => void;
  getAccessToken: () => Promise<string>;
}
