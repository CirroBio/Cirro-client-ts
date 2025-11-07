import { S3Client } from "@aws-sdk/client-s3";
import { AWSCredentials } from "@cirrobio/api-client";
import { S3ClientConfigType } from "@aws-sdk/client-s3/dist-types/S3Client";

const clientCache = new Map<string, S3Client>();

const clientDefaults: S3ClientConfigType = {
  // Support ipv6 endpoints
  useDualstackEndpoint: true,
  // Protection against not having the correct region (does not work for signed url fn)
  followRegionRedirects: true,
}

/**
 * Creates an S3 client using the provided credentials.
 */
export function createS3Client(credentials: AWSCredentials, clientOverrides: S3ClientConfigType = {}): S3Client {
  const cacheKey = `${credentials.accessKeyId}-${credentials.region}`;
  const cachedClient = clientCache.get(cacheKey);
  if (cachedClient) {
    return cachedClient;
  }
  const newClient = new S3Client({
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      sessionToken: credentials.sessionToken,
    },
    region: credentials.region,
    ...clientDefaults,
    ...clientOverrides
  });
  clientCache.set(cacheKey, newClient);
  return newClient;
}
