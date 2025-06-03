import { calculateTotalSize } from "../calculate-size";
import { bytesToString } from "../../formatters";
import { FileSystemObject } from "./file-object.model";

export class Assets extends Array<FileSystemObject> {
  private _totalSize: string;
  private _totalSizeBytes: number;

  // Total size of all files in human-readable format
  get totalSize(): string {
    if (!this._totalSize) {
      this.calculateSize();
    }
    return this._totalSize;
  }

  get totalSizeBytes(): number {
    if (!this._totalSizeBytes) {
      this.calculateSize();
    }
    return this._totalSizeBytes;
  }
  private calculateSize(): void {
    this._totalSizeBytes = calculateTotalSize(this);
    this._totalSize = bytesToString(this._totalSizeBytes)
  }
}
