import { exists } from '../runtime';
import { NamespaceRegistrationTypeEnumFromJSON, NamespaceRegistrationTypeEnumToJSON, } from './NamespaceRegistrationTypeEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumToJSON, } from './NetworkTypeEnum';
export function instanceOfEmbeddedNamespaceRegistrationTransactionDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "registrationType" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
export function EmbeddedNamespaceRegistrationTransactionDTOFromJSON(json) {
    return EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped(json, false);
}
export function EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'id': json['id'],
        'registrationType': NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
        'name': json['name'],
    };
}
export function EmbeddedNamespaceRegistrationTransactionDTOToJSON(value) {
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
        'duration': value.duration,
        'parentId': value.parentId,
        'id': value.id,
        'registrationType': NamespaceRegistrationTypeEnumToJSON(value.registrationType),
        'name': value.name,
    };
}
