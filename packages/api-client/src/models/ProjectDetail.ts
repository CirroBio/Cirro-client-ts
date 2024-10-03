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
import type { CloudAccount } from './CloudAccount';
import {
    CloudAccountFromJSON,
    CloudAccountFromJSONTyped,
    CloudAccountToJSON,
} from './CloudAccount';
import type { Contact } from './Contact';
import {
    ContactFromJSON,
    ContactFromJSONTyped,
    ContactToJSON,
} from './Contact';
import type { ProjectSettings } from './ProjectSettings';
import {
    ProjectSettingsFromJSON,
    ProjectSettingsFromJSONTyped,
    ProjectSettingsToJSON,
} from './ProjectSettings';
import type { Status } from './Status';
import {
    StatusFromJSON,
    StatusFromJSONTyped,
    StatusToJSON,
} from './Status';
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * 
 * @export
 * @interface ProjectDetail
 */
export interface ProjectDetail {
    /**
     * 
     * @type {string}
     * @memberof ProjectDetail
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetail
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetail
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetail
     */
    billingAccountId: string;
    /**
     * 
     * @type {Array<Contact>}
     * @memberof ProjectDetail
     */
    contacts: Array<Contact>;
    /**
     * 
     * @type {Status}
     * @memberof ProjectDetail
     */
    status: Status;
    /**
     * 
     * @type {ProjectSettings}
     * @memberof ProjectDetail
     */
    settings: ProjectSettings;
    /**
     * 
     * @type {CloudAccount}
     * @memberof ProjectDetail
     */
    account?: CloudAccount | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetail
     */
    statusMessage: string;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof ProjectDetail
     */
    tags: Array<Tag>;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetail
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof ProjectDetail
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProjectDetail
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the ProjectDetail interface.
 */
export function instanceOfProjectDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "billingAccountId" in value;
    isInstance = isInstance && "contacts" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "settings" in value;
    isInstance = isInstance && "statusMessage" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ProjectDetailFromJSON(json: any): ProjectDetail {
    return ProjectDetailFromJSONTyped(json, false);
}

export function ProjectDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'billingAccountId': json['billingAccountId'],
        'contacts': ((json['contacts'] as Array<any>).map(ContactFromJSON)),
        'status': StatusFromJSON(json['status']),
        'settings': ProjectSettingsFromJSON(json['settings']),
        'account': !exists(json, 'account') ? undefined : CloudAccountFromJSON(json['account']),
        'statusMessage': json['statusMessage'],
        'tags': ((json['tags'] as Array<any>).map(TagFromJSON)),
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ProjectDetailToJSON(value?: ProjectDetail | null): any {
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
        'billingAccountId': value.billingAccountId,
        'contacts': ((value.contacts as Array<any>).map(ContactToJSON)),
        'status': StatusToJSON(value.status),
        'settings': ProjectSettingsToJSON(value.settings),
        'account': CloudAccountToJSON(value.account),
        'statusMessage': value.statusMessage,
        'tags': ((value.tags as Array<any>).map(TagToJSON)),
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

