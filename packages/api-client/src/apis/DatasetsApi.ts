/* tslint:disable */
/* eslint-disable */
/**
 * Cirro Data
 * Cirro Data Platform service API
 *
 * The version of the OpenAPI document: latest
 * Contact: support@cirro.bio
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateResponse,
  DatasetAssetsManifest,
  DatasetDetail,
  ImportDataRequest,
  PaginatedResponseDatasetListDto,
  UpdateDatasetRequest,
  UploadDatasetCreateResponse,
  UploadDatasetRequest,
} from '../models/index';
import {
    CreateResponseFromJSON,
    CreateResponseToJSON,
    DatasetAssetsManifestFromJSON,
    DatasetAssetsManifestToJSON,
    DatasetDetailFromJSON,
    DatasetDetailToJSON,
    ImportDataRequestFromJSON,
    ImportDataRequestToJSON,
    PaginatedResponseDatasetListDtoFromJSON,
    PaginatedResponseDatasetListDtoToJSON,
    UpdateDatasetRequestFromJSON,
    UpdateDatasetRequestToJSON,
    UploadDatasetCreateResponseFromJSON,
    UploadDatasetCreateResponseToJSON,
    UploadDatasetRequestFromJSON,
    UploadDatasetRequestToJSON,
} from '../models/index';

export interface DeleteDatasetRequest {
    projectId: string;
    datasetId: string;
}

export interface GetDatasetRequest {
    datasetId: string;
    projectId: string;
}

export interface GetDatasetManifestRequest {
    datasetId: string;
    projectId: string;
    fileOffset?: number;
    fileLimit?: number;
}

export interface GetDatasetsRequest {
    projectId: string;
    limit?: number;
    nextToken?: string;
}

export interface ImportPublicDatasetRequest {
    projectId: string;
    importDataRequest: ImportDataRequest;
}

export interface IngestSamplesRequest {
    projectId: string;
    datasetId: string;
}

export interface RegenerateManifestRequest {
    projectId: string;
    datasetId: string;
}

export interface RerunTransformRequest {
    projectId: string;
    datasetId: string;
}

export interface UpdateDatasetOperationRequest {
    projectId: string;
    datasetId: string;
    updateDatasetRequest: UpdateDatasetRequest;
}

export interface UploadDatasetOperationRequest {
    projectId: string;
    uploadDatasetRequest: UploadDatasetRequest;
}

/**
 * 
 */
export class DatasetsApi extends runtime.BaseAPI {

    /**
     * Deletes the dataset, files are saved according to the project\'s retention time.
     * Delete a dataset
     */
    async deleteDatasetRaw(requestParameters: DeleteDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteDataset.');
        }

        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling deleteDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the dataset, files are saved according to the project\'s retention time.
     * Delete a dataset
     */
    async deleteDataset(requestParameters: DeleteDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDatasetRaw(requestParameters, initOverrides);
    }

