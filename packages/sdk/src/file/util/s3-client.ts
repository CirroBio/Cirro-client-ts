import { S3Client } from "@aws-sdk/client-s3";
import { AWSCredentials } from "@cirrobio/api-client";

/**
 * Creates an S3 client using the provided credentials.
 */
export function createS3Client(credentials: AWSCredentials): S3Client {
  return new S3Client({
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      sessionToken: credentials.sessionToken,
    },
    region: credentials.region,
    useDualstackEndpoint: true,
  });
}
