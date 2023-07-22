/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Possible status of lock states:
 * * 0 - UNUSED.
 * * 1 - USED.
 * @export
 */
export const LockStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type LockStatus = typeof LockStatus[keyof typeof LockStatus];


export function LockStatusFromJSON(json: any): LockStatus {
    return LockStatusFromJSONTyped(json, false);
}

export function LockStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): LockStatus {
    return json as LockStatus;
}

export function LockStatusToJSON(value?: LockStatus | null): any {
    return value as any;
}

