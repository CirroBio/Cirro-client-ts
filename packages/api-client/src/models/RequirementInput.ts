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
import type { GovernanceExpiry } from './GovernanceExpiry';
import {
    GovernanceExpiryFromJSON,
    GovernanceExpiryFromJSONTyped,
    GovernanceExpiryToJSON,
} from './GovernanceExpiry';
import type { GovernanceFile } from './GovernanceFile';
import {
    GovernanceFileFromJSON,
    GovernanceFileFromJSONTyped,
    GovernanceFileToJSON,
} from './GovernanceFile';
import type { GovernanceScope } from './GovernanceScope';
import {
    GovernanceScopeFromJSON,
    GovernanceScopeFromJSONTyped,
    GovernanceScopeToJSON,
} from './GovernanceScope';
import type { GovernanceTrainingVerification } from './GovernanceTrainingVerification';
import {
    GovernanceTrainingVerificationFromJSON,
    GovernanceTrainingVerificationFromJSONTyped,
    GovernanceTrainingVerificationToJSON,
} from './GovernanceTrainingVerification';
import type { GovernanceType } from './GovernanceType';
import {
    GovernanceTypeFromJSON,
    GovernanceTypeFromJSONTyped,
    GovernanceTypeToJSON,
} from './GovernanceType';

/**
 * 
 * @export
 * @interface RequirementInput
 */
export interface RequirementInput {
    /**
     * 
     * @type {string}
     * @memberof RequirementInput
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RequirementInput
     */
    description: string;
    /**
     * 
     * @type {GovernanceType}
     * @memberof RequirementInput
     */
    type: GovernanceType;
    /**
     * 
     * @type {GovernanceScope}
     * @memberof RequirementInput
     */
    scope: GovernanceScope;
    /**
     * 
     * @type {GovernanceScope}
     * @memberof RequirementInput
     */
    acceptance?: GovernanceScope | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RequirementInput
     */
    contactIds: Array<string>;
    /**
     * 
     * @type {GovernanceExpiry}
     * @memberof RequirementInput
     */
    expiration: GovernanceExpiry;
    /**
     * 
     * @type {Date}
     * @memberof RequirementInput
     */
    enactmentDate?: Date | null;
    /**
     * 
     * @type {Array<GovernanceFile>}
     * @memberof RequirementInput
     */
    supplementalDocs?: Array<GovernanceFile> | null;
    /**
     * 
     * @type {GovernanceFile}
     * @memberof RequirementInput
     */
    file?: GovernanceFile | null;
    /**
     * 
     * @type {GovernanceScope}
     * @memberof RequirementInput
     */
    authorship?: GovernanceScope | null;
    /**
     * 
     * @type {GovernanceTrainingVerification}
     * @memberof RequirementInput
     */
    verificationMethod?: GovernanceTrainingVerification | null;
}

/**
 * Check if a given object implements the RequirementInput interface.
 */
export function instanceOfRequirementInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "scope" in value;
    isInstance = isInstance && "contactIds" in value;
    isInstance = isInstance && "expiration" in value;

    return isInstance;
}

export function RequirementInputFromJSON(json: any): RequirementInput {
    return RequirementInputFromJSONTyped(json, false);
}

export function RequirementInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequirementInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'type': GovernanceTypeFromJSON(json['type']),
        'scope': GovernanceScopeFromJSON(json['scope']),
        'acceptance': !exists(json, 'acceptance') ? undefined : GovernanceScopeFromJSON(json['acceptance']),
        'contactIds': json['contactIds'],
        'expiration': GovernanceExpiryFromJSON(json['expiration']),
        'enactmentDate': !exists(json, 'enactmentDate') ? undefined : (json['enactmentDate'] === null ? null : new Date(json['enactmentDate'])),
        'supplementalDocs': !exists(json, 'supplementalDocs') ? undefined : (json['supplementalDocs'] === null ? null : (json['supplementalDocs'] as Array<any>).map(GovernanceFileFromJSON)),
        'file': !exists(json, 'file') ? undefined : GovernanceFileFromJSON(json['file']),
        'authorship': !exists(json, 'authorship') ? undefined : GovernanceScopeFromJSON(json['authorship']),
        'verificationMethod': !exists(json, 'verificationMethod') ? undefined : GovernanceTrainingVerificationFromJSON(json['verificationMethod']),
    };
}

export function RequirementInputToJSON(value?: RequirementInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'type': GovernanceTypeToJSON(value.type),
        'scope': GovernanceScopeToJSON(value.scope),
        'acceptance': GovernanceScopeToJSON(value.acceptance),
        'contactIds': value.contactIds,
        'expiration': GovernanceExpiryToJSON(value.expiration),
        'enactmentDate': value.enactmentDate === undefined ? undefined : (value.enactmentDate === null ? null : value.enactmentDate.toISOString()),
        'supplementalDocs': value.supplementalDocs === undefined ? undefined : (value.supplementalDocs === null ? null : (value.supplementalDocs as Array<any>).map(GovernanceFileToJSON)),
        'file': GovernanceFileToJSON(value.file),
        'authorship': GovernanceScopeToJSON(value.authorship),
        'verificationMethod': GovernanceTrainingVerificationToJSON(value.verificationMethod),
    };
}

