
const resourcePrefix = 'project-';

export function getResourceName(projectId: string): string {
  return `${resourcePrefix}${projectId}`;
}

