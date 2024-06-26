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
import type { CloudAccountType } from './CloudAccountType';
import {
    CloudAccountTypeFromJSON,
    CloudAccountTypeFromJSONTyped,
    CloudAccountTypeToJSON,
} from './CloudAccountType';

/**
 * 
 * @export
 * @interface CloudAccount
 */
export interface CloudAccount {
    /**
     * AWS Account ID
     * @type {string}
     * @memberof CloudAccount
     */
    accountId?: string;
    /**
     * Name used to describe the account, useful when the account hosts multiple projects
     * @type {string}
     * @memberof CloudAccount
     */
    accountName?: string;
    /**
     * AWS Region Code (defaults to region of Cirro app)
     * @type {string}
     * @memberof CloudAccount
     */
    regionName?: string;
    /**
     * 
     * @type {CloudAccountType}
     * @memberof CloudAccount
     */
    accountType: CloudAccountType;
}

/**
 * Check if a given object implements the CloudAccount interface.
 */
export function instanceOfCloudAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountType" in value;

    return isInstance;
}

export function CloudAccountFromJSON(json: any): CloudAccount {
    return CloudAccountFromJSONTyped(json, false);
}

export function CloudAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'accountName': !exists(json, 'accountName') ? undefined : json['accountName'],
        'regionName': !exists(json, 'regionName') ? undefined : json['regionName'],
        'accountType': CloudAccountTypeFromJSON(json['accountType']),
    };
}

export function CloudAccountToJSON(value?: CloudAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'accountName': value.accountName,
        'regionName': value.regionName,
        'accountType': CloudAccountTypeToJSON(value.accountType),
    };
}

