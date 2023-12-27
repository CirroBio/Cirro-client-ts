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
 * @interface DatasetViz
 */
export interface DatasetViz {
    /**
     * Name of viz
     * @type {string}
     * @memberof DatasetViz
     */
    name?: string;
    /**
     * Description of viz
     * @type {string}
     * @memberof DatasetViz
     */
    desc?: string;
    /**
     * Type of viz
     * @type {string}
     * @memberof DatasetViz
     */
    type?: string;
    /**
     * Path to config file used to render viz
     * @type {string}
     * @memberof DatasetViz
     */
    config?: string;
}

/**
 * Check if a given object implements the DatasetViz interface.
 */
export function instanceOfDatasetViz(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DatasetVizFromJSON(json: any): DatasetViz {
    return DatasetVizFromJSONTyped(json, false);
}

export function DatasetVizFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetViz {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'desc': !exists(json, 'desc') ? undefined : json['desc'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'config': !exists(json, 'config') ? undefined : json['config'],
    };
}

export function DatasetVizToJSON(value?: DatasetViz | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'desc': value.desc,
        'type': value.type,
        'config': value.config,
    };
}

