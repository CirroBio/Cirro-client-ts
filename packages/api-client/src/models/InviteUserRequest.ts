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
 * @interface InviteUserRequest
 */
export interface InviteUserRequest {
    /**
     * 
     * @type {string}
     * @memberof InviteUserRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InviteUserRequest
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof InviteUserRequest
     */
    email: string;
}

/**
 * Check if a given object implements the InviteUserRequest interface.
 */
export function instanceOfInviteUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "organization" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function InviteUserRequestFromJSON(json: any): InviteUserRequest {
    return InviteUserRequestFromJSONTyped(json, false);
}

export function InviteUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'organization': json['organization'],
        'email': json['email'],
    };
}

export function InviteUserRequestToJSON(value?: InviteUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'organization': value.organization,
        'email': value.email,
    };
}
