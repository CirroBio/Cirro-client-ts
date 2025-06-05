import { useViewer } from "./viewer-context/useViewer";
import { ViewerState } from "./viewer-context/viewer-state";

export function useViewerState(): ViewerState {
  return useViewer().state;
}
