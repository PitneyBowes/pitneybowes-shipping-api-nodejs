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
import { CustomsInfo } from './customsInfo';
import { CustomsItem } from './customsItem';

export class Customs {
    'customsInfo'?: CustomsInfo;
    'customsItems'?: Array<CustomsItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customsInfo",
            "baseName": "customsInfo",
            "type": "CustomsInfo"
        },
        {
            "name": "customsItems",
            "baseName": "customsItems",
            "type": "Array<CustomsItem>"
        }    ];

    static getAttributeTypeMap() {
        return Customs.attributeTypeMap;
    }
}

