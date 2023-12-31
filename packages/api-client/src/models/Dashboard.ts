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
 * @interface Dashboard
 */
export interface Dashboard {
    /**
     * 
     * @type {string}
     * @memberof Dashboard
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Dashboard
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Dashboard
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Dashboard
     */
    processIds: Array<string>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Dashboard
     */
    dashboardData: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Dashboard
     */
    info: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof Dashboard
     */
    createdBy: string;
    /**
     * 
     * @type {Date}
     * @memberof Dashboard
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Dashboard
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Dashboard interface.
 */
export function instanceOfDashboard(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "processIds" in value;
    isInstance = isInstance && "dashboardData" in value;
    isInstance = isInstance && "info" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function DashboardFromJSON(json: any): Dashboard {
    return DashboardFromJSONTyped(json, false);
}

export function DashboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dashboard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'processIds': json['processIds'],
        'dashboardData': json['dashboardData'],
        'info': json['info'],
        'createdBy': json['createdBy'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function DashboardToJSON(value?: Dashboard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'processIds': value.processIds,
        'dashboardData': value.dashboardData,
        'info': value.info,
        'createdBy': value.createdBy,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

