import { FileSystemObject } from "./file-object.model";

export function getDisplayPath(file: FileSystemObject, dataPrefix: string = "data/") {
  return `${file.path}/${file.name}`.replace(dataPrefix, '');
}
