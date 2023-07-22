import { MosaicSupplyChangeActionEnumFromJSON, MosaicSupplyChangeActionEnumToJSON, } from './MosaicSupplyChangeActionEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfMosaicSupplyChangeTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;
    return isInstance;
}
export function MosaicSupplyChangeTransactionDTOFromJSON(json) {
    return MosaicSupplyChangeTransactionDTOFromJSONTyped(json, false);
}
export function MosaicSupplyChangeTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
    };
}
export function MosaicSupplyChangeTransactionDTOToJSON(value) {
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
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
    };
}
