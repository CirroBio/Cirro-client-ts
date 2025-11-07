import { AWSCredentials } from "@cirrobio/api-client";
import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";
import { getSignedUrl as getSignedUrlInternal } from "@aws-sdk/s3-request-presigner";
import { createS3Client } from "../util/s3-client";
import { s3UriToParams } from "../util/s3-utils";
import { S3ClientConfigType } from "@aws-sdk/client-s3/dist-types/S3Client";

export interface GetFileUrlParams extends GetSignedUrlOptions {
  url: string;
  credentials?: AWSCredentials;
}

export interface GetSignedUrlOptions {
  /**
   * Whether to signal the browser to download this file on access
   * (sets content disposition)
   */
  download?: boolean;
  /**
   * Whether to signal the browser to request gzipped content
   */
  gzip?: boolean;
  /**
   * Signed URL expiry timeout
   * Defaults to 5 minutes
   */
  timeout?: number;
  /**
   * Override file name to download (when using download = true)
   */
  filename?: string;
  /**
   * Override the region of the bucket
   */
  region?: string;
}

/**
 * Get a signed URL for a file in S3 given its S3 URI.
 */
export function getSignedUrl({ url, credentials, ...params }: GetFileUrlParams): Promise<string> {
  const clientParams: S3ClientConfigType = {};
  if (params.region) {
    clientParams.region = params.region;
  }
  const client = createS3Client(credentials, clientParams);
  const { Bucket, Key } = s3UriToParams(url);
  const args: GetObjectCommandInput = { Bucket, Key };
  if (params?.download) {
    const fileName = params.filename ?? Key.split('/').pop();
    args.ResponseContentDisposition = `attachment; filename="${fileName}"`
  }
  if (params?.gzip) {
    args.ResponseContentEncoding = 'gzip'
  }
  const command = new GetObjectCommand(args);
  return getSignedUrlInternal(client, command, { expiresIn: 60 * (params?.timeout ?? 5) });
}
