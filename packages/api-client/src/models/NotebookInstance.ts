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

/**
 * 
 * @export
 * @interface NotebookInstance
 */
export interface NotebookInstance {
    /**
     * 
     * @type {string}
     * @memberof NotebookInstance
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof NotebookInstance
     */
    name: string;
    /**
     * 
     * @type {Status}
     * @memberof NotebookInstance
     */
    status: Status;
    /**
     * 
     * @type {string}
     * @memberof NotebookInstance
     */
    instanceType: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NotebookInstance
     */
    acceleratorTypes: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof NotebookInstance
     */
    volumeSizeGB: number;
    /**
     * 
     * @type {string}
     * @memberof NotebookInstance
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof NotebookInstance
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the NotebookInstance interface.
 */
export function instanceOfNotebookInstance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "instanceType" in value;
    isInstance = isInstance && "acceleratorTypes" in value;
    isInstance = isInstance && "volumeSizeGB" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function NotebookInstanceFromJSON(json: any): NotebookInstance {
    return NotebookInstanceFromJSONTyped(json, false);
}

export function NotebookInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotebookInstance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'status': StatusFromJSON(json['status']),
        'instanceType': json['instanceType'],
        'acceleratorTypes': json['acceleratorTypes'],
        'volumeSizeGB': json['volumeSizeGB'],
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function NotebookInstanceToJSON(value?: NotebookInstance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'status': StatusToJSON(value.status),
        'instanceType': value.instanceType,
        'acceleratorTypes': value.acceleratorTypes,
        'volumeSizeGB': value.volumeSizeGB,
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
    };
}

