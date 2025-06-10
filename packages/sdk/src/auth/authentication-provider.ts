import { CurrentUser } from "./current-user";
import { SystemInfoResponse } from "@cirrobio/api-client";


/**
 * AuthenticationProvider defines how the application will authenticate users to Cirro.
 */
export interface AuthenticationProvider {
  /**
   * Configures the authentication provider
   */
  configure: (config: SystemInfoResponse) => void;
  /**
   * Returns access token for the current user.
   */
  getAccessToken: () => Promise<string>;
  /**
   * Returns the current user information.
   */
  getCurrentUser: () => Promise<CurrentUser>;
  /**
   * Force a refresh of the authentication state.
   * (i.e., pull a fresh access token to get the latest user info)
   */
  forceRefresh: () => Promise<void>;
}
