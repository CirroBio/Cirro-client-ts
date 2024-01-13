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
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface PortalErrorResponse
 */
export interface PortalErrorResponse {
    /**
     * 
     * @type {number}
     * @memberof PortalErrorResponse
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof PortalErrorResponse
     */
    errorCode: string;
    /**
     * 
     * @type {string}
     * @memberof PortalErrorResponse
     */
    errorDetail: string;
    /**
     * 
     * @type {Array<ErrorMessage>}
     * @memberof PortalErrorResponse
     */
    errors: Array<ErrorMessage>;
}

/**
 * Check if a given object implements the PortalErrorResponse interface.
 */
export function instanceOfPortalErrorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "errorDetail" in value;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function PortalErrorResponseFromJSON(json: any): PortalErrorResponse {
    return PortalErrorResponseFromJSONTyped(json, false);
}

export function PortalErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'errorCode': json['errorCode'],
        'errorDetail': json['errorDetail'],
        'errors': ((json['errors'] as Array<any>).map(ErrorMessageFromJSON)),
    };
}

export function PortalErrorResponseToJSON(value?: PortalErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'errorCode': value.errorCode,
        'errorDetail': value.errorDetail,
        'errors': ((value.errors as Array<any>).map(ErrorMessageToJSON)),
    };
}
