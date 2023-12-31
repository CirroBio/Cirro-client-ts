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
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    phone: string;
}

/**
 * Check if a given object implements the Contact interface.
 */
export function instanceOfContact(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "organization" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function ContactFromJSON(json: any): Contact {
    return ContactFromJSONTyped(json, false);
}

export function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'organization': json['organization'],
        'email': json['email'],
        'phone': json['phone'],
    };
}

export function ContactToJSON(value?: Contact | null): any {
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
        'phone': value.phone,
    };
}

