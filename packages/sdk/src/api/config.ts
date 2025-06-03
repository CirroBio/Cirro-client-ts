import { PortalErrorHandler } from "./error-handler";
import { Configuration } from "@cirrobio/api-client";

interface GetConfigParams {
  tokenGetter: () => Promise<string>;
  basePath?: string;
}

export const generateApiConfig = ({ basePath = "/api", tokenGetter}: GetConfigParams) => {
  return new Configuration({
    basePath,
    accessToken: tokenGetter,
    middleware: [
      new PortalErrorHandler()
    ],
  });
}
