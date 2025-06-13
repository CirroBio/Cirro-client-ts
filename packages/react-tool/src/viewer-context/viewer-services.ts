import { DataService, FileService } from "@cirrobio/sdk";


/**
 * ViewerServices provides access to API or file operations as needed by the viewer.
 */
export interface ViewerServices {
  /**
   * Data Service instance for calling Cirro API endpoints
   */
  dataService: DataService;
  /**
   * File Service instance for file operations
   */
  fileService: FileService;
}
