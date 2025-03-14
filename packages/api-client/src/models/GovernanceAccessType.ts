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
export enum GovernanceAccessType {
    GovernanceUpload = 'GOVERNANCE_UPLOAD',
    GovernanceDownload = 'GOVERNANCE_DOWNLOAD',
    FulfillmentUpload = 'FULFILLMENT_UPLOAD',
    FulfillmentDownload = 'FULFILLMENT_DOWNLOAD'
}


export function GovernanceAccessTypeFromJSON(json: any): GovernanceAccessType {
    return GovernanceAccessTypeFromJSONTyped(json, false);
}

export function GovernanceAccessTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GovernanceAccessType {
    return json as GovernanceAccessType;
}

export function GovernanceAccessTypeToJSON(value?: GovernanceAccessType | null): any {
    return value as any;
}

