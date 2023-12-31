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
 * @interface Dataset
 */
export interface Dataset {
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    projectId: string;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    processId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Dataset
     */
    sourceDatasetIds: Array<string>;
    /**
     * 
     * @type {Status}
     * @memberof Dataset
     */
    status: Status;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Dataset
     */
    tags: Array<Tag>;
    /**
     * 
     * @type {string}
     * @memberof Dataset
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof Dataset
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Dataset
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Dataset interface.
 */
export function instanceOfDataset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "processId" in value;
    isInstance = isInstance && "sourceDatasetIds" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function DatasetFromJSON(json: any): Dataset {
    return DatasetFromJSONTyped(json, false);
}

export function DatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dataset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'projectId': json['projectId'],
        'processId': json['processId'],
        'sourceDatasetIds': json['sourceDatasetIds'],
        'status': StatusFromJSON(json['status']),
        'tags': ((json['tags'] as Array<any>).map(TagFromJSON)),
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function DatasetToJSON(value?: Dataset | null): any {
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
        'projectId': value.projectId,
        'processId': value.processId,
        'sourceDatasetIds': value.sourceDatasetIds,
        'status': StatusToJSON(value.status),
        'tags': ((value.tags as Array<any>).map(TagToJSON)),
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

