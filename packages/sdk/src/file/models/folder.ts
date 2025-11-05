import { v4 as uuidv4 } from 'uuid';
import { FileSystemObject, FileSystemObjectType } from "./file-object.model";
import { getDisplayPath } from "./utils";

export class Folder implements FileSystemObject {
  readonly id: string;
  readonly url: string;
  readonly path: string;
  readonly name: string;
  readonly domain: string;
  readonly kind = 'Folder';
  readonly fileAccessContext = null;
  readonly size = 0;
  readonly type = FileSystemObjectType.FOLDER;

  get displayPath() {
    return getDisplayPath(this);
  }

  constructor(url: string, name: string, path: string, domain: string) {
    this.id = uuidv4();
    this.url = url;
    this.name = name;
    this.path = path;
    this.domain = domain;
  }
}
