import { DataService, handlePromiseError } from "@cirrobio/sdk";
import { ViewerConfigPayload } from "../models/message";
import { ProjectDetail } from "@cirrobio/api-client";
import { useEffect, useState } from "react";

export function useProjectLoader(viewerConfig: ViewerConfigPayload, dataService: DataService): ProjectDetail {
  const projectId = viewerConfig.project.id;
  const [project, setProject] = useState<ProjectDetail>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (viewerConfig.project.name) {
        setProject(viewerConfig.project as ProjectDetail);
      } else if (projectId) {
        const projectDetail = await dataService.projects.getProject({ projectId });
        setProject(projectDetail);
      }
    };
    loadProject().catch(handlePromiseError);
  }, [projectId, dataService]);

  return project;
}
