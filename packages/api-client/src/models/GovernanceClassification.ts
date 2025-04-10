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
 * @interface GovernanceClassification
 */
export interface GovernanceClassification {
    /**
     * 
     * @type {string}
     * @memberof GovernanceClassification
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GovernanceClassification
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GovernanceClassification
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GovernanceClassification
     */
    requirementIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GovernanceClassification
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof GovernanceClassification
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof GovernanceClassification
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the GovernanceClassification interface.
 */
export function instanceOfGovernanceClassification(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "requirementIds" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function GovernanceClassificationFromJSON(json: any): GovernanceClassification {
    return GovernanceClassificationFromJSONTyped(json, false);
}

export function GovernanceClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GovernanceClassification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'requirementIds': json['requirementIds'],
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function GovernanceClassificationToJSON(value?: GovernanceClassification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'requirementIds': value.requirementIds,
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

