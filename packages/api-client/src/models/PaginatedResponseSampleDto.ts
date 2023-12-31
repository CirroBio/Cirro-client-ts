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
import type { Sample } from './Sample';
import {
    SampleFromJSON,
    SampleFromJSONTyped,
    SampleToJSON,
} from './Sample';

/**
 * 
 * @export
 * @interface PaginatedResponseSampleDto
 */
export interface PaginatedResponseSampleDto {
    /**
     * 
     * @type {Array<Sample>}
     * @memberof PaginatedResponseSampleDto
     */
    data: Array<Sample>;
    /**
     * 
     * @type {string}
     * @memberof PaginatedResponseSampleDto
     */
    nextToken: string;
}

/**
 * Check if a given object implements the PaginatedResponseSampleDto interface.
 */
export function instanceOfPaginatedResponseSampleDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "nextToken" in value;

    return isInstance;
}

export function PaginatedResponseSampleDtoFromJSON(json: any): PaginatedResponseSampleDto {
    return PaginatedResponseSampleDtoFromJSONTyped(json, false);
}

export function PaginatedResponseSampleDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedResponseSampleDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SampleFromJSON)),
        'nextToken': json['nextToken'],
    };
}

export function PaginatedResponseSampleDtoToJSON(value?: PaginatedResponseSampleDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SampleToJSON)),
        'nextToken': value.nextToken,
    };
}

