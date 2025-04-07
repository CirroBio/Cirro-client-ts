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
import type { Executor } from './Executor';
import {
    ExecutorFromJSON,
    ExecutorFromJSONTyped,
    ExecutorToJSON,
} from './Executor';

/**
 * 
 * @export
 * @interface Process
 */
export interface Process {
    /**
     * Unique ID of the Process
     * @type {string}
     * @memberof Process
     */
    id: string;
    /**
     * Friendly name for the process
     * @type {string}
     * @memberof Process
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Process
     */
    description?: string;
    /**
     * Name of the data type this pipeline produces (if it is not defined, use the name)
     * @type {string}
     * @memberof Process
     */
    dataType?: string | null;
    /**
     * 
     * @type {Executor}
     * @memberof Process
     */
    executor: Executor;
    /**
     * Category of the process
     * @type {string}
     * @memberof Process
     */
    category: string;
    /**
     * Type of pipeline
     * @type {string}
     * @memberof Process
     */
    pipelineType: string;
    /**
     * Link to pipeline documentation
     * @type {string}
     * @memberof Process
     */
    documentationUrl?: string;
    /**
     * Description of the files to be uploaded (optional)
     * @type {string}
     * @memberof Process
     */
    fileRequirementsMessage?: string;
    /**
     * IDs of pipelines that can be run downstream
     * @type {Array<string>}
     * @memberof Process
     */
    childProcessIds?: Array<string>;
    /**
     * IDs of pipelines that can run this pipeline
     * @type {Array<string>}
     * @memberof Process
     */
    parentProcessIds?: Array<string>;
    /**
     * Username of the pipeline creator (blank if Cirro curated)
     * @type {string}
     * @memberof Process
     */
    owner?: string;
    /**
     * Projects that can run this pipeline
     * @type {Array<string>}
     * @memberof Process
     */
    linkedProjectIds?: Array<string>;
    /**
     * Whether the pipeline is allowed to have multiple dataset sources
     * @type {boolean}
     * @memberof Process
     */
    allowMultipleSources?: boolean;
    /**
     * Whether the pipeline uses the Cirro-provided sample sheet
     * @type {boolean}
     * @memberof Process
     */
    usesSampleSheet?: boolean;
    /**
     * Whether the pipeline is marked as archived
     * @type {boolean}
     * @memberof Process
     */
    isArchived?: boolean;
}

/**
 * Check if a given object implements the Process interface.
 */
export function instanceOfProcess(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "executor" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "pipelineType" in value;

    return isInstance;
}

export function ProcessFromJSON(json: any): Process {
    return ProcessFromJSONTyped(json, false);
}

export function ProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): Process {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'executor': ExecutorFromJSON(json['executor']),
        'category': json['category'],
        'pipelineType': json['pipelineType'],
        'documentationUrl': !exists(json, 'documentationUrl') ? undefined : json['documentationUrl'],
        'fileRequirementsMessage': !exists(json, 'fileRequirementsMessage') ? undefined : json['fileRequirementsMessage'],
        'childProcessIds': !exists(json, 'childProcessIds') ? undefined : json['childProcessIds'],
        'parentProcessIds': !exists(json, 'parentProcessIds') ? undefined : json['parentProcessIds'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'linkedProjectIds': !exists(json, 'linkedProjectIds') ? undefined : json['linkedProjectIds'],
        'allowMultipleSources': !exists(json, 'allowMultipleSources') ? undefined : json['allowMultipleSources'],
        'usesSampleSheet': !exists(json, 'usesSampleSheet') ? undefined : json['usesSampleSheet'],
        'isArchived': !exists(json, 'isArchived') ? undefined : json['isArchived'],
    };
}

export function ProcessToJSON(value?: Process | null): any {
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
        'dataType': value.dataType,
        'executor': ExecutorToJSON(value.executor),
        'category': value.category,
        'pipelineType': value.pipelineType,
        'documentationUrl': value.documentationUrl,
        'fileRequirementsMessage': value.fileRequirementsMessage,
        'childProcessIds': value.childProcessIds,
        'parentProcessIds': value.parentProcessIds,
        'owner': value.owner,
        'linkedProjectIds': value.linkedProjectIds,
        'allowMultipleSources': value.allowMultipleSources,
        'usesSampleSheet': value.usesSampleSheet,
        'isArchived': value.isArchived,
    };
}

