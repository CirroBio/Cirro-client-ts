import { ProjectFileAccessContext } from "../project-access-context";

export enum FileSystemObjectType {
  FILE = 'file',
  FOLDER = 'folder'
}

/**
 * Represents a file that can be downloaded
 */
export interface DownloadableFile {
  url: string;
  name?: string;
  fileAccessContext: ProjectFileAccessContext;
}

/**
 * Represents a file in Cirro
 */
export interface FileSystemObject extends DownloadableFile {
  /**
   * Unique Id For Object
   */
  id: string;
  /**
   * Object S3 Url
   */
  url: string;
  /**
   * Object Path
   */
  path: string;
  /**
   * Object Display Path
   */
  displayPath: string;
  /**
   * Object Relative Path to base
   */
  relativePath: string;
  /**
   * Object Name
   */
  name: string;
  /**
   * Object Size
   */
  size: number;
  /**
   * Object Kind (PNG, TXT)
   */
  kind: string;
  /**
   * Object Type (File or Folder)
   */
  type: FileSystemObjectType;
  /**
   * Metadata
   */
  metadata?: Record<string, any>;
  /**
   * Access context
   */
  fileAccessContext: ProjectFileAccessContext;
}
