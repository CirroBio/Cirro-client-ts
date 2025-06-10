# @cirrobio/react-tool

[![React Tool](https://img.shields.io/npm/v/@cirrobio/react-tool?color=blue&label=@cirrobio/react-tool)](https://www.npmjs.com/package/@cirrobio/react-tool)

React components and utilities for Cirro tools and viewers.

## Exports

### Providers

- `ViewerProvider`

A context provider that wraps the tool in everything needed to interact with Cirro.

### Hooks

- `useViewerState`

  React hook to access the current state of the viewer.
  The viewer state is responsible for providing information to the viewer about the currently selected Cirro project, dataset, and files available.

- `useViewerServices`

  React hook to access the services available in the viewer.
  The services can be used to interact with the Cirro API or files.

## Developing Tools

Tools will need to use the `ViewerProvider` to wrap the tool's root component. This will provide the necessary context for the tool to function correctly.

The `ViewerProvider` takes the following props:

- `apiBasePath` (optional)

  The base path for the Cirro API. If not provided, it defaults to `/api`.
  This will need to be changed in most cases unless you use vite-proxy or a similar proxy setup.
  This will be overridden by the viewer if it is in Embedded mode.

- `patchFetch` (optional)

  If this is true, the `fetch` function will be patched to sign requests to S3 automatically if the prefix is provided (use `getPatchedSignUrl`).
  This is useful for tools where you do not have control over how it requests files. 
  For example, some tools may only require you to input a base path to a file, and it uses HTTP Range requests or relative paths to access data (i.e., Zarr, OME-TIFF, etc.). 

- `authProvider` (optional)

  Use this to provide an authentication provider that will be used to authenticate requests to the Cirro API.
  This will default to `AmplifyAuthProvider`, but for local testing it may be useful to use `StaticInteractiveAuthTokenProvider`.
  If you have to override the OAuth client ID, please create a new instance of `AmplifyAuthProvider` with the desired client ID.

### Examples

[Image Viewer](../../examples/image-viewer)

Provides a basic viewer for `png`, `jpeg`, and `svg` images.

### Local Development

The Cirro tool is designed to get the viewer state from the Cirro UI directly.

To test locally, you can add the `projectId`, `datasetId`, and `file` query params to the URL to fill out the 
`project`, `dataset`, and `selectedFile` in the viewer state, respectively.
