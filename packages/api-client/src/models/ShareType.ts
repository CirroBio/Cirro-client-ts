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
export enum ShareType {
    Publisher = 'PUBLISHER',
    Subscriber = 'SUBSCRIBER',
    Available = 'AVAILABLE'
}


export function ShareTypeFromJSON(json: any): ShareType {
    return ShareTypeFromJSONTyped(json, false);
}

export function ShareTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShareType {
    return json as ShareType;
}

export function ShareTypeToJSON(value?: ShareType | null): any {
    return value as any;
}

