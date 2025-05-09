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
 * @interface RequirementFulfillmentInput
 */
export interface RequirementFulfillmentInput {
    /**
     * 
     * @type {string}
     * @memberof RequirementFulfillmentInput
     */
    file?: string | null;
    /**
     * If not provided, defaults to the current instant
     * @type {Date}
     * @memberof RequirementFulfillmentInput
     */
    completedOn?: Date | null;
}

/**
 * Check if a given object implements the RequirementFulfillmentInput interface.
 */
export function instanceOfRequirementFulfillmentInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequirementFulfillmentInputFromJSON(json: any): RequirementFulfillmentInput {
    return RequirementFulfillmentInputFromJSONTyped(json, false);
}

export function RequirementFulfillmentInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequirementFulfillmentInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': !exists(json, 'file') ? undefined : json['file'],
        'completedOn': !exists(json, 'completedOn') ? undefined : (json['completedOn'] === null ? null : new Date(json['completedOn'])),
    };
}

export function RequirementFulfillmentInputToJSON(value?: RequirementFulfillmentInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': value.file,
        'completedOn': value.completedOn === undefined ? undefined : (value.completedOn === null ? null : value.completedOn.toISOString()),
    };
}

