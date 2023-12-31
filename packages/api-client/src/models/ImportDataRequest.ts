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
 * @interface ImportDataRequest
 */
export interface ImportDataRequest {
    /**
     * 
     * @type {string}
     * @memberof ImportDataRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDataRequest
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImportDataRequest
     */
    publicIds: Array<string>;
}

/**
 * Check if a given object implements the ImportDataRequest interface.
 */
export function instanceOfImportDataRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "publicIds" in value;

    return isInstance;
}

export function ImportDataRequestFromJSON(json: any): ImportDataRequest {
    return ImportDataRequestFromJSONTyped(json, false);
}

export function ImportDataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportDataRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'publicIds': json['publicIds'],
    };
}

export function ImportDataRequestToJSON(value?: ImportDataRequest | null): any {
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

