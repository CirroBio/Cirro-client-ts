## Example Cirro Image Viewer

Basic viewer for `png`, `jpeg`, and `svg` images.

See the [`@cirrobio/react-tool`](../../packages/react-tool) package for more information on how to write your own Cirro tools.

Steps:

- Wrap the viewer in the `ViewerProvider` from `@cirrobio/react-tool`.
  - For development purposes, we will need to set the `apiBasePath` to `https://<tenantId>.cirro.bio/api`.
- See [`Viewer.tsx`](src/Viewer.tsx) for annotated code on how to use the `useViewerState` and `useViewerServices` hooks.
