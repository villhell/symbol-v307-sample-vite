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
 * @interface CosignatureDTOAllOf
 */
export interface CosignatureDTOAllOf {
    /**
     * Cosignature version.
     * @type {string}
     * @memberof CosignatureDTOAllOf
     */
    version: string;
    /**
     * Public key.
     * @type {string}
     * @memberof CosignatureDTOAllOf
     */
    signerPublicKey: string;
}

/**
 * Check if a given object implements the CosignatureDTOAllOf interface.
 */
export function instanceOfCosignatureDTOAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "signerPublicKey" in value;

    return isInstance;
}

export function CosignatureDTOAllOfFromJSON(json: any): CosignatureDTOAllOf {
    return CosignatureDTOAllOfFromJSONTyped(json, false);
}

export function CosignatureDTOAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosignatureDTOAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'signerPublicKey': json['signerPublicKey'],
    };
}

export function CosignatureDTOAllOfToJSON(value?: CosignatureDTOAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'signerPublicKey': value.signerPublicKey,
    };
}

