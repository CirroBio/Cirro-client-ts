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
  ClassificationInput,
  GovernanceClassification,
} from '../models/index';
import {
    ClassificationInputFromJSON,
    ClassificationInputToJSON,
    GovernanceClassificationFromJSON,
    GovernanceClassificationToJSON,
} from '../models/index';

export interface CreateClassificationRequest {
    classificationInput: ClassificationInput;
}

export interface DeleteClassificationRequest {
    classificationId: string;
}

export interface GetClassificationRequest {
    classificationId: string;
}

export interface UpdateClassificationRequest {
    classificationId: string;
    classificationInput: ClassificationInput;
}

/**
 * 
 */
export class GovernanceApi extends runtime.BaseAPI {

    /**
     * Creates a classification
     * Create classification
     */
    async createClassificationRaw(requestParameters: CreateClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GovernanceClassification>> {
        if (requestParameters.classificationInput === null || requestParameters.classificationInput === undefined) {
            throw new runtime.RequiredError('classificationInput','Required parameter requestParameters.classificationInput was null or undefined when calling createClassification.');
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
            path: `/governance/classifications`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ClassificationInputToJSON(requestParameters.classificationInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GovernanceClassificationFromJSON(jsonValue));
    }

    /**
     * Creates a classification
     * Create classification
     */
    async createClassification(requestParameters: CreateClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GovernanceClassification> {
        const response = await this.createClassificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the classification, and removes it from all projects.
     * Delete a classification
     */
    async deleteClassificationRaw(requestParameters: DeleteClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.classificationId === null || requestParameters.classificationId === undefined) {
            throw new runtime.RequiredError('classificationId','Required parameter requestParameters.classificationId was null or undefined when calling deleteClassification.');
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
            path: `/governance/classifications/{classificationId}`.replace(`{${"classificationId"}}`, encodeURIComponent(String(requestParameters.classificationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the classification, and removes it from all projects.
     * Delete a classification
     */
    async deleteClassification(requestParameters: DeleteClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteClassificationRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a data classification
     * Get a classification
     */
    async getClassificationRaw(requestParameters: GetClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GovernanceClassification>> {
        if (requestParameters.classificationId === null || requestParameters.classificationId === undefined) {
            throw new runtime.RequiredError('classificationId','Required parameter requestParameters.classificationId was null or undefined when calling getClassification.');
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
            path: `/governance/classifications/{classificationId}`.replace(`{${"classificationId"}}`, encodeURIComponent(String(requestParameters.classificationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GovernanceClassificationFromJSON(jsonValue));
    }

    /**
     * Retrieve a data classification
     * Get a classification
     */
    async getClassification(requestParameters: GetClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GovernanceClassification> {
        const response = await this.getClassificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of data classifications
     * Get classifications
     */
    async getClassificationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GovernanceClassification>>> {
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
            path: `/governance/classifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GovernanceClassificationFromJSON));
    }

    /**
     * Retrieve a list of data classifications
     * Get classifications
     */
    async getClassifications(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GovernanceClassification>> {
        const response = await this.getClassificationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates a classification
     * Update classification
     */
    async updateClassificationRaw(requestParameters: UpdateClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GovernanceClassification>> {
        if (requestParameters.classificationId === null || requestParameters.classificationId === undefined) {
            throw new runtime.RequiredError('classificationId','Required parameter requestParameters.classificationId was null or undefined when calling updateClassification.');
        }

        if (requestParameters.classificationInput === null || requestParameters.classificationInput === undefined) {
            throw new runtime.RequiredError('classificationInput','Required parameter requestParameters.classificationInput was null or undefined when calling updateClassification.');
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
            path: `/governance/classifications/{classificationId}`.replace(`{${"classificationId"}}`, encodeURIComponent(String(requestParameters.classificationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ClassificationInputToJSON(requestParameters.classificationInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GovernanceClassificationFromJSON(jsonValue));
    }

    /**
     * Updates a classification
     * Update classification
     */
    async updateClassification(requestParameters: UpdateClassificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GovernanceClassification> {
        const response = await this.updateClassificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}