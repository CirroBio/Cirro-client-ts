export enum ViewerMode {
  EMBEDDED,
  STANDALONE,
}

export function getViewerMode(): ViewerMode {
  const inEmbeddedContext = window.self !== window.top;
  return inEmbeddedContext ? ViewerMode.EMBEDDED : ViewerMode.STANDALONE;
}
