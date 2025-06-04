import { DataService, FileService } from "@cirrobio/sdk";


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
