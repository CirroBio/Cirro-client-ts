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
 * @interface CustomPipelineSettings
 */
export interface CustomPipelineSettings {
    /**
     * 
     * @type {string}
     * @memberof CustomPipelineSettings
     */
    repository?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomPipelineSettings
     */
    branch?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomPipelineSettings
     */
    folder?: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomPipelineSettings
     */
    lastSync?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomPipelineSettings
     */
    syncStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomPipelineSettings
     */
    commitHash?: string;
}

/**
 * Check if a given object implements the CustomPipelineSettings interface.
 */
export function instanceOfCustomPipelineSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomPipelineSettingsFromJSON(json: any): CustomPipelineSettings {
    return CustomPipelineSettingsFromJSONTyped(json, false);
}

export function CustomPipelineSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomPipelineSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'repository': !exists(json, 'repository') ? undefined : json['repository'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'folder': !exists(json, 'folder') ? undefined : json['folder'],
        'lastSync': !exists(json, 'lastSync') ? undefined : (new Date(json['lastSync'])),
        'syncStatus': !exists(json, 'syncStatus') ? undefined : json['syncStatus'],
        'commitHash': !exists(json, 'commitHash') ? undefined : json['commitHash'],
    };
}

export function CustomPipelineSettingsToJSON(value?: CustomPipelineSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'repository': value.repository,
        'branch': value.branch,
        'folder': value.folder,
        'lastSync': value.lastSync === undefined ? undefined : (value.lastSync.toISOString()),
        'syncStatus': value.syncStatus,
        'commitHash': value.commitHash,
    };
}

