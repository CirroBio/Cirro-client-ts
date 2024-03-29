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
  AWSCredentials,
  FileAccessRequest,
  GenerateSftpCredentialsRequest,
  SftpCredentials,
} from '../models/index';
import {
    AWSCredentialsFromJSON,
    AWSCredentialsToJSON,
    FileAccessRequestFromJSON,
    FileAccessRequestToJSON,
    GenerateSftpCredentialsRequestFromJSON,
    GenerateSftpCredentialsRequestToJSON,
    SftpCredentialsFromJSON,
    SftpCredentialsToJSON,
} from '../models/index';

export interface GenerateProjectFileAccessTokenRequest {
    projectId: string;
    fileAccessRequest: FileAccessRequest;
}

export interface GenerateProjectSftpTokenRequest {
    projectId: string;
    generateSftpCredentialsRequest: GenerateSftpCredentialsRequest;
}

/**
 * 
 */
export class FileApi extends runtime.BaseAPI {

    /**
     * Generates credentials used for connecting via S3
     * Create project file access token
     */
    async generateProjectFileAccessTokenRaw(requestParameters: GenerateProjectFileAccessTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AWSCredentials>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling generateProjectFileAccessToken.');
        }

        if (requestParameters.fileAccessRequest === null || requestParameters.fileAccessRequest === undefined) {
            throw new runtime.RequiredError('fileAccessRequest','Required parameter requestParameters.fileAccessRequest was null or undefined when calling generateProjectFileAccessToken.');
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
            path: `/projects/{projectId}/s3-token`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FileAccessRequestToJSON(requestParameters.fileAccessRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AWSCredentialsFromJSON(jsonValue));
    }

    /**
     * Generates credentials used for connecting via S3
     * Create project file access token
     */
    async generateProjectFileAccessToken(requestParameters: GenerateProjectFileAccessTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AWSCredentials> {
        const response = await this.generateProjectFileAccessTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generates credentials used for connecting via SFTP
     * Create project SFTP Token
     */
    async generateProjectSftpTokenRaw(requestParameters: GenerateProjectSftpTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SftpCredentials>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling generateProjectSftpToken.');
        }

        if (requestParameters.generateSftpCredentialsRequest === null || requestParameters.generateSftpCredentialsRequest === undefined) {
            throw new runtime.RequiredError('generateSftpCredentialsRequest','Required parameter requestParameters.generateSftpCredentialsRequest was null or undefined when calling generateProjectSftpToken.');
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
            path: `/projects/{projectId}/sftp-token`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenerateSftpCredentialsRequestToJSON(requestParameters.generateSftpCredentialsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SftpCredentialsFromJSON(jsonValue));
    }

    /**
     * Generates credentials used for connecting via SFTP
     * Create project SFTP Token
     */
    async generateProjectSftpToken(requestParameters: GenerateProjectSftpTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SftpCredentials> {
        const response = await this.generateProjectSftpTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
