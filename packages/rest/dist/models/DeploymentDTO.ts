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
/**
 * 
 * @export
 * @interface DeploymentDTO
 */
export interface DeploymentDTO {
    /**
     * The tool used to create, maintain and deploy the node. Examples: symbol-bootstrap, manual.
     * @type {string}
     * @memberof DeploymentDTO
     */
    deploymentTool: string;
    /**
     * The version of the tool used to create, maintain and deploy the node.
     * @type {string}
     * @memberof DeploymentDTO
     */
    deploymentToolVersion: string;
    /**
     * When was the node last upgraded.
     * @type {string}
     * @memberof DeploymentDTO
     */
    lastUpdatedDate: string;
}

/**
 * Check if a given object implements the DeploymentDTO interface.
 */
export function instanceOfDeploymentDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deploymentTool" in value;
    isInstance = isInstance && "deploymentToolVersion" in value;
    isInstance = isInstance && "lastUpdatedDate" in value;

    return isInstance;
}

export function DeploymentDTOFromJSON(json: any): DeploymentDTO {
    return DeploymentDTOFromJSONTyped(json, false);
}

export function DeploymentDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploymentDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deploymentTool': json['deploymentTool'],
        'deploymentToolVersion': json['deploymentToolVersion'],
        'lastUpdatedDate': json['lastUpdatedDate'],
    };
}

export function DeploymentDTOToJSON(value?: DeploymentDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deploymentTool': value.deploymentTool,
        'deploymentToolVersion': value.deploymentToolVersion,
        'lastUpdatedDate': value.lastUpdatedDate,
    };
}

