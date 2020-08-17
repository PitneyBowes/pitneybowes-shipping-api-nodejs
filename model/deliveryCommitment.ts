/**
 * Shipping API
 * Shipping API Sample.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@pb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class DeliveryCommitment {
    'additionalDetails'?: string;
    'estimatedDeliveryDateTime'?: string;
    'guarantee'?: string;
    'maxEstimatedNumberOfDays'?: string;
    'minEstimatedNumberOfDays'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalDetails",
            "baseName": "additionalDetails",
            "type": "string"
        },
        {
            "name": "estimatedDeliveryDateTime",
            "baseName": "estimatedDeliveryDateTime",
            "type": "string"
        },
        {
            "name": "guarantee",
            "baseName": "guarantee",
            "type": "string"
        },
        {
            "name": "maxEstimatedNumberOfDays",
            "baseName": "maxEstimatedNumberOfDays",
            "type": "string"
        },
        {
            "name": "minEstimatedNumberOfDays",
            "baseName": "minEstimatedNumberOfDays",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeliveryCommitment.attributeTypeMap;
    }
}

