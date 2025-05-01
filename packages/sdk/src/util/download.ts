/**
 * Download a blob as a file with the specified file name.
 */
export function downloadBlob(blob: Blob, fileName: string): void {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
}

/**
 * Downloads the specified content as a file with the specified file name and type.
 */
export function downloadContent(content: any, fileName: string, fileType = 'text/plain'): void {
  const blob = new Blob([content], { type: fileType });
  downloadBlob(blob, fileName);
}
