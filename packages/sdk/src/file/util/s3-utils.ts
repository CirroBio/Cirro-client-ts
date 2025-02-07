/**
 * Converts an S3 URI to a bucket and key
 * @param uri
 */
export function s3UriToParams(uri: string): { Bucket: string, Key: string } {
  const matches = /(?:s3:\/\/)?([^/]+)\/(.*)/.exec(uri);
  if (!matches) {
    throw new Error(`Received invalid uri: '${uri}'`);
  }
  return {
    Bucket: matches[1],
    Key: matches[2],
  };
}

