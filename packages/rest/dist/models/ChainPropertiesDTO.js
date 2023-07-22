import { exists } from '../runtime';
export function instanceOfChainPropertiesDTO(value) {
    let isInstance = true;
    return isInstance;
}
export function ChainPropertiesDTOFromJSON(json) {
    return ChainPropertiesDTOFromJSONTyped(json, false);
}
export function ChainPropertiesDTOFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enableVerifiableState': !exists(json, 'enableVerifiableState') ? undefined : json['enableVerifiableState'],
        'enableVerifiableReceipts': !exists(json, 'enableVerifiableReceipts') ? undefined : json['enableVerifiableReceipts'],
        'currencyMosaicId': !exists(json, 'currencyMosaicId') ? undefined : json['currencyMosaicId'],
        'harvestingMosaicId': !exists(json, 'harvestingMosaicId') ? undefined : json['harvestingMosaicId'],
        'blockGenerationTargetTime': !exists(json, 'blockGenerationTargetTime') ? undefined : json['blockGenerationTargetTime'],
        'blockTimeSmoothingFactor': !exists(json, 'blockTimeSmoothingFactor') ? undefined : json['blockTimeSmoothingFactor'],
        'blockFinalizationInterval': !exists(json, 'blockFinalizationInterval') ? undefined : json['blockFinalizationInterval'],
        'importanceGrouping': !exists(json, 'importanceGrouping') ? undefined : json['importanceGrouping'],
        'importanceActivityPercentage': !exists(json, 'importanceActivityPercentage') ? undefined : json['importanceActivityPercentage'],
        'maxRollbackBlocks': !exists(json, 'maxRollbackBlocks') ? undefined : json['maxRollbackBlocks'],
        'maxDifficultyBlocks': !exists(json, 'maxDifficultyBlocks') ? undefined : json['maxDifficultyBlocks'],
        'defaultDynamicFeeMultiplier': !exists(json, 'defaultDynamicFeeMultiplier') ? undefined : json['defaultDynamicFeeMultiplier'],
        'maxTransactionLifetime': !exists(json, 'maxTransactionLifetime') ? undefined : json['maxTransactionLifetime'],
        'maxBlockFutureTime': !exists(json, 'maxBlockFutureTime') ? undefined : json['maxBlockFutureTime'],
        'initialCurrencyAtomicUnits': !exists(json, 'initialCurrencyAtomicUnits') ? undefined : json['initialCurrencyAtomicUnits'],
        'maxMosaicAtomicUnits': !exists(json, 'maxMosaicAtomicUnits') ? undefined : json['maxMosaicAtomicUnits'],
        'totalChainImportance': !exists(json, 'totalChainImportance') ? undefined : json['totalChainImportance'],
        'minHarvesterBalance': !exists(json, 'minHarvesterBalance') ? undefined : json['minHarvesterBalance'],
        'maxHarvesterBalance': !exists(json, 'maxHarvesterBalance') ? undefined : json['maxHarvesterBalance'],
        'minVoterBalance': !exists(json, 'minVoterBalance') ? undefined : json['minVoterBalance'],
        'maxVotingKeysPerAccount': !exists(json, 'maxVotingKeysPerAccount') ? undefined : json['maxVotingKeysPerAccount'],
        'minVotingKeyLifetime': !exists(json, 'minVotingKeyLifetime') ? undefined : json['minVotingKeyLifetime'],
        'maxVotingKeyLifetime': !exists(json, 'maxVotingKeyLifetime') ? undefined : json['maxVotingKeyLifetime'],
        'harvestBeneficiaryPercentage': !exists(json, 'harvestBeneficiaryPercentage') ? undefined : json['harvestBeneficiaryPercentage'],
        'harvestNetworkPercentage': !exists(json, 'harvestNetworkPercentage') ? undefined : json['harvestNetworkPercentage'],
        'harvestNetworkFeeSinkAddress': !exists(json, 'harvestNetworkFeeSinkAddress') ? undefined : json['harvestNetworkFeeSinkAddress'],
        'blockPruneInterval': !exists(json, 'blockPruneInterval') ? undefined : json['blockPruneInterval'],
        'maxTransactionsPerBlock': !exists(json, 'maxTransactionsPerBlock') ? undefined : json['maxTransactionsPerBlock'],
    };
}
export function ChainPropertiesDTOToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enableVerifiableState': value.enableVerifiableState,
        'enableVerifiableReceipts': value.enableVerifiableReceipts,
        'currencyMosaicId': value.currencyMosaicId,
        'harvestingMosaicId': value.harvestingMosaicId,
        'blockGenerationTargetTime': value.blockGenerationTargetTime,
        'blockTimeSmoothingFactor': value.blockTimeSmoothingFactor,
        'blockFinalizationInterval': value.blockFinalizationInterval,
        'importanceGrouping': value.importanceGrouping,
        'importanceActivityPercentage': value.importanceActivityPercentage,
        'maxRollbackBlocks': value.maxRollbackBlocks,
        'maxDifficultyBlocks': value.maxDifficultyBlocks,
        'defaultDynamicFeeMultiplier': value.defaultDynamicFeeMultiplier,
        'maxTransactionLifetime': value.maxTransactionLifetime,
        'maxBlockFutureTime': value.maxBlockFutureTime,
        'initialCurrencyAtomicUnits': value.initialCurrencyAtomicUnits,
        'maxMosaicAtomicUnits': value.maxMosaicAtomicUnits,
        'totalChainImportance': value.totalChainImportance,
        'minHarvesterBalance': value.minHarvesterBalance,
        'maxHarvesterBalance': value.maxHarvesterBalance,
        'minVoterBalance': value.minVoterBalance,
        'maxVotingKeysPerAccount': value.maxVotingKeysPerAccount,
        'minVotingKeyLifetime': value.minVotingKeyLifetime,
        'maxVotingKeyLifetime': value.maxVotingKeyLifetime,
        'harvestBeneficiaryPercentage': value.harvestBeneficiaryPercentage,
        'harvestNetworkPercentage': value.harvestNetworkPercentage,
        'harvestNetworkFeeSinkAddress': value.harvestNetworkFeeSinkAddress,
        'blockPruneInterval': value.blockPruneInterval,
        'maxTransactionsPerBlock': value.maxTransactionsPerBlock,
    };
}
