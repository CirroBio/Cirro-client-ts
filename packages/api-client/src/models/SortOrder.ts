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
export enum SortOrder {
    Ascending = 'ASCENDING',
    Descending = 'DESCENDING'
}


export function SortOrderFromJSON(json: any): SortOrder {
    return SortOrderFromJSONTyped(json, false);
}

export function SortOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortOrder {
    return json as SortOrder;
}

export function SortOrderToJSON(value?: SortOrder | null): any {
    return value as any;
}

