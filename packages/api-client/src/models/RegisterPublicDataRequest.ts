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
/**
 * 
 * @export
 * @interface RegisterPublicDataRequest
 */
export interface RegisterPublicDataRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterPublicDataRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterPublicDataRequest
     */
    description: string;
    /**
     * List of SRA/ENA/DDBJ/GEO/Synapse IDs
     * @type {Array<string>}
     * @memberof RegisterPublicDataRequest
     */
    publicIds?: Array<string>;
}

/**
 * Check if a given object implements the RegisterPublicDataRequest interface.
 */
export function instanceOfRegisterPublicDataRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function RegisterPublicDataRequestFromJSON(json: any): RegisterPublicDataRequest {
    return RegisterPublicDataRequestFromJSONTyped(json, false);
}

export function RegisterPublicDataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterPublicDataRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'publicIds': !exists(json, 'publicIds') ? undefined : json['publicIds'],
    };
}

export function RegisterPublicDataRequestToJSON(value?: RegisterPublicDataRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'publicIds': value.publicIds,
    };
}

