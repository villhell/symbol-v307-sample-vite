import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON, } from './AccountRestrictionFlagsEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfAccountAddressRestrictionTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "restrictionFlags" in value;
    isInstance = isInstance && "restrictionAdditions" in value;
    isInstance = isInstance && "restrictionDeletions" in value;
    return isInstance;
}
export function AccountAddressRestrictionTransactionDTOFromJSON(json) {
    return AccountAddressRestrictionTransactionDTOFromJSONTyped(json, false);
}
export function AccountAddressRestrictionTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
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
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': json['restrictionAdditions'],
        'restrictionDeletions': json['restrictionDeletions'],
    };
}
export function AccountAddressRestrictionTransactionDTOToJSON(value) {
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
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': value.restrictionAdditions,
        'restrictionDeletions': value.restrictionDeletions,
    };
}
