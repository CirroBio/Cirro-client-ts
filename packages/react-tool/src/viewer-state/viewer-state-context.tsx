import { createContext } from "react";
import { ViewerConfigPayload } from "../models/message";
import { AWSCredentials } from "@cirrobio/api-client";

export type ViewerStatus = 'LOADING' | 'READY' | 'ERROR';

export interface ViewerStateContextType {
  status: ViewerStatus;
  config: ViewerConfigPayload | null;
  s3Credentials: AWSCredentials | null;
  updateConfig: (config: ViewerConfigPayload) => void;
}

export const ViewerStateContext = createContext<ViewerStateContextType | undefined>(undefined);
