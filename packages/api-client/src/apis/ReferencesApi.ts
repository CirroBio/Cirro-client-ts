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
  Reference,
  ReferenceType,
} from '../models/index';
import {
    ReferenceFromJSON,
    ReferenceToJSON,
    ReferenceTypeFromJSON,
    ReferenceTypeToJSON,
} from '../models/index';

export interface GetReferencesForProjectRequest {
    projectId: string;
}

/**
 * 
 */
export class ReferencesApi extends runtime.BaseAPI {

    /**
     * List available reference types
     * Get reference types
     */
    async getReferenceTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ReferenceType>>> {
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
            path: `/reference-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReferenceTypeFromJSON));
    }

    /**
     * List available reference types
     * Get reference types
     */
    async getReferenceTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ReferenceType>> {
        const response = await this.getReferenceTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     * List available references (available to everyone)
     * Get global references
     */
    async getReferencesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Reference>>> {
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
            path: `/references`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReferenceFromJSON));
    }

    /**
     * List available references (available to everyone)
     * Get global references
     */
    async getReferences(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Reference>> {
        const response = await this.getReferencesRaw(initOverrides);
        return await response.value();
    }

    /**
     * List available references for a given project
     * Get project references
     */
    async getReferencesForProjectRaw(requestParameters: GetReferencesForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Reference>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getReferencesForProject.');
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
            path: `/projects/{projectId}/references`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferenceFromJSON(jsonValue));
    }

    /**
     * List available references for a given project
     * Get project references
     */
    async getReferencesForProject(requestParameters: GetReferencesForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Reference> {
        const response = await this.getReferencesForProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

}