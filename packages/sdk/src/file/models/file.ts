import { FileSystemObject, FileSystemObjectType } from "./file-object.model";
import { ProjectFileAccessContext } from "../project-access-context";
import { v4 as uuidv4 } from 'uuid';
import { getDisplayPath } from "../util/get-display.fn";
import { removeStartingSlash } from "../../formatters/slash";

export class File implements FileSystemObject {
  readonly id: string;
  readonly url: string
  readonly size: number;
  readonly path: string;
  readonly name: string;
  readonly metadata: Record<string, any>;
  readonly fileAccessContext: ProjectFileAccessContext;

  get type() {
    return FileSystemObjectType.FILE;
  }

  get kind() {
    return this.name.slice(this.name.lastIndexOf('.') + 1);
  }

  get displayPath() {
    return getDisplayPath(this);
  }

  get relativePath() {
    return removeStartingSlash(`${this.path}/${this.name}`);
  }

  constructor(domain: string, file: string, size: number, metadata: Record<string, any>, accessContext: ProjectFileAccessContext) {
    this.id = uuidv4();
    this.url = `${domain}/${file}`;
    this.size = size;
    this.metadata = metadata;
    this.fileAccessContext = accessContext;

    const fileFolderIdx = file.lastIndexOf('/');
    if (fileFolderIdx === -1) {
      this.path = '';
      this.name = file;
    } else {
      this.path = file.substring(0, fileFolderIdx);
      this.name = file.substring(fileFolderIdx + 1);
    }
  }
}
