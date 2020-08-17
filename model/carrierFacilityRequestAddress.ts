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

export class CarrierFacilityRequestAddress {
    'addressLines'?: Array<string>;
    'cityTown'?: string;
    'stateProvince'?: string;
    'countryCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLines",
            "baseName": "addressLines",
            "type": "Array<string>"
        },
        {
            "name": "cityTown",
            "baseName": "cityTown",
            "type": "string"
        },
        {
            "name": "stateProvince",
            "baseName": "stateProvince",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CarrierFacilityRequestAddress.attributeTypeMap;
    }
}

