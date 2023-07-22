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


import * as runtime from '../runtime';
import type {
  BlockInfoDTO,
  BlockOrderByEnum,
  BlockPage,
  MerkleProofInfoDTO,
  ModelError,
  Order,
} from '../models';
import {
    BlockInfoDTOFromJSON,
    BlockInfoDTOToJSON,
    BlockOrderByEnumFromJSON,
    BlockOrderByEnumToJSON,
    BlockPageFromJSON,
    BlockPageToJSON,
    MerkleProofInfoDTOFromJSON,
    MerkleProofInfoDTOToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    OrderFromJSON,
    OrderToJSON,
} from '../models';

export interface GetBlockByHeightRequest {
    height: string;
}

export interface GetMerkleReceiptsRequest {
    height: string;
    hash: string;
}

export interface GetMerkleTransactionRequest {
    height: string;
    hash: string;
}

export interface SearchBlocksRequest {
    signerPublicKey?: string;
    beneficiaryAddress?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
    orderBy?: BlockOrderByEnum;
}

/**
 * 
 */
export class BlockRoutesApi extends runtime.BaseAPI {

    /**
     * Gets a block from the chain that has the given height.
     * Get block information
     */
    async getBlockByHeightRaw(requestParameters: GetBlockByHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockInfoDTO>> {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height','Required parameter requestParameters.height was null or undefined when calling getBlockByHeight.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/blocks/{height}`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockInfoDTOFromJSON(jsonValue));
    }

    /**
     * Gets a block from the chain that has the given height.
     * Get block information
     */
    async getBlockByHeight(requestParameters: GetBlockByHeightRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockInfoDTO> {
        const response = await this.getBlockByHeightRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the merkle path for a receipt statement or resolution linked to a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.receiptsHash) to verify if the statement was linked with the block. 
     * Get the merkle path for a given a receipt statement hash and block
     */
    async getMerkleReceiptsRaw(requestParameters: GetMerkleReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleProofInfoDTO>> {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height','Required parameter requestParameters.height was null or undefined when calling getMerkleReceipts.');
        }

        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash','Required parameter requestParameters.hash was null or undefined when calling getMerkleReceipts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/blocks/{height}/statements/{hash}/merkle`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))).replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleProofInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the merkle path for a receipt statement or resolution linked to a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.receiptsHash) to verify if the statement was linked with the block. 
     * Get the merkle path for a given a receipt statement hash and block
     */
    async getMerkleReceipts(requestParameters: GetMerkleReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleProofInfoDTO> {
        const response = await this.getMerkleReceiptsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the merkle path for a transaction included in a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.transactionsHash) to verify if the transaction was included in the block. 
     * Get the merkle path for a given a transaction and block
     */
    async getMerkleTransactionRaw(requestParameters: GetMerkleTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleProofInfoDTO>> {
        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height','Required parameter requestParameters.height was null or undefined when calling getMerkleTransaction.');
        }

        if (requestParameters.hash === null || requestParameters.hash === undefined) {
            throw new runtime.RequiredError('hash','Required parameter requestParameters.hash was null or undefined when calling getMerkleTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/blocks/{height}/transactions/{hash}/merkle`.replace(`{${"height"}}`, encodeURIComponent(String(requestParameters.height))).replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters.hash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleProofInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the merkle path for a transaction included in a block. The merkle path is the minimum number of nodes needed to calculate the merkle root.  Steps to calculate the merkle root: 1. proofHash = hash (leaf). 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows: * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash). * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash). 3. Repeat 2. for every item in the merklePath list. 4. Compare if the calculated proofHash equals the one recorded in the block header (block.transactionsHash) to verify if the transaction was included in the block. 
     * Get the merkle path for a given a transaction and block
     */
    async getMerkleTransaction(requestParameters: GetMerkleTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleProofInfoDTO> {
        const response = await this.getMerkleTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets an array of bocks.
     * Search blocks
     */
    async searchBlocksRaw(requestParameters: SearchBlocksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockPage>> {
        const queryParameters: any = {};

        if (requestParameters.signerPublicKey !== undefined) {
            queryParameters['signerPublicKey'] = requestParameters.signerPublicKey;
        }

        if (requestParameters.beneficiaryAddress !== undefined) {
            queryParameters['beneficiaryAddress'] = requestParameters.beneficiaryAddress;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/blocks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockPageFromJSON(jsonValue));
    }

    /**
     * Gets an array of bocks.
     * Search blocks
     */
    async searchBlocks(requestParameters: SearchBlocksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockPage> {
        const response = await this.searchBlocksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
