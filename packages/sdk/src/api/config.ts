import { PortalErrorHandler } from "./error-handler";
import { Configuration, FetchAPI } from "@cirrobio/api-client";

interface GetConfigParams {
  tokenGetter?: () => Promise<string>;
  basePath?: string;
  fetchApi?: FetchAPI;
}

export const generateApiConfig = ({ basePath = "/api", tokenGetter, fetchApi }: GetConfigParams) => {
  return new Configuration({
    basePath,
    accessToken: tokenGetter,
    fetchApi,
    middleware: [
      new PortalErrorHandler()
    ],
  });
}
