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

export class CrossBorderQuotesResponseUnitRatesDeliveryCommitment {
    'minEstimatedNumberOfDays'?: number;
    'maxEstimatedNumberOfDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "minEstimatedNumberOfDays",
            "baseName": "minEstimatedNumberOfDays",
            "type": "number"
        },
        {
            "name": "maxEstimatedNumberOfDays",
            "baseName": "maxEstimatedNumberOfDays",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CrossBorderQuotesResponseUnitRatesDeliveryCommitment.attributeTypeMap;
    }
}

