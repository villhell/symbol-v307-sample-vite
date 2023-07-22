import { exists } from '../runtime';
import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
import { AliasActionEnumFromJSON, AliasActionEnumToJSON, } from './AliasActionEnum';
import { LinkActionEnumFromJSON, LinkActionEnumToJSON, } from './LinkActionEnum';
import { LockHashAlgorithmEnumFromJSON, LockHashAlgorithmEnumToJSON, } from './LockHashAlgorithmEnum';
import { MosaicRestrictionTypeEnumFromJSON, MosaicRestrictionTypeEnumToJSON, } from './MosaicRestrictionTypeEnum';
import { MosaicSupplyChangeActionEnumFromJSON, MosaicSupplyChangeActionEnumToJSON, } from './MosaicSupplyChangeActionEnum';
import { NamespaceRegistrationTypeEnumFromJSON, NamespaceRegistrationTypeEnumToJSON, } from './NamespaceRegistrationTypeEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
import { TransactionTypeEnumFromJSON, TransactionTypeEnumToJSON, } from './TransactionTypeEnum';
import { UnresolvedMosaicFromJSON, UnresolvedMosaicToJSON, } from './UnresolvedMosaic';
export function instanceOfEmbeddedTransactionInfoDTOTransaction(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "linkedPublicKey" in value;
    isInstance = isInstance && "linkAction" in value;
    isInstance = isInstance && "startEpoch" in value;
    isInstance = isInstance && "endEpoch" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "proof" in value;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "targetMosaicId" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "flags" in value;
    isInstance = isInstance && "divisibility" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "sourceAddress" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "aliasAction" in value;
    isInstance = isInstance && "minRemovalDelta" in value;
    isInstance = isInstance && "minApprovalDelta" in value;
    isInstance = isInstance && "addressAdditions" in value;
    isInstance = isInstance && "addressDeletions" in value;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "restrictionAdditions" in value;
    isInstance = isInstance && "restrictionDeletions" in value;
    isInstance = isInstance && "referenceMosaicId" in value;
    isInstance = isInstance && "restrictionKey" in value;
    isInstance = isInstance && "previousRestrictionValue" in value;
    isInstance = isInstance && "newRestrictionValue" in value;
    isInstance = isInstance && "previousRestrictionType" in value;
    isInstance = isInstance && "newRestrictionType" in value;
    isInstance = isInstance && "mosaics" in value;
    return isInstance;
}
export function EmbeddedTransactionInfoDTOTransactionFromJSON(json) {
    return EmbeddedTransactionInfoDTOTransactionFromJSONTyped(json, false);
}
export function EmbeddedTransactionInfoDTOTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hash': json['hash'],
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
        'proof': json['proof'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
        'targetMosaicId': json['targetMosaicId'],
        'targetNamespaceId': !exists(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'id': json['id'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
        'sourceAddress': json['sourceAddress'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'registrationType': NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
        'name': json['name'],
        'namespaceId': json['namespaceId'],
        'address': json['address'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': (json['restrictionAdditions'].map(TransactionTypeEnumFromJSON)),
        'restrictionDeletions': (json['restrictionDeletions'].map(TransactionTypeEnumFromJSON)),
        'referenceMosaicId': json['referenceMosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'previousRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['previousRestrictionType']),
        'newRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['newRestrictionType']),
        'mosaics': (json['mosaics'].map(UnresolvedMosaicFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
export function EmbeddedTransactionInfoDTOTransactionToJSON(value) {
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
        'linkAction': LinkActionEnumToJSON(value.linkAction),
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hash': value.hash,
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
        'proof': value.proof,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
        'targetMosaicId': value.targetMosaicId,
        'targetNamespaceId': value.targetNamespaceId,
        'id': value.id,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
        'sourceAddress': value.sourceAddress,
        'parentId': value.parentId,
        'registrationType': NamespaceRegistrationTypeEnumToJSON(value.registrationType),
        'name': value.name,
        'namespaceId': value.namespaceId,
        'address': value.address,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': (value.restrictionAdditions.map(TransactionTypeEnumToJSON)),
        'restrictionDeletions': (value.restrictionDeletions.map(TransactionTypeEnumToJSON)),
        'referenceMosaicId': value.referenceMosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'previousRestrictionType': MosaicRestrictionTypeEnumToJSON(value.previousRestrictionType),
        'newRestrictionType': MosaicRestrictionTypeEnumToJSON(value.newRestrictionType),
        'mosaics': (value.mosaics.map(UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}
