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
import type { AccessType } from './AccessType';
import {
    AccessTypeFromJSON,
    AccessTypeFromJSONTyped,
    AccessTypeToJSON,
} from './AccessType';

/**
 * 
 * @export
 * @interface FileAccessRequest
 */
export interface FileAccessRequest {
    /**
     * 
     * @type {AccessType}
     * @memberof FileAccessRequest
     */
    accessType: AccessType;
    /**
     * 
     * @type {string}
     * @memberof FileAccessRequest
     */
    datasetId: string;
    /**
     * 
     * @type {number}
     * @memberof FileAccessRequest
     */
    tokenLifetimeHours: number;
}

/**
 * Check if a given object implements the FileAccessRequest interface.
 */
export function instanceOfFileAccessRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessType" in value;
    isInstance = isInstance && "datasetId" in value;
    isInstance = isInstance && "tokenLifetimeHours" in value;

    return isInstance;
}

export function FileAccessRequestFromJSON(json: any): FileAccessRequest {
    return FileAccessRequestFromJSONTyped(json, false);
}

export function FileAccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileAccessRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessType': AccessTypeFromJSON(json['accessType']),
        'datasetId': json['datasetId'],
        'tokenLifetimeHours': json['tokenLifetimeHours'],
    };
}

export function FileAccessRequestToJSON(value?: FileAccessRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessType': AccessTypeToJSON(value.accessType),
        'datasetId': value.datasetId,
        'tokenLifetimeHours': value.tokenLifetimeHours,
    };
}
