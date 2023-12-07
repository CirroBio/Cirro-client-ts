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

/**
 * 
 * @export
 * @enum {string}
 */
export enum DatasetType {
    Upload = 'UPLOAD',
    Public = 'PUBLIC'
}


export function DatasetTypeFromJSON(json: any): DatasetType {
    return DatasetTypeFromJSONTyped(json, false);
}

export function DatasetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetType {
    return json as DatasetType;
}

export function DatasetTypeToJSON(value?: DatasetType | null): any {
    return value as any;
}

