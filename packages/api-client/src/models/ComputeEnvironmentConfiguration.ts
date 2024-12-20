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
import type { Agent } from './Agent';
import {
    AgentFromJSON,
    AgentFromJSONTyped,
    AgentToJSON,
} from './Agent';
import type { EnvironmentType } from './EnvironmentType';
import {
    EnvironmentTypeFromJSON,
    EnvironmentTypeFromJSONTyped,
    EnvironmentTypeToJSON,
} from './EnvironmentType';

/**
 * 
 * @export
 * @interface ComputeEnvironmentConfiguration
 */
export interface ComputeEnvironmentConfiguration {
    /**
     * The unique ID of the environment
     * @type {string}
     * @memberof ComputeEnvironmentConfiguration
     */
    id?: string;
    /**
     * The display name of the environment
     * @type {string}
     * @memberof ComputeEnvironmentConfiguration
     */
    name?: string;
    /**
     * Configuration properties passed to the environment
     * @type {{ [key: string]: string; }}
     * @memberof ComputeEnvironmentConfiguration
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {EnvironmentType}
     * @memberof ComputeEnvironmentConfiguration
     */
    environmentType: EnvironmentType;
    /**
     * 
     * @type {Agent}
     * @memberof ComputeEnvironmentConfiguration
     */
    agent?: Agent | null;
    /**
     * The user who created the environment
     * @type {string}
     * @memberof ComputeEnvironmentConfiguration
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof ComputeEnvironmentConfiguration
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ComputeEnvironmentConfiguration
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the ComputeEnvironmentConfiguration interface.
 */
export function instanceOfComputeEnvironmentConfiguration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "environmentType" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ComputeEnvironmentConfigurationFromJSON(json: any): ComputeEnvironmentConfiguration {
    return ComputeEnvironmentConfigurationFromJSONTyped(json, false);
}

export function ComputeEnvironmentConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeEnvironmentConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'environmentType': EnvironmentTypeFromJSON(json['environmentType']),
        'agent': !exists(json, 'agent') ? undefined : AgentFromJSON(json['agent']),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ComputeEnvironmentConfigurationToJSON(value?: ComputeEnvironmentConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'properties': value.properties,
        'environmentType': EnvironmentTypeToJSON(value.environmentType),
        'agent': AgentToJSON(value.agent),
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

