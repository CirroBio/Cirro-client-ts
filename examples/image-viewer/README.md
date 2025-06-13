## Example Cirro Image Viewer

Basic viewer for `png`, `jpeg`, and `svg` images.

See the [`@cirrobio/react-tool`](../../packages/react-tool) package for more information on how to write your own Cirro tools.

Steps:

- Wrap the viewer in the providers from `@cirrobio/react-core` and `@cirrobio/react-tool`:
  ```tsx
  <ThemeProvider>            // From @cirrobio/react-core (optional)
    <ViewerProvider>         // From @cirrobio/react-tool
      <Viewer />
    </ViewerProvider>
  </ThemeProvider>
  ```
  - For development purposes, set the `apiBasePath` to `https://<tenantId>.cirro.bio/api`
  - The theme providers can be customized or replaced with your own theme implementation
- See [`Viewer.tsx`](src/Viewer.tsx) for annotated code on how to use the `useViewerState` and `useViewerServices` hooks.
