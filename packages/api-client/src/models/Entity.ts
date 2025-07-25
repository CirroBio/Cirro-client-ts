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
import type { EntityType } from './EntityType';
import {
    EntityTypeFromJSON,
    EntityTypeFromJSONTyped,
    EntityTypeToJSON,
} from './EntityType';

/**
 * 
 * @export
 * @interface Entity
 */
export interface Entity {
    /**
     * 
     * @type {EntityType}
     * @memberof Entity
     */
    type: EntityType;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    id: string;
}

/**
 * Check if a given object implements the Entity interface.
 */
export function instanceOfEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function EntityFromJSON(json: any): Entity {
    return EntityFromJSONTyped(json, false);
}

export function EntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Entity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EntityTypeFromJSON(json['type']),
        'id': json['id'],
    };
}

export function EntityToJSON(value?: Entity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EntityTypeToJSON(value.type),
        'id': value.id,
    };
}

