import { AppConfigContext, AppConfigContextType } from "./app-config-context";
import { useContext } from "react";

export function useAppConfig(): AppConfigContextType {
  return useContext(AppConfigContext);
}
