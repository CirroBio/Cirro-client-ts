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

/**
 * 
 * @export
 * @interface ApproveProjectAccessRequest
 */
export interface ApproveProjectAccessRequest {
    /**
     * 
     * @type {ProjectRole}
     * @memberof ApproveProjectAccessRequest
     */
    role: ProjectRole;
}

/**
 * Check if a given object implements the ApproveProjectAccessRequest interface.
 */
export function instanceOfApproveProjectAccessRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function ApproveProjectAccessRequestFromJSON(json: any): ApproveProjectAccessRequest {
    return ApproveProjectAccessRequestFromJSONTyped(json, false);
}

export function ApproveProjectAccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApproveProjectAccessRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': ProjectRoleFromJSON(json['role']),
    };
}

export function ApproveProjectAccessRequestToJSON(value?: ApproveProjectAccessRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': ProjectRoleToJSON(value.role),
    };
}

