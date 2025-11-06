import { removeStartingSlash } from "../../formatters/slash";
import { FileSystemObject } from "../models/file-object.model";

export function getDisplayPath(file: FileSystemObject, dataPrefix: string = "data/") {
  return removeStartingSlash(`${file.path}/${file.name}`.replace(dataPrefix, ''));
}
