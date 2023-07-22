import { CosignatureDTOFromJSON, CosignatureDTOToJSON, } from './CosignatureDTO';
import { EmbeddedTransactionInfoDTOFromJSON, EmbeddedTransactionInfoDTOToJSON, } from './EmbeddedTransactionInfoDTO';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfAggregateTransactionExtendedDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "transactionsHash" in value;
    isInstance = isInstance && "cosignatures" in value;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
export function AggregateTransactionExtendedDTOFromJSON(json) {
    return AggregateTransactionExtendedDTOFromJSONTyped(json, false);
}
export function AggregateTransactionExtendedDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'transactionsHash': json['transactionsHash'],
        'cosignatures': (json['cosignatures'].map(CosignatureDTOFromJSON)),
        'transactions': (json['transactions'].map(EmbeddedTransactionInfoDTOFromJSON)),
    };
}
export function AggregateTransactionExtendedDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'transactionsHash': value.transactionsHash,
        'cosignatures': (value.cosignatures.map(CosignatureDTOToJSON)),
        'transactions': (value.transactions.map(EmbeddedTransactionInfoDTOToJSON)),
    };
}
