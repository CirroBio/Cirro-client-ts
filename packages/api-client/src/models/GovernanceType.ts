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
 * The types of governance requirements that can be enforced
 * @export
 * @enum {string}
 */
export enum GovernanceType {
    Document = 'DOCUMENT',
    Agreement = 'AGREEMENT',
    Training = 'TRAINING'
}


export function GovernanceTypeFromJSON(json: any): GovernanceType {
    return GovernanceTypeFromJSONTyped(json, false);
}

export function GovernanceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GovernanceType {
    return json as GovernanceType;
}

export function GovernanceTypeToJSON(value?: GovernanceType | null): any {
    return value as any;
}

