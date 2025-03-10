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
 * @interface AgentRegistration
 */
export interface AgentRegistration {
    /**
     * 
     * @type {string}
     * @memberof AgentRegistration
     */
    localIp: string;
    /**
     * 
     * @type {string}
     * @memberof AgentRegistration
     */
    remoteIp: string;
    /**
     * 
     * @type {string}
     * @memberof AgentRegistration
     */
    agentVersion: string;
    /**
     * 
     * @type {string}
     * @memberof AgentRegistration
     */
    hostname: string;
    /**
     * 
     * @type {string}
     * @memberof AgentRegistration
     */
    os: string;
}

/**
 * Check if a given object implements the AgentRegistration interface.
 */
export function instanceOfAgentRegistration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "localIp" in value;
    isInstance = isInstance && "remoteIp" in value;
    isInstance = isInstance && "agentVersion" in value;
    isInstance = isInstance && "hostname" in value;
    isInstance = isInstance && "os" in value;

    return isInstance;
}

export function AgentRegistrationFromJSON(json: any): AgentRegistration {
    return AgentRegistrationFromJSONTyped(json, false);
}

export function AgentRegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentRegistration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localIp': json['localIp'],
        'remoteIp': json['remoteIp'],
        'agentVersion': json['agentVersion'],
        'hostname': json['hostname'],
        'os': json['os'],
    };
}

export function AgentRegistrationToJSON(value?: AgentRegistration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localIp': value.localIp,
        'remoteIp': value.remoteIp,
        'agentVersion': value.agentVersion,
        'hostname': value.hostname,
        'os': value.os,
    };
}

