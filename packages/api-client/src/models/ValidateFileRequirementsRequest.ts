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
 * @interface ValidateFileRequirementsRequest
 */
export interface ValidateFileRequirementsRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidateFileRequirementsRequest
     */
    fileNames: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidateFileRequirementsRequest
     */
    sampleSheet: string;
}

/**
 * Check if a given object implements the ValidateFileRequirementsRequest interface.
 */
export function instanceOfValidateFileRequirementsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fileNames" in value;
    isInstance = isInstance && "sampleSheet" in value;

    return isInstance;
}

export function ValidateFileRequirementsRequestFromJSON(json: any): ValidateFileRequirementsRequest {
    return ValidateFileRequirementsRequestFromJSONTyped(json, false);
}

export function ValidateFileRequirementsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateFileRequirementsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileNames': json['fileNames'],
        'sampleSheet': json['sampleSheet'],
    };
}

export function ValidateFileRequirementsRequestToJSON(value?: ValidateFileRequirementsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileNames': value.fileNames,
        'sampleSheet': value.sampleSheet,
    };
}

