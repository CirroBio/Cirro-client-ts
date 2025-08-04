import { Upload } from "@aws-sdk/lib-storage";
import { AWSCredentials } from '@cirrobio/api-client';
import { createS3Client } from "../util/s3-client";
import { PutObjectCommandInput } from "@aws-sdk/client-s3";

export interface UploadFileParams {
  bucket: string;
  path: string;
  file: File;
  credentials: AWSCredentials;
  metadata?: Record<string, string>;
}

/**
 * Upload a file to S3
 */
export function uploadFile({ bucket, path, file, credentials, metadata }: UploadFileParams): Upload {
  const params: PutObjectCommandInput = {
    Bucket: bucket,
    Key: path,
    Body: file,
    ContentType: file.type,
    Metadata: metadata
  };
  return new Upload({
    client: createS3Client(credentials),
    queueSize: 4,
    params,
  });
}

