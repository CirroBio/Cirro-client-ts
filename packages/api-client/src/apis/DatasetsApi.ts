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
  Dataset,
  DatasetDetail,
  RegisterDatasetRequest,
  UpdateDatasetRequest,
} from '../models/index';
import {
    CreateResponseFromJSON,
    CreateResponseToJSON,
    DatasetFromJSON,
    DatasetToJSON,
    DatasetDetailFromJSON,
    DatasetDetailToJSON,
    RegisterDatasetRequestFromJSON,
    RegisterDatasetRequestToJSON,
    UpdateDatasetRequestFromJSON,
    UpdateDatasetRequestToJSON,
} from '../models/index';

export interface DeleteDatasetRequest {
    projectId: string;
    datasetId: string;
}

export interface GetDatasetRequest {
    datasetId: string;
    projectId: string;
}

export interface GetDatasetsRequest {
    projectId: string;
}

export interface RegisterDatasetOperationRequest {
    projectId: string;
    registerDatasetRequest: RegisterDatasetRequest;
}

export interface UpdateDatasetOperationRequest {
    projectId: string;
    datasetId: string;
    updateDatasetRequest: UpdateDatasetRequest;
}

/**
 * 
 */
export class DatasetsApi extends runtime.BaseAPI {

    /**
     * Deletes the dataset, files are saved according to the project\'s retention time.
     * Delete a dataset
     */
    async deleteDatasetRaw(requestParameters: DeleteDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteDataset.');
        }

        if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
            throw new runtime.RequiredError('datasetId','Required parameter requestParameters.datasetId was null or undefined when calling deleteDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/datasets/{datasetId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"datasetId"}}`, encodeURIComponent(String(requestParameters.datasetId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Deletes the dataset, files are saved according to the project\'s retention time.
     * Delete a dataset
     */
    async deleteDataset(requestParameters: DeleteDatasetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.deleteDatasetRaw(requestParameters, initOverrides);
        return await response.value();
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
     * Retrieves a list of datasets for a given project
     * List datasets
     */
    async getDatasetsRaw(requestParameters: GetDatasetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Dataset>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getDatasets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/datasets`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetFromJSON));
    }

    /**
     * Retrieves a list of datasets for a given project
     * List datasets
     */
    async getDatasets(requestParameters: GetDatasetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Dataset>> {
        const response = await this.getDatasetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Registers a dataset in the system
     * Register dataset
     */
    async registerDatasetRaw(requestParameters: RegisterDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling registerDataset.');
        }

        if (requestParameters.registerDatasetRequest === null || requestParameters.registerDatasetRequest === undefined) {
            throw new runtime.RequiredError('registerDatasetRequest','Required parameter requestParameters.registerDatasetRequest was null or undefined when calling registerDataset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/datasets`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterDatasetRequestToJSON(requestParameters.registerDatasetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     * Registers a dataset in the system
     * Register dataset
     */
    async registerDataset(requestParameters: RegisterDatasetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.registerDatasetRaw(requestParameters, initOverrides);
        return await response.value();
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

}
