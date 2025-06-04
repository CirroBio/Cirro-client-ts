import { ViewerServices } from "./viewer-services";
import { useViewer } from "../useViewer";

/**
 * Hook to access the viewer services.
 *
 * @returns {ViewerServices} The viewer services.
 */
export function useViewerServices(): ViewerServices {
  const { services } = useViewer();

  return services;
}
