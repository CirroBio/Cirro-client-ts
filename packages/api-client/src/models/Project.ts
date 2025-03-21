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
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    description: string;
    /**
     * 
     * @type {Status}
     * @memberof Project
     */
    status: Status;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Project
     */
    tags: Array<Tag>;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    organization: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Project
     */
    classificationIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    billingAccountId: string;
}

/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "organization" in value;
    isInstance = isInstance && "classificationIds" in value;
    isInstance = isInstance && "billingAccountId" in value;

    return isInstance;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'status': StatusFromJSON(json['status']),
        'tags': ((json['tags'] as Array<any>).map(TagFromJSON)),
        'organization': json['organization'],
        'classificationIds': json['classificationIds'],
        'billingAccountId': json['billingAccountId'],
    };
}

export function ProjectToJSON(value?: Project | null): any {
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
        'status': StatusToJSON(value.status),
        'tags': ((value.tags as Array<any>).map(TagToJSON)),
        'organization': value.organization,
        'classificationIds': value.classificationIds,
        'billingAccountId': value.billingAccountId,
    };
}

