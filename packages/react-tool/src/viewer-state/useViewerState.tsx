import { useContext } from "react";
import { ViewerStateContext, ViewerStateContextType } from "./viewer-state-context";

export function useViewerState(): ViewerStateContextType {
  const state = useContext(ViewerStateContext);

  if (!state) {
    throw new Error('useViewerContext must be used within a ViewerStateContextProvider');
  }
  return state;
}
