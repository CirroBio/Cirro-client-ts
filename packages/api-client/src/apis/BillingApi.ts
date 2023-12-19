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
  BillingAccount,
  BillingAccountRequest,
  CreateResponse,
} from '../models/index';
import {
    BillingAccountFromJSON,
    BillingAccountToJSON,
    BillingAccountRequestFromJSON,
    BillingAccountRequestToJSON,
    CreateResponseFromJSON,
    CreateResponseToJSON,
} from '../models/index';

export interface CreateBillingAccountRequest {
    billingAccountRequest: BillingAccountRequest;
}

export interface DeleteBillingAccountRequest {
    billingAccountId: string;
}

export interface GetBillingAccountsRequest {
    includeArchived?: boolean;
}

export interface UpdateBillingAccountRequest {
    billingAccountId: string;
    billingAccountRequest: BillingAccountRequest;
}

/**
 * 
 */
export class BillingApi extends runtime.BaseAPI {

    /**
     * Creates a billing account
     * Create billing account
     */
    async createBillingAccountRaw(requestParameters: CreateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.billingAccountRequest === null || requestParameters.billingAccountRequest === undefined) {
            throw new runtime.RequiredError('billingAccountRequest','Required parameter requestParameters.billingAccountRequest was null or undefined when calling createBillingAccount.');
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
            path: `/billing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BillingAccountRequestToJSON(requestParameters.billingAccountRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     * Creates a billing account
     * Create billing account
     */
    async createBillingAccount(requestParameters: CreateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.createBillingAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a billing account
     * Delete billing account
     */
    async deleteBillingAccountRaw(requestParameters: DeleteBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.billingAccountId === null || requestParameters.billingAccountId === undefined) {
            throw new runtime.RequiredError('billingAccountId','Required parameter requestParameters.billingAccountId was null or undefined when calling deleteBillingAccount.');
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
            path: `/billing/{billingAccountId}`.replace(`{${"billingAccountId"}}`, encodeURIComponent(String(requestParameters.billingAccountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a billing account
     * Delete billing account
     */
    async deleteBillingAccount(requestParameters: DeleteBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteBillingAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Generates a billing report xlsx with cost information
     * Generate billing report
     */
    async generateBillingReportRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/billing-report`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Generates a billing report xlsx with cost information
     * Generate billing report
     */
    async generateBillingReport(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.generateBillingReportRaw(initOverrides);
    }

    /**
     * Gets a list of billing accounts the current user has access to
     * List billing accounts
     */
    async getBillingAccountsRaw(requestParameters: GetBillingAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BillingAccount>>> {
        const queryParameters: any = {};

        if (requestParameters.includeArchived !== undefined) {
            queryParameters['includeArchived'] = requestParameters.includeArchived;
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
            path: `/billing`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BillingAccountFromJSON));
    }

    /**
     * Gets a list of billing accounts the current user has access to
     * List billing accounts
     */
    async getBillingAccounts(requestParameters: GetBillingAccountsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BillingAccount>> {
        const response = await this.getBillingAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a billing account
     * Update billing account
     */
    async updateBillingAccountRaw(requestParameters: UpdateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.billingAccountId === null || requestParameters.billingAccountId === undefined) {
            throw new runtime.RequiredError('billingAccountId','Required parameter requestParameters.billingAccountId was null or undefined when calling updateBillingAccount.');
        }

        if (requestParameters.billingAccountRequest === null || requestParameters.billingAccountRequest === undefined) {
            throw new runtime.RequiredError('billingAccountRequest','Required parameter requestParameters.billingAccountRequest was null or undefined when calling updateBillingAccount.');
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
            path: `/billing/{billingAccountId}`.replace(`{${"billingAccountId"}}`, encodeURIComponent(String(requestParameters.billingAccountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BillingAccountRequestToJSON(requestParameters.billingAccountRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a billing account
     * Update billing account
     */
    async updateBillingAccount(requestParameters: UpdateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateBillingAccountRaw(requestParameters, initOverrides);
    }

}
