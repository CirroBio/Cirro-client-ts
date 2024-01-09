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
 * @interface FileNamePattern
 */
export interface FileNamePattern {
    /**
     * 
     * @type {string}
     * @memberof FileNamePattern
     */
    exampleName: string;
    /**
     * 
     * @type {string}
     * @memberof FileNamePattern
     */
    description: string;
}

/**
 * Check if a given object implements the FileNamePattern interface.
 */
export function instanceOfFileNamePattern(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exampleName" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function FileNamePatternFromJSON(json: any): FileNamePattern {
    return FileNamePatternFromJSONTyped(json, false);
}

export function FileNamePatternFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileNamePattern {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exampleName': json['exampleName'],
        'description': json['description'],
    };
}

export function FileNamePatternToJSON(value?: FileNamePattern | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exampleName': value.exampleName,
        'description': value.description,
    };
}

