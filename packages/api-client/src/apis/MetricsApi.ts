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
  ProjectMetrics,
} from '../models/index';
import {
    ProjectMetricsFromJSON,
    ProjectMetricsToJSON,
} from '../models/index';

export interface GetProjectMetricsRequest {
    projectId: string;
}

/**
 * 
 */
export class MetricsApi extends runtime.BaseAPI {

    /**
     * Retrieves metrics about a project.
     * Get project metrics
     */
    async getProjectMetricsRaw(requestParameters: GetProjectMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectMetrics>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getProjectMetrics.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/metrics`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectMetricsFromJSON(jsonValue));
    }

    /**
     * Retrieves metrics about a project.
     * Get project metrics
     */
    async getProjectMetrics(requestParameters: GetProjectMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectMetrics> {
        const response = await this.getProjectMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
