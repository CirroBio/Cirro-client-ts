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


/**
 * 
 * @export
 */
export const ProjectRole = {
    Admin: 'ADMIN',
    Contributor: 'CONTRIBUTOR',
    Collaborator: 'COLLABORATOR',
    None: 'NONE'
} as const;
export type ProjectRole = typeof ProjectRole[keyof typeof ProjectRole];


export function ProjectRoleFromJSON(json: any): ProjectRole {
    return ProjectRoleFromJSONTyped(json, false);
}

export function ProjectRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectRole {
    return json as ProjectRole;
}

export function ProjectRoleToJSON(value?: ProjectRole | null): any {
    return value as any;
}

