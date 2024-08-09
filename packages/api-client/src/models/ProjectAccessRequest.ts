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

import { exists, mapValues } from '../runtime';
import type { ProjectRole } from './ProjectRole';
import {
    ProjectRoleFromJSON,
    ProjectRoleFromJSONTyped,
    ProjectRoleToJSON,
} from './ProjectRole';
import type { RequestStatus } from './RequestStatus';
import {
    RequestStatusFromJSON,
    RequestStatusFromJSONTyped,
    RequestStatusToJSON,
} from './RequestStatus';

/**
 * 
 * @export
 * @interface ProjectAccessRequest
 */
export interface ProjectAccessRequest {
    /**
     * 
     * @type {string}
     * @memberof ProjectAccessRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectAccessRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectAccessRequest
     */
    projectId: string;
    /**
     * 
     * @type {ProjectRole}
     * @memberof ProjectAccessRequest
     */
    role: ProjectRole;
    /**
     * 
     * @type {string}
     * @memberof ProjectAccessRequest
     */
    message: string;
    /**
     * 
     * @type {RequestStatus}
     * @memberof ProjectAccessRequest
     */
    status: RequestStatus;
    /**
     * 
     * @type {string}
     * @memberof ProjectAccessRequest
     */
    reviewerUsername: string;
    /**
     * 
     * @type {Date}
     * @memberof ProjectAccessRequest
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the ProjectAccessRequest interface.
 */
export function instanceOfProjectAccessRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "reviewerUsername" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ProjectAccessRequestFromJSON(json: any): ProjectAccessRequest {
    return ProjectAccessRequestFromJSONTyped(json, false);
}

export function ProjectAccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectAccessRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'projectId': json['projectId'],
        'role': ProjectRoleFromJSON(json['role']),
        'message': json['message'],
        'status': RequestStatusFromJSON(json['status']),
        'reviewerUsername': json['reviewerUsername'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function ProjectAccessRequestToJSON(value?: ProjectAccessRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'projectId': value.projectId,
        'role': ProjectRoleToJSON(value.role),
        'message': value.message,
        'status': RequestStatusToJSON(value.status),
        'reviewerUsername': value.reviewerUsername,
        'createdAt': (value.createdAt.toISOString()),
    };
}

