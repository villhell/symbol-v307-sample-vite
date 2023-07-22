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
 * 
 * @export
 */
export const BlockOrderByEnum = {
    Id: 'id',
    Height: 'height'
} as const;
export type BlockOrderByEnum = typeof BlockOrderByEnum[keyof typeof BlockOrderByEnum];


export function BlockOrderByEnumFromJSON(json: any): BlockOrderByEnum {
    return BlockOrderByEnumFromJSONTyped(json, false);
}

export function BlockOrderByEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOrderByEnum {
    return json as BlockOrderByEnum;
}

export function BlockOrderByEnumToJSON(value?: BlockOrderByEnum | null): any {
    return value as any;
}

