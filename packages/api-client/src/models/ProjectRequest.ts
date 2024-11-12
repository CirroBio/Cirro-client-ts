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
 * @interface ProjectRequest
 */
export interface ProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectRequest
     */
    classificationIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    billingInfo: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    adminUsername: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    message: string;
}

/**
 * Check if a given object implements the ProjectRequest interface.
 */
export function instanceOfProjectRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "classificationIds" in value;
    isInstance = isInstance && "billingInfo" in value;
    isInstance = isInstance && "adminUsername" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function ProjectRequestFromJSON(json: any): ProjectRequest {
    return ProjectRequestFromJSONTyped(json, false);
}

export function ProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'classificationIds': json['classificationIds'],
        'billingInfo': json['billingInfo'],
        'adminUsername': json['adminUsername'],
        'message': json['message'],
    };
}

export function ProjectRequestToJSON(value?: ProjectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'classificationIds': value.classificationIds,
        'billingInfo': value.billingInfo,
        'adminUsername': value.adminUsername,
        'message': value.message,
    };
}

