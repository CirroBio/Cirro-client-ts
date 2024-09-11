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
export enum RequestStatus {
    Pending = 'PENDING',
    Accepted = 'ACCEPTED',
    Denied = 'DENIED'
}


export function RequestStatusFromJSON(json: any): RequestStatus {
    return RequestStatusFromJSONTyped(json, false);
}

export function RequestStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestStatus {
    return json as RequestStatus;
}

export function RequestStatusToJSON(value?: RequestStatus | null): any {
    return value as any;
}
