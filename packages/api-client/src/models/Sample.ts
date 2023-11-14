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
 * @interface Sample
 */
export interface Sample {
    /**
     * 
     * @type {string}
     * @memberof Sample
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Sample
     */
    metadata: { [key: string]: any; };
}

/**
 * Check if a given object implements the Sample interface.
 */
export function instanceOfSample(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function SampleFromJSON(json: any): Sample {
    return SampleFromJSONTyped(json, false);
}

export function SampleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sample {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'metadata': json['metadata'],
    };
}

export function SampleToJSON(value?: Sample | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'metadata': value.metadata,
    };
}
