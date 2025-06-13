import { ViewerServices } from "./viewer-services";
import { createContext } from "react";
import { ViewerState } from "./viewer-state";

export interface ViewerContextType {
  state: ViewerState;
  services: ViewerServices;
}

export const ViewerContext = createContext<ViewerContextType>(null);
