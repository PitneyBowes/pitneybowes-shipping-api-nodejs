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
import { ParcelTypeRules } from './parcelTypeRules';
import { Services } from './services';

export class CarrierRule {
    'serviceId'?: Services;
    'brandedName'?: string;
    'parcelTypeRules'?: Array<ParcelTypeRules>;
    'parameters'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "Services"
        },
        {
            "name": "brandedName",
            "baseName": "brandedName",
            "type": "string"
        },
        {
            "name": "parcelTypeRules",
            "baseName": "parcelTypeRules",
            "type": "Array<ParcelTypeRules>"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CarrierRule.attributeTypeMap;
    }
}

