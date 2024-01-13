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
import type { FileEntry } from './FileEntry';
import {
    FileEntryFromJSON,
    FileEntryFromJSONTyped,
    FileEntryToJSON,
} from './FileEntry';

/**
 * 
 * @export
 * @interface Reference
 */
export interface Reference {
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    type: string;
    /**
     * 
     * @type {Array<FileEntry>}
     * @memberof Reference
     */
    files: Array<FileEntry>;
    /**
     * 
     * @type {string}
     * @memberof Reference
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof Reference
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the Reference interface.
 */
export function instanceOfReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "files" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ReferenceFromJSON(json: any): Reference {
    return ReferenceFromJSONTyped(json, false);
}

export function ReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': json['type'],
        'files': ((json['files'] as Array<any>).map(FileEntryFromJSON)),
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function ReferenceToJSON(value?: Reference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'files': ((value.files as Array<any>).map(FileEntryToJSON)),
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
    };
}

