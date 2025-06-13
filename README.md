## Cirro Client (TypeScript)
![Cirro Header](https://static.cirro.bio/Cirro_Logo_Horizontal_Navy.png)

Packages:

- API client for Cirro `@cirrobio/api-client`

  [![API Client Version](https://img.shields.io/npm/v/@cirrobio/api-client?color=blue&label=@cirrobio/api-client)](https://www.npmjs.com/package/@cirrobio/api-client)

- SDK for Cirro `@cirrobio/sdk` 

  [![SDK Version](https://img.shields.io/npm/v/@cirrobio/sdk?color=blue&label=@cirrobio/sdk)](https://www.npmjs.com/package/@cirrobio/sdk)

React Libraries:

- Core `@cirrobio/react-core`

  [![React Core Version](https://img.shields.io/npm/v/@cirrobio/react-core?color=blue&label=@cirrobio/react-core)](https://www.npmjs.com/package/@cirrobio/react-core)

- Authentication `@cirrobio/react-auth`

  [![React Auth Version](https://img.shields.io/npm/v/@cirrobio/react-auth?color=blue&label=@cirrobio/react-auth)](https://www.npmjs.com/package/@cirrobio/react-auth)

- Tool development `@cirrobio/react-tool`

  [![React Tool Version](https://img.shields.io/npm/v/@cirrobio/react-tool?color=blue&label=@cirrobio/react-tool)](https://www.npmjs.com/package/@cirrobio/react-tool)


## Development

Any updates to the API or SDK should bump the version number for both. 

To update the API client, bump the version in  `openapitools.json` under `npmVersion` and run `npm run apiCodeGen`

To update the SDK, bump the version in `packages/sdk/package.json` under `version`. 

You must have Java installed to use the openapi-generator-cli.



## Getting Started

To run the example project (image-viewer) locally, follow these steps:

1. Install dependencies (from the root of the monorepo):
   ```sh
   yarn install
   ```
2. Build all packages (from the root):
   ```sh
   yarn build
   ```
3. Launch the example app (from the example directory):
   ```sh
   cd examples/image-viewer
   yarn dev
   ```
   This starts the Vite dev server (typically at http://localhost:8000/tools/image).
