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
 * @interface NotebookInstanceStatusResponse
 */
export interface NotebookInstanceStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof NotebookInstanceStatusResponse
     */
    status: string;
}

/**
 * Check if a given object implements the NotebookInstanceStatusResponse interface.
 */
export function instanceOfNotebookInstanceStatusResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function NotebookInstanceStatusResponseFromJSON(json: any): NotebookInstanceStatusResponse {
    return NotebookInstanceStatusResponseFromJSONTyped(json, false);
}

export function NotebookInstanceStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotebookInstanceStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function NotebookInstanceStatusResponseToJSON(value?: NotebookInstanceStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

