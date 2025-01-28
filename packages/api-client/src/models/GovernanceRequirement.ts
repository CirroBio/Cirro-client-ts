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
 * @interface GovernanceRequirement
 */
export interface GovernanceRequirement {
    /**
     * The unique identifier for the requirement
     * @type {string}
     * @memberof GovernanceRequirement
     */
    id: string;
    /**
     *  The name of the requirement
     * @type {string}
     * @memberof GovernanceRequirement
     */
    name: string;
    /**
     * A brief description of the requirement
     * @type {string}
     * @memberof GovernanceRequirement
     */
    description: string;
    /**
     * 
     * @type {GovernanceType}
     * @memberof GovernanceRequirement
     */
    type: GovernanceType;
    /**
     * S3 prefix where files for the requirement are saved
     * @type {string}
     * @memberof GovernanceRequirement
     */
    path: string;
    /**
     * 
     * @type {GovernanceScope}
     * @memberof GovernanceRequirement
     */
    scope: GovernanceScope;
    /**
     * 
     * @type {GovernanceScope}
     * @memberof GovernanceRequirement
     */
    acceptance?: GovernanceScope | null;
    /**
     * The IDs of governance contacts assigned  to the requirement.
     * @type {Array<string>}
     * @memberof GovernanceRequirement
     */
    contactIds: Array<string>;
    /**
     * 
     * @type {GovernanceExpiry}
     * @memberof GovernanceRequirement
     */
    expiration: GovernanceExpiry;
    /**
     * Optional files with extra information, e.g. templates for documents, links, etc
     * @type {Array<GovernanceFile>}
     * @memberof GovernanceRequirement
     */
    supplementalDocs?: Array<GovernanceFile> | null;
    /**
     * 
     * @type {GovernanceFile}
     * @memberof GovernanceRequirement
     */
    file?: GovernanceFile | null;
    /**
     * 
     * @type {GovernanceScope}
     * @memberof GovernanceRequirement
     */
    authorship?: GovernanceScope | null;
    /**
     * 
     * @type {GovernanceTrainingVerification}
     * @memberof GovernanceRequirement
     */
    verification?: GovernanceTrainingVerification | null;
    /**
     * 
     * @type {string}
     * @memberof GovernanceRequirement
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof GovernanceRequirement
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof GovernanceRequirement
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the GovernanceRequirement interface.
 */
export function instanceOfGovernanceRequirement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "path" in value;
    isInstance = isInstance && "scope" in value;
    isInstance = isInstance && "contactIds" in value;
    isInstance = isInstance && "expiration" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function GovernanceRequirementFromJSON(json: any): GovernanceRequirement {
    return GovernanceRequirementFromJSONTyped(json, false);
}

export function GovernanceRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GovernanceRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'type': GovernanceTypeFromJSON(json['type']),
        'path': json['path'],
        'scope': GovernanceScopeFromJSON(json['scope']),
        'acceptance': !exists(json, 'acceptance') ? undefined : GovernanceScopeFromJSON(json['acceptance']),
        'contactIds': json['contactIds'],
        'expiration': GovernanceExpiryFromJSON(json['expiration']),
        'supplementalDocs': !exists(json, 'supplementalDocs') ? undefined : (json['supplementalDocs'] === null ? null : (json['supplementalDocs'] as Array<any>).map(GovernanceFileFromJSON)),
        'file': !exists(json, 'file') ? undefined : GovernanceFileFromJSON(json['file']),
        'authorship': !exists(json, 'authorship') ? undefined : GovernanceScopeFromJSON(json['authorship']),
        'verification': !exists(json, 'verification') ? undefined : GovernanceTrainingVerificationFromJSON(json['verification']),
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function GovernanceRequirementToJSON(value?: GovernanceRequirement | null): any {
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
        'type': GovernanceTypeToJSON(value.type),
        'path': value.path,
        'scope': GovernanceScopeToJSON(value.scope),
        'acceptance': GovernanceScopeToJSON(value.acceptance),
        'contactIds': value.contactIds,
        'expiration': GovernanceExpiryToJSON(value.expiration),
        'supplementalDocs': value.supplementalDocs === undefined ? undefined : (value.supplementalDocs === null ? null : (value.supplementalDocs as Array<any>).map(GovernanceFileToJSON)),
        'file': GovernanceFileToJSON(value.file),
        'authorship': GovernanceScopeToJSON(value.authorship),
        'verification': GovernanceTrainingVerificationToJSON(value.verification),
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

