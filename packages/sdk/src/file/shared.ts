import { getResourceName } from "../util/get-resource-name";

/**
 * Get the S3 bucket name for a project.
 * Will be deprecated in the future, use domain from manifest instead.
 */
export function getProjectS3Bucket(projectId: string): string {
  return getResourceName(projectId)
}
