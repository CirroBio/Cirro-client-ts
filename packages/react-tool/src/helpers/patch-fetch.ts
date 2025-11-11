import { getSignedUrl } from "@cirrobio/sdk";
import { AWSCredentials } from "@cirrobio/api-client";

const FETCH_PATCH_PREFIX = "https://sign/";

export function getPatchedSignUrl(url: string): string {
  return FETCH_PATCH_PREFIX + url;
}

/*
 * Patch the default fetch function to sign S3 URLs
 * This is a "monkey patch" to intercept fetch and replaces the URL with a signed URL
 */
export function doPatchFetch(credsGetter: () => Promise<AWSCredentials>): void {
  const { fetch: originalFetch } = window;
  console.debug("Patching fetch function");
  window.fetch = async (...args) => {
    const resource = args[0];
    const requestOptions = args[1];
    if ((typeof resource === 'string' || resource instanceof String) && resource.startsWith(FETCH_PATCH_PREFIX)) {
      const url = resource.replace(FETCH_PATCH_PREFIX, '');
      const credentials = await credsGetter();
      const signedUrl = await getSignedUrl({ url, credentials });
      return await originalFetch(signedUrl, requestOptions);
    }
    return await originalFetch(resource, requestOptions);
  };
}
