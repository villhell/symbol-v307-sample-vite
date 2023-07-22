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
import type { AccountDTO } from './AccountDTO';
import {
    AccountDTOFromJSON,
    AccountDTOFromJSONTyped,
    AccountDTOToJSON,
} from './AccountDTO';

/**
 * 
 * @export
 * @interface AccountInfoDTO
 */
export interface AccountInfoDTO {
    /**
     * Internal resource identifier.
     * @type {string}
     * @memberof AccountInfoDTO
     */
    id: string;
    /**
     * 
     * @type {AccountDTO}
     * @memberof AccountInfoDTO
     */
    account: AccountDTO;
}

/**
 * Check if a given object implements the AccountInfoDTO interface.
 */
export function instanceOfAccountInfoDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "account" in value;

    return isInstance;
}

export function AccountInfoDTOFromJSON(json: any): AccountInfoDTO {
    return AccountInfoDTOFromJSONTyped(json, false);
}

export function AccountInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'account': AccountDTOFromJSON(json['account']),
    };
}

export function AccountInfoDTOToJSON(value?: AccountInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'account': AccountDTOToJSON(value.account),
    };
}