    /**
     * Gets detailed information about a dataset
     * Get dataset
     */
    async getDatasetRaw(requestParameters: GetDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DatasetDetail>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling getDataset.');
        }

        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))).replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetDetailFromJSON(jsonValue));
    }

    /**
     * Gets detailed information about a dataset
     * Get dataset
     */
    async getDataset(requestParameters: GetDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DatasetDetail> {
        const response = await this.getDatasetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a listing of files, charts, and other assets available for the dataset
     * Get dataset manifest
     */
    async getDatasetManifestRaw(requestParameters: GetDatasetManifestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DatasetAssetsManifest>> {
        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling getDatasetManifest.');
        }

        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getDatasetManifest.');
        }

        const queryParameters: any = {};

        if (requestParameters.fileOffset !== undefined) {
            queryParameters['fileOffset'] = requestParameters.fileOffset;
        }

        if (requestParameters.fileLimit !== undefined) {
            queryParameters['fileLimit'] = requestParameters.fileLimit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}/files`.replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))).replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetAssetsManifestFromJSON(jsonValue));
    }

    /**
     * Gets a listing of files, charts, and other assets available for the dataset
     * Get dataset manifest
     */
    async getDatasetManifest(requestParameters: GetDatasetManifestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DatasetAssetsManifest> {
        const response = await this.getDatasetManifestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of datasets for a given project
     * List datasets
     */
    async getDatasetsRaw(requestParameters: GetDatasetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedResponseDatasetListDto>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getDatasets.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.nextToken !== undefined) {
            queryParameters['nextToken'] = requestParameters.nextToken;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedResponseDatasetListDtoFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of datasets for a given project
     * List datasets
     */
    async getDatasets(requestParameters: GetDatasetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedResponseDatasetListDto> {
        const response = await this.getDatasetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Download data from public repositories
     * Import public dataset
     */
    async importPublicDatasetRaw(requestParameters: ImportPublicDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling importPublicDataset.');
        }

        if (requestParameters.importDataRequest === null || requestParameters.importDataRequest === undefined) {
            throw new runtime.RequiredError('importDataRequest','Required parameter requestParameters.importDataRequest was null or undefined when calling importPublicDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/import`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImportDataRequestToJSON(requestParameters.importDataRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     * Download data from public repositories
     * Import public dataset
     */
    async importPublicDataset(requestParameters: ImportPublicDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.importPublicDatasetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Rerun sample ingest.
     * Rerun sample ingest
     */
    async ingestSamplesRaw(requestParameters: IngestSamplesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling ingestSamples.');
        }

        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling ingestSamples.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}/ingest-samples`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Rerun sample ingest.
     * Rerun sample ingest
     */
    async ingestSamples(requestParameters: IngestSamplesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestSamplesRaw(requestParameters, initOverrides);
    }

    /**
     * Regenerate dataset file listing.
     * Regenerate dataset manifest
     */
    async regenerateManifestRaw(requestParameters: RegenerateManifestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling regenerateManifest.');
        }

        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling regenerateManifest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}/regenerate-manifest`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Regenerate dataset file listing.
     * Regenerate dataset manifest
     */
    async regenerateManifest(requestParameters: RegenerateManifestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.regenerateManifestRaw(requestParameters, initOverrides);
    }

    /**
     * Rerun data transforms and web optimization.
     * Rerun data transforms
     */
    async rerunTransformRaw(requestParameters: RerunTransformRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling rerunTransform.');
        }

        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling rerunTransform.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}/rerun-transform`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Rerun data transforms and web optimization.
     * Rerun data transforms
     */
    async rerunTransform(requestParameters: RerunTransformRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.rerunTransformRaw(requestParameters, initOverrides);
    }

    /**
     * Update info on a dataset
     * Update dataset
     */
    async updateDatasetRaw(requestParameters: UpdateDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DatasetDetail>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateDataset.');
        }

        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling updateDataset.');
        }

        if (requestParameters.updateDatasetRequest === null || requestParameters.updateDatasetRequest === undefined) {
            throw new runtime.RequiredError('updateDatasetRequest','Required parameter requestParameters.updateDatasetRequest was null or undefined when calling updateDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDatasetRequestToJSON(requestParameters.updateDatasetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetDetailFromJSON(jsonValue));
    }

    /**
     * Update info on a dataset
     * Update dataset
     */
    async updateDataset(requestParameters: UpdateDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DatasetDetail> {
        const response = await this.updateDatasetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Registers a dataset in the system that you upload files into
     * Upload private dataset
     */
    async uploadDatasetRaw(requestParameters: UploadDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UploadDatasetCreateResponse>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling uploadDataset.');
        }

        if (requestParameters.uploadDatasetRequest === null || requestParameters.uploadDatasetRequest === undefined) {
            throw new runtime.RequiredError('uploadDatasetRequest','Required parameter requestParameters.uploadDatasetRequest was null or undefined when calling uploadDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("accessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{projectId}/datasets/upload`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UploadDatasetRequestToJSON(requestParameters.uploadDatasetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UploadDatasetCreateResponseFromJSON(jsonValue));
    }

    /**
     * Registers a dataset in the system that you upload files into
     * Upload private dataset
     */
    async uploadDataset(requestParameters: UploadDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UploadDatasetCreateResponse> {
        const response = await this.uploadDatasetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
