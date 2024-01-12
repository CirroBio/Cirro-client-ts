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
 * Status of last sync
 * @export
 * @enum {string}
 */
export enum SyncStatus {
    Successful = 'SUCCESSFUL',
    Failed = 'FAILED'
}


export function SyncStatusFromJSON(json: any): SyncStatus {
    return SyncStatusFromJSONTyped(json, false);
}

export function SyncStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStatus {
    return json as SyncStatus;
}

export function SyncStatusToJSON(value?: SyncStatus | null): any {
    return value as any;
}

