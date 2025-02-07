import { AWSCredentials } from "@cirrobio/api-client";
import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";
import { getSignedUrl as getSignedUrlInternal } from "@aws-sdk/s3-request-presigner";
import { createS3Client } from "../util/s3-client";
import { s3UriToParams } from "../util/s3-utils";

export interface GetFileUrlParams extends GetSignedUrlOptions {
  url: string;
  credentials?: AWSCredentials;
}

export interface GetSignedUrlOptions {
  download?: boolean;
  gzip?: boolean;
  timeout?: number;
  filename?: string;
}

/**
 * Get a signed URL for a file in S3 given its S3 URI.
 */
export function getSignedUrl({ url, credentials, ...params }: GetFileUrlParams): Promise<string> {
  const client = createS3Client(credentials);
  const { Bucket, Key } = s3UriToParams(url);
  const fileName = params.filename ?? Key.split('/').pop();
  const args: GetObjectCommandInput = { Bucket, Key };
  if (params?.download) {
    args.ResponseContentDisposition = `attachment; filename="${fileName}"`
  }
  if (params?.gzip) {
    args.ResponseContentEncoding = 'gzip'
  }
  const command = new GetObjectCommand(args);
  return getSignedUrlInternal(client, command, { expiresIn: 60 * (params?.timeout ?? 5) });
}
