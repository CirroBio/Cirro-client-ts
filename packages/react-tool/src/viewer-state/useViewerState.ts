import { useViewer } from "../useViewer";
import { ViewerState } from "./viewer-state";

/**
 * Hook to access the current viewer state.
 *
 * @returns {ViewerState} The current viewer state.
 */
export function useViewerState(): ViewerState {
  const { state } = useViewer();

  return state;
}
