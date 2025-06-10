import { S3Client } from "@aws-sdk/client-s3";
import { AWSCredentials } from "@cirrobio/api-client";

const clientCache = new Map<string, S3Client>();

/**
 * Creates an S3 client using the provided credentials.
 */
export function createS3Client(credentials: AWSCredentials): S3Client {
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
    useDualstackEndpoint: true,
  });
  clientCache.set(cacheKey, newClient);
  return newClient;
}
