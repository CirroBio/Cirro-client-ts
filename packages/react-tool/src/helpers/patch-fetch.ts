import { getSignedUrl } from "@cirrobio/sdk";
import { AWSCredentials } from "@cirrobio/api-client";

export const FETCH_PATCH_PREFIX = "https://sign/";

/*
 * Patch the default fetch function to sign S3 URLs
 * This is a "monkey patch" to intercept fetch and replaces the URL with a signed URL
 */
export function doPatchFetch(credentials: AWSCredentials): void {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    const resource = args[0];
    const requestOptions = args[1];
    if ((typeof resource === 'string' || resource instanceof String) && resource.startsWith(FETCH_PATCH_PREFIX)) {
      const url = await getSignedUrl({ url: resource as string, credentials });
      return await originalFetch(url, requestOptions);
    }
    return await originalFetch(resource, requestOptions);
  };
}
