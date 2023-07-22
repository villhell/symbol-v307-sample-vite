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
import type { LinkActionEnum } from './LinkActionEnum';
import {
    LinkActionEnumFromJSON,
    LinkActionEnumFromJSONTyped,
    LinkActionEnumToJSON,
} from './LinkActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedVotingKeyLinkTransactionDTO
 */
export interface EmbeddedVotingKeyLinkTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    type: number;
    /**
     * 32 bytes voting public key.
     * @type {string}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    startEpoch: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    endEpoch: number;
    /**
     * 
     * @type {LinkActionEnum}
     * @memberof EmbeddedVotingKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}

/**
 * Check if a given object implements the EmbeddedVotingKeyLinkTransactionDTO interface.
 */
export function instanceOfEmbeddedVotingKeyLinkTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "linkAction" in value;

    return isInstance;
}

export function EmbeddedVotingKeyLinkTransactionDTOFromJSON(json: any): EmbeddedVotingKeyLinkTransactionDTO {
    return EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedVotingKeyLinkTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}

export function EmbeddedVotingKeyLinkTransactionDTOToJSON(value?: EmbeddedVotingKeyLinkTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'linkedPublicKey': value.linkedPublicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
    };
}

