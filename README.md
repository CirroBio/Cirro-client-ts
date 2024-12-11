## Cirro Client (TypeScript)
![Cirro Header](https://static.cirro.bio/Cirro_Logo_Horizontal_Navy.png)

Packages:
- API client for Cirro `@cirrobio/api-client`
- SDK for Cirro `@cirrobio/sdk` 


## Development

Any updates to the API or SDK should bump the version number for both. 

To update the API client, bump the version in  `openapitools.json` under `npmVersion` and run `npm run apiCodeGen`

To update the SDK, bump the version in `packages/sdk/package.json` under `version`. 

You must have Java installed to use the openapi-generator-cli.
