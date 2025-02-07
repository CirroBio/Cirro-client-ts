/**
 * Get the S3 bucket name for a project.
 * Will be deprecated in the future.
 */
export function getProjectS3Bucket(projectId: string): string {
  return `project-${projectId}`;
}
