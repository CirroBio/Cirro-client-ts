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
 * @interface StopExecutionResponse
 */
export interface StopExecutionResponse {
    /**
     * List of job IDs that were successful in termination
     * @type {Array<string>}
     * @memberof StopExecutionResponse
     */
    success?: Array<string>;
    /**
     * List of job IDs that were not successful in termination
     * @type {Array<string>}
     * @memberof StopExecutionResponse
     */
    failed?: Array<string>;
}

/**
 * Check if a given object implements the StopExecutionResponse interface.
 */
export function instanceOfStopExecutionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StopExecutionResponseFromJSON(json: any): StopExecutionResponse {
    return StopExecutionResponseFromJSONTyped(json, false);
}

export function StopExecutionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StopExecutionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
    };
}

export function StopExecutionResponseToJSON(value?: StopExecutionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'failed': value.failed,
    };
}

