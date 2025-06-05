import { ViewerServices } from "./viewer-context/viewer-services";
import { useViewer } from "./viewer-context/useViewer";

export function useViewerServices(): ViewerServices {
  return useViewer().services;
}
