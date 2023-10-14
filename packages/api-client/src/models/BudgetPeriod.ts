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
export const BudgetPeriod = {
    Annually: 'ANNUALLY',
    Quarterly: 'QUARTERLY',
    Monthly: 'MONTHLY'
} as const;
export type BudgetPeriod = typeof BudgetPeriod[keyof typeof BudgetPeriod];


export function BudgetPeriodFromJSON(json: any): BudgetPeriod {
    return BudgetPeriodFromJSONTyped(json, false);
}

export function BudgetPeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetPeriod {
    return json as BudgetPeriod;
}

export function BudgetPeriodToJSON(value?: BudgetPeriod | null): any {
    return value as any;
}

