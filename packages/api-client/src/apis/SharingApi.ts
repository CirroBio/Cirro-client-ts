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
  Share,
  ShareDetail,
  ShareInput,
} from '../models/index';
import {
    CreateResponseFromJSON,
    CreateResponseToJSON,
    DatasetFromJSON,
    DatasetToJSON,
    ShareFromJSON,
    ShareToJSON,
    ShareDetailFromJSON,
    ShareDetailToJSON,
    ShareInputFromJSON,
    ShareInputToJSON,
} from '../models/index';

export interface CreateShareRequest {
    projectId: string;
    shareInput: ShareInput;
}

export interface DeleteShareRequest {
    projectId: string;
    shareId: string;
}

export interface GetDiscoverableSharesRequest {
    projectId: string;
}

export interface GetShareRequest {
    projectId: string;
    shareId: string;
}

export interface GetSharedDatasetsRequest {
    projectId: string;
    shareId: string;
}

export interface GetSharesRequest {
    projectId: string;
}

export interface SubscribeShareRequest {
    projectId: string;
    shareId: string;
}

export interface UpdateShareRequest {
    projectId: string;
    shareId: string;
    shareInput: ShareInput;
}

/**
 * 
 */
export class SharingApi extends runtime.BaseAPI {

    /**
     * Create a new share to publish to other projects
     * Create share
     */
    async createShareRaw(requestParameters: CreateShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling createShare.');
        }

        if (requestParameters.shareInput === null || requestParameters.shareInput === undefined) {
            throw new runtime.RequiredError('shareInput','Required parameter requestParameters.shareInput was null or undefined when calling createShare.');
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
            path: `/projects/{projectId}/shares`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShareInputToJSON(requestParameters.shareInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     * Create a new share to publish to other projects
     * Create share
     */
    async createShare(requestParameters: CreateShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.createShareRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a share that you\'ve published
     * Delete share
     */
    async deleteShareRaw(requestParameters: DeleteShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteShare.');
        }

        if (requestParameters.shareId === null || requestParameters.shareId === undefined) {
            throw new runtime.RequiredError('shareId','Required parameter requestParameters.shareId was null or undefined when calling deleteShare.');
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
            path: `/projects/{projectId}/shares/{shareId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"shareId"}}`, encodeURIComponent(String(requestParameters.shareId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a share that you\'ve published
     * Delete share
     */
    async deleteShare(requestParameters: DeleteShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteShareRaw(requestParameters, initOverrides);
    }

    /**
     * Get shares that the project can request access to
     * Get discoverable shares
     */
    async getDiscoverableSharesRaw(requestParameters: GetDiscoverableSharesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Share>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getDiscoverableShares.');
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
            path: `/projects/{projectId}/shares/discover`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShareFromJSON));
    }

    /**
     * Get shares that the project can request access to
     * Get discoverable shares
     */
    async getDiscoverableShares(requestParameters: GetDiscoverableSharesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Share>> {
        const response = await this.getDiscoverableSharesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get details on a share that you\'ve published or subscribed to
     * Get share
     */
    async getShareRaw(requestParameters: GetShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShareDetail>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getShare.');
        }

        if (requestParameters.shareId === null || requestParameters.shareId === undefined) {
            throw new runtime.RequiredError('shareId','Required parameter requestParameters.shareId was null or undefined when calling getShare.');
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
            path: `/projects/{projectId}/shares/{shareId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"shareId"}}`, encodeURIComponent(String(requestParameters.shareId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShareDetailFromJSON(jsonValue));
    }

    /**
     * Get details on a share that you\'ve published or subscribed to
     * Get share
     */
    async getShare(requestParameters: GetShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShareDetail> {
        const response = await this.getShareRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get dataset listing for a share
     * Get share datasets
     */
    async getSharedDatasetsRaw(requestParameters: GetSharedDatasetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Dataset>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getSharedDatasets.');
        }

        if (requestParameters.shareId === null || requestParameters.shareId === undefined) {
            throw new runtime.RequiredError('shareId','Required parameter requestParameters.shareId was null or undefined when calling getSharedDatasets.');
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
            path: `/projects/{projectId}/shares/{shareId}/datasets`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"shareId"}}`, encodeURIComponent(String(requestParameters.shareId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetFromJSON));
    }

    /**
     * Get dataset listing for a share
     * Get share datasets
     */
    async getSharedDatasets(requestParameters: GetSharedDatasetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Dataset>> {
        const response = await this.getSharedDatasetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get shares for a project (both published and shared with the project)
     * Get shares
     */
    async getSharesRaw(requestParameters: GetSharesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Share>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getShares.');
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
            path: `/projects/{projectId}/shares`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShareFromJSON));
    }

    /**
     * Get shares for a project (both published and shared with the project)
     * Get shares
     */
    async getShares(requestParameters: GetSharesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Share>> {
        const response = await this.getSharesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Subscribe to a share that has been shared with your project
     * Subscribe to share
     */
    async subscribeShareRaw(requestParameters: SubscribeShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling subscribeShare.');
        }

        if (requestParameters.shareId === null || requestParameters.shareId === undefined) {
            throw new runtime.RequiredError('shareId','Required parameter requestParameters.shareId was null or undefined when calling subscribeShare.');
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
            path: `/projects/{projectId}/shares/{shareId}:subscribe`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"shareId"}}`, encodeURIComponent(String(requestParameters.shareId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Subscribe to a share that has been shared with your project
     * Subscribe to share
     */
    async subscribeShare(requestParameters: SubscribeShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscribeShareRaw(requestParameters, initOverrides);
    }

    /**
     * Update a share that you\'ve published
     * Update share
     */
    async updateShareRaw(requestParameters: UpdateShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateShare.');
        }

        if (requestParameters.shareId === null || requestParameters.shareId === undefined) {
            throw new runtime.RequiredError('shareId','Required parameter requestParameters.shareId was null or undefined when calling updateShare.');
        }

        if (requestParameters.shareInput === null || requestParameters.shareInput === undefined) {
            throw new runtime.RequiredError('shareInput','Required parameter requestParameters.shareInput was null or undefined when calling updateShare.');
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
            path: `/projects/{projectId}/shares/{shareId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"shareId"}}`, encodeURIComponent(String(requestParameters.shareId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ShareInputToJSON(requestParameters.shareInput),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update a share that you\'ve published
     * Update share
     */
    async updateShare(requestParameters: UpdateShareRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateShareRaw(requestParameters, initOverrides);
    }

}
