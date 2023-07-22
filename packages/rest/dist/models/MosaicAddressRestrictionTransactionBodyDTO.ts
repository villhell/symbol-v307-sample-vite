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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MosaicAddressRestrictionTransactionBodyDTO
 */
export interface MosaicAddressRestrictionTransactionBodyDTO {
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    mosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    newRestrictionValue: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof MosaicAddressRestrictionTransactionBodyDTO
     */
    targetAddress: string;
}

/**
 * Check if a given object implements the MosaicAddressRestrictionTransactionBodyDTO interface.
 */
export function instanceOfMosaicAddressRestrictionTransactionBodyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "restrictionKey" in value;
    isInstance = isInstance && "previousRestrictionValue" in value;
    isInstance = isInstance && "newRestrictionValue" in value;
    isInstance = isInstance && "targetAddress" in value;

    return isInstance;
}

export function MosaicAddressRestrictionTransactionBodyDTOFromJSON(json: any): MosaicAddressRestrictionTransactionBodyDTO {
    return MosaicAddressRestrictionTransactionBodyDTOFromJSONTyped(json, false);
}

export function MosaicAddressRestrictionTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicAddressRestrictionTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mosaicId': json['mosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'targetAddress': json['targetAddress'],
    };
}

export function MosaicAddressRestrictionTransactionBodyDTOToJSON(value?: MosaicAddressRestrictionTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mosaicId': value.mosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'targetAddress': value.targetAddress,
    };
}

