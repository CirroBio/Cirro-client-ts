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
  FormSchema,
  Process,
  ProcessDetail,
} from '../models/index';
import {
    FormSchemaFromJSON,
    FormSchemaToJSON,
    ProcessFromJSON,
    ProcessToJSON,
    ProcessDetailFromJSON,
    ProcessDetailToJSON,
} from '../models/index';

export interface GetProcessRequest {
    processId: string;
}

export interface GetProcessParametersRequest {
    processId: string;
}

export interface GetProcessesRequest {
    includeArchived?: boolean;
}

/**
 * 
 */
export class ProcessesApi extends runtime.BaseAPI {

    /**
     * Retrieves detailed information on a process
     * Get process
     */
    async getProcessRaw(requestParameters: GetProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProcessDetail>> {
        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getProcess.');
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
            path: `/processes/{processId}`.replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProcessDetailFromJSON(jsonValue));
    }

    /**
     * Retrieves detailed information on a process
     * Get process
     */
    async getProcess(requestParameters: GetProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProcessDetail> {
        const response = await this.getProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the input parameters for a process
     * Get process parameters
     */
    async getProcessParametersRaw(requestParameters: GetProcessParametersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FormSchema>> {
        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getProcessParameters.');
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
            path: `/processes/{processId}/parameters`.replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FormSchemaFromJSON(jsonValue));
    }

    /**
     * Retrieves the input parameters for a process
     * Get process parameters
     */
    async getProcessParameters(requestParameters: GetProcessParametersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FormSchema> {
        const response = await this.getProcessParametersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of available processes
     * List processes
     */
    async getProcessesRaw(requestParameters: GetProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Process>>> {
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
            path: `/processes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProcessFromJSON));
    }

    /**
     * Retrieves a list of available processes
     * List processes
     */
    async getProcesses(requestParameters: GetProcessesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Process>> {
        const response = await this.getProcessesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
