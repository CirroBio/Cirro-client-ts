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
 * Additional settings for the user
 * @export
 * @interface UserSettings
 */
export interface UserSettings {
    [key: string]: any | any;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    analysisUpdateNotificationsEnabled: boolean;
}

/**
 * Check if a given object implements the UserSettings interface.
 */
export function instanceOfUserSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "analysisUpdateNotificationsEnabled" in value;

    return isInstance;
}

export function UserSettingsFromJSON(json: any): UserSettings {
    return UserSettingsFromJSONTyped(json, false);
}

export function UserSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'analysisUpdateNotificationsEnabled': json['analysisUpdateNotificationsEnabled'],
    };
}

export function UserSettingsToJSON(value?: UserSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'analysisUpdateNotificationsEnabled': value.analysisUpdateNotificationsEnabled,
    };
}

