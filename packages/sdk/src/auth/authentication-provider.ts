import { SystemInfoResponse } from "@cirrobio/api-client";

export interface AuthenticationProvider {
  load: (config: SystemInfoResponse) => void;
  isAuthenticated: () => boolean;
  getAccessToken: () => Promise<string>;
}
