import { LockHashAlgorithmEnumFromJSON, LockHashAlgorithmEnumToJSON, } from './LockHashAlgorithmEnum';
import { LockStatusFromJSON, LockStatusToJSON, } from './LockStatus';
export function instanceOfSecretLockEntryDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "ownerAddress" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "endHeight" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "hashAlgorithm" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "compositeHash" in value;
    return isInstance;
}
export function SecretLockEntryDTOFromJSON(json) {
    return SecretLockEntryDTOFromJSONTyped(json, false);
}
export function SecretLockEntryDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'ownerAddress': json['ownerAddress'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'endHeight': json['endHeight'],
        'status': LockStatusFromJSON(json['status']),
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
        'secret': json['secret'],
        'recipientAddress': json['recipientAddress'],
        'compositeHash': json['compositeHash'],
    };
}
export function SecretLockEntryDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'ownerAddress': value.ownerAddress,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'endHeight': value.endHeight,
        'status': LockStatusToJSON(value.status),
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
        'secret': value.secret,
        'recipientAddress': value.recipientAddress,
        'compositeHash': value.compositeHash,
    };
}
