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
  CustomPipelineSettings,
  ErrorMessage,
  FileRequirements,
  FormSchema,
  PortalErrorResponse,
  Process,
  ProcessDetail,
  ValidateFileRequirementsRequest,
} from '../models/index';
import {
    CreateResponseFromJSON,
    CreateResponseToJSON,
    CustomPipelineSettingsFromJSON,
    CustomPipelineSettingsToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    FileRequirementsFromJSON,
    FileRequirementsToJSON,
    FormSchemaFromJSON,
    FormSchemaToJSON,
    PortalErrorResponseFromJSON,
    PortalErrorResponseToJSON,
    ProcessFromJSON,
    ProcessToJSON,
    ProcessDetailFromJSON,
    ProcessDetailToJSON,
    ValidateFileRequirementsRequestFromJSON,
    ValidateFileRequirementsRequestToJSON,
} from '../models/index';

export interface ArchiveCustomProcessRequest {
    processId: string;
}

export interface CreateCustomProcessRequest {
    processDetail: ProcessDetail;
}

export interface GetProcessRequest {
    processId: string;
}

export interface GetProcessParametersRequest {
    processId: string;
}

export interface GetProcessesRequest {
    includeArchived?: boolean;
}

export interface SyncCustomProcessRequest {
    processId: string;
}

export interface UpdateCustomProcessRequest {
    processId: string;
    processDetail: ProcessDetail;
}

export interface ValidateFileRequirementsOperationRequest {
    processId: string;
    validateFileRequirementsRequest: ValidateFileRequirementsRequest;
}

/**
 * 
 */
export class ProcessesApi extends runtime.BaseAPI {

    /**
     * Removes the process from the list of available options
     * Archive custom process
     */
    async archiveCustomProcessRaw(requestParameters: ArchiveCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling archiveCustomProcess.');
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
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes the process from the list of available options
     * Archive custom process
     */
    async archiveCustomProcess(requestParameters: ArchiveCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.archiveCustomProcessRaw(requestParameters, initOverrides);
    }

    /**
     * Creates a custom data type or pipeline which you can use in the listed projects.
     * Create custom process
     */
    async createCustomProcessRaw(requestParameters: CreateCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.processDetail === null || requestParameters.processDetail === undefined) {
            throw new runtime.RequiredError('processDetail','Required parameter requestParameters.processDetail was null or undefined when calling createCustomProcess.');
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
            path: `/processes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProcessDetailToJSON(requestParameters.processDetail),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     * Creates a custom data type or pipeline which you can use in the listed projects.
     * Create custom process
     */
    async createCustomProcess(requestParameters: CreateCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.createCustomProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }

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

    /**
     * Updates the process definition from the repository
     * Sync custom process
     */
    async syncCustomProcessRaw(requestParameters: SyncCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomPipelineSettings>> {
        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling syncCustomProcess.');
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
            path: `/processes/{processId}:sync`.replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomPipelineSettingsFromJSON(jsonValue));
    }

    /**
     * Updates the process definition from the repository
     * Sync custom process
     */
    async syncCustomProcess(requestParameters: SyncCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomPipelineSettings> {
        const response = await this.syncCustomProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the custom process
     * Update custom process
     */
    async updateCustomProcessRaw(requestParameters: UpdateCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling updateCustomProcess.');
        }

        if (requestParameters.processDetail === null || requestParameters.processDetail === undefined) {
            throw new runtime.RequiredError('processDetail','Required parameter requestParameters.processDetail was null or undefined when calling updateCustomProcess.');
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
            path: `/processes/{processId}`.replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProcessDetailToJSON(requestParameters.processDetail),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the custom process
     * Update custom process
     */
    async updateCustomProcess(requestParameters: UpdateCustomProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateCustomProcessRaw(requestParameters, initOverrides);
    }

    /**
     * Checks the input file names with the expected files for a data type (ingest processes only)
     * Validate file requirements
     */
    async validateFileRequirementsRaw(requestParameters: ValidateFileRequirementsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileRequirements>> {
        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling validateFileRequirements.');
        }

        if (requestParameters.validateFileRequirementsRequest === null || requestParameters.validateFileRequirementsRequest === undefined) {
            throw new runtime.RequiredError('validateFileRequirementsRequest','Required parameter requestParameters.validateFileRequirementsRequest was null or undefined when calling validateFileRequirements.');
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
            path: `/processes/{processId}/validate-files`.replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ValidateFileRequirementsRequestToJSON(requestParameters.validateFileRequirementsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileRequirementsFromJSON(jsonValue));
    }

    /**
     * Checks the input file names with the expected files for a data type (ingest processes only)
     * Validate file requirements
     */
    async validateFileRequirements(requestParameters: ValidateFileRequirementsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileRequirements> {
        const response = await this.validateFileRequirementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
