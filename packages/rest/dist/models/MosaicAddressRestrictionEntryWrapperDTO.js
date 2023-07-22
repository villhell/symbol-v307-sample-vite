import { MosaicAddressRestrictionEntryDTOFromJSON, MosaicAddressRestrictionEntryDTOToJSON, } from './MosaicAddressRestrictionEntryDTO';
import { MosaicRestrictionEntryTypeEnumFromJSON, MosaicRestrictionEntryTypeEnumToJSON, } from './MosaicRestrictionEntryTypeEnum';
export function instanceOfMosaicAddressRestrictionEntryWrapperDTO(value) {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "compositeHash" in value;
    isInstance = isInstance && "entryType" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "restrictions" in value;
    return isInstance;
}
export function MosaicAddressRestrictionEntryWrapperDTOFromJSON(json) {
    return MosaicAddressRestrictionEntryWrapperDTOFromJSONTyped(json, false);
}
export function MosaicAddressRestrictionEntryWrapperDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'version': json['version'],
        'compositeHash': json['compositeHash'],
        'entryType': MosaicRestrictionEntryTypeEnumFromJSON(json['entryType']),
        'mosaicId': json['mosaicId'],
        'targetAddress': json['targetAddress'],
        'restrictions': (json['restrictions'].map(MosaicAddressRestrictionEntryDTOFromJSON)),
    };
}
export function MosaicAddressRestrictionEntryWrapperDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'version': value.version,
        'compositeHash': value.compositeHash,
        'entryType': MosaicRestrictionEntryTypeEnumToJSON(value.entryType),
        'mosaicId': value.mosaicId,
        'targetAddress': value.targetAddress,
        'restrictions': (value.restrictions.map(MosaicAddressRestrictionEntryDTOToJSON)),
    };
}
