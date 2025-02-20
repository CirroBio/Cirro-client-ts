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
import type { GovernanceAccessType } from './GovernanceAccessType';
import {
    GovernanceAccessTypeFromJSON,
    GovernanceAccessTypeFromJSONTyped,
    GovernanceAccessTypeToJSON,
} from './GovernanceAccessType';

/**
 * 
 * @export
 * @interface GovernanceFileAccessRequest
 */
export interface GovernanceFileAccessRequest {
    /**
     * 
     * @type {GovernanceAccessType}
     * @memberof GovernanceFileAccessRequest
     */
    accessType: GovernanceAccessType;
    /**
     * 
     * @type {string}
     * @memberof GovernanceFileAccessRequest
     */
    fulfillmentId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GovernanceFileAccessRequest
     */
    projectId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GovernanceFileAccessRequest
     */
    tokenLifetimeHours?: number | null;
}

/**
 * Check if a given object implements the GovernanceFileAccessRequest interface.
 */
export function instanceOfGovernanceFileAccessRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessType" in value;

    return isInstance;
}

export function GovernanceFileAccessRequestFromJSON(json: any): GovernanceFileAccessRequest {
    return GovernanceFileAccessRequestFromJSONTyped(json, false);
}

export function GovernanceFileAccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GovernanceFileAccessRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessType': GovernanceAccessTypeFromJSON(json['accessType']),
        'fulfillmentId': !exists(json, 'fulfillmentId') ? undefined : json['fulfillmentId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'tokenLifetimeHours': !exists(json, 'tokenLifetimeHours') ? undefined : json['tokenLifetimeHours'],
    };
}

export function GovernanceFileAccessRequestToJSON(value?: GovernanceFileAccessRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessType': GovernanceAccessTypeToJSON(value.accessType),
        'fulfillmentId': value.fulfillmentId,
        'projectId': value.projectId,
        'tokenLifetimeHours': value.tokenLifetimeHours,
    };
}

