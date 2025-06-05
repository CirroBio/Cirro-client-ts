import { useContext } from "react";
import { ViewerContext } from "./viewer-context";
import { ViewerServices } from "./viewer-services";
import { ViewerState } from "./viewer-state";


interface ViewerContextType {
  state: ViewerState;
  services: ViewerServices;
}

export function useViewer(): ViewerContextType {
  const ctx = useContext(ViewerContext);
  if (!ctx) throw new Error("useViewerContext must be used within a ViewerProvider");
  return ctx;
}
