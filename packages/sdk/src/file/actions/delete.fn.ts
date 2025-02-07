import { AWSCredentials } from "@cirrobio/api-client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3UriToParams } from "../util/s3-utils";
import { createS3Client } from "../util/s3-client";

export interface DeleteFileParams {
  url: string;
  credentials: AWSCredentials;
}

/**
 * Delete a file from S3 given its URL and credentials.
 */
export async function deleteFile({ url, credentials }: DeleteFileParams): Promise<void> {
  const { Bucket, Key } = s3UriToParams(url);
  const cmd = new DeleteObjectCommand({ Bucket, Key });
  await createS3Client(credentials).send(cmd);
}
