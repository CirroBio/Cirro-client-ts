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
  Project,
  ProjectDetail,
  ProjectRequest,
  ProjectUser,
  SetUserProjectRoleRequest,
  Tag,
} from '../models/index';
import {
    CreateResponseFromJSON,
    CreateResponseToJSON,
    ProjectFromJSON,
    ProjectToJSON,
    ProjectDetailFromJSON,
    ProjectDetailToJSON,
    ProjectRequestFromJSON,
    ProjectRequestToJSON,
    ProjectUserFromJSON,
    ProjectUserToJSON,
    SetUserProjectRoleRequestFromJSON,
    SetUserProjectRoleRequestToJSON,
    TagFromJSON,
    TagToJSON,
} from '../models/index';

export interface CreateProjectRequest {
    projectRequest: ProjectRequest;
}

export interface GetProjectRequest {
    projectId: string;
}

export interface GetProjectUsersRequest {
    projectId: string;
}

export interface RedeployProjectRequest {
    projectId: string;
}

export interface SetUserProjectRoleOperationRequest {
    projectId: string;
    setUserProjectRoleRequest: SetUserProjectRoleRequest;
}

export interface UpdateProjectRequest {
    projectId: string;
    projectRequest: ProjectRequest;
}

export interface UpdateProjectTagsRequest {
    projectId: string;
    tag: Array<Tag>;
}

/**
 * 
 */
export class ProjectsApi extends runtime.BaseAPI {

    /**
     * Creates a project
     * Create project
     */
    async createProjectRaw(requestParameters: CreateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateResponse>> {
        if (requestParameters.projectRequest === null || requestParameters.projectRequest === undefined) {
            throw new runtime.RequiredError('projectRequest','Required parameter requestParameters.projectRequest was null or undefined when calling createProject.');
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
            path: `/projects`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectRequestToJSON(requestParameters.projectRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateResponseFromJSON(jsonValue));
    }

    /**
     * Creates a project
     * Create project
     */
    async createProject(requestParameters: CreateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateResponse> {
        const response = await this.createProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get detailed project information
     * Get project
     */
    async getProjectRaw(requestParameters: GetProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectDetail>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getProject.');
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
            path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectDetailFromJSON(jsonValue));
    }

    /**
     * Get detailed project information
     * Get project
     */
    async getProject(requestParameters: GetProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectDetail> {
        const response = await this.getProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets users who have access to the project
     * Get project permissions
     */
    async getProjectUsersRaw(requestParameters: GetProjectUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectUser>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getProjectUsers.');
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
            path: `/projects/{projectId}/permissions`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectUserFromJSON));
    }

    /**
     * Gets users who have access to the project
     * Get project permissions
     */
    async getProjectUsers(requestParameters: GetProjectUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectUser>> {
        const response = await this.getProjectUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of projects
     * Get projects
     */
    async getProjectsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Project>>> {
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
            path: `/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectFromJSON));
    }

    /**
     * Retrieve a list of projects
     * Get projects
     */
    async getProjects(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Project>> {
        const response = await this.getProjectsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Redeploys cloud resources for a project
     * Redeploy project
     */
    async redeployProjectRaw(requestParameters: RedeployProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling redeployProject.');
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
            path: `/projects/{projectId}:re-deploy`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Redeploys cloud resources for a project
     * Redeploy project
     */
    async redeployProject(requestParameters: RedeployProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.redeployProjectRaw(requestParameters, initOverrides);
    }

    /**
     * Sets a user\'s role within a project
     * Set role
     */
    async setUserProjectRoleRaw(requestParameters: SetUserProjectRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling setUserProjectRole.');
        }

        if (requestParameters.setUserProjectRoleRequest === null || requestParameters.setUserProjectRoleRequest === undefined) {
            throw new runtime.RequiredError('setUserProjectRoleRequest','Required parameter requestParameters.setUserProjectRoleRequest was null or undefined when calling setUserProjectRole.');
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
            path: `/projects/{projectId}/permissions`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SetUserProjectRoleRequestToJSON(requestParameters.setUserProjectRoleRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets a user\'s role within a project
     * Set role
     */
    async setUserProjectRole(requestParameters: SetUserProjectRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.setUserProjectRoleRaw(requestParameters, initOverrides);
    }

    /**
     * Updates a project
     * Update project
     */
    async updateProjectRaw(requestParameters: UpdateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectDetail>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateProject.');
        }

        if (requestParameters.projectRequest === null || requestParameters.projectRequest === undefined) {
            throw new runtime.RequiredError('projectRequest','Required parameter requestParameters.projectRequest was null or undefined when calling updateProject.');
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
            path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectRequestToJSON(requestParameters.projectRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectDetailFromJSON(jsonValue));
    }

    /**
     * Updates a project
     * Update project
     */
    async updateProject(requestParameters: UpdateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectDetail> {
        const response = await this.updateProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets tags on a project
     * Set project tags
     */
    async updateProjectTagsRaw(requestParameters: UpdateProjectTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling updateProjectTags.');
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling updateProjectTags.');
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
            path: `/projects/{projectId}:tags`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.tag.map(TagToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets tags on a project
     * Set project tags
     */
    async updateProjectTags(requestParameters: UpdateProjectTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateProjectTagsRaw(requestParameters, initOverrides);
    }

}
