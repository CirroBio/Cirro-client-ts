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
 * @interface Reference
 */
export interface Reference {
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    referenceType: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Reference
     */
    files: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof Reference
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the Reference interface.
 */
export function instanceOfReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "referenceType" in value;
    isInstance = isInstance && "files" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ReferenceFromJSON(json: any): Reference {
    return ReferenceFromJSONTyped(json, false);
}

export function ReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'referenceType': json['referenceType'],
        'files': json['files'],
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function ReferenceToJSON(value?: Reference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'referenceType': value.referenceType,
        'files': value.files,
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
    };
}
