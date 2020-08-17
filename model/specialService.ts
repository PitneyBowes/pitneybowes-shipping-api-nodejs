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
import { Parameter } from './parameter';

export class SpecialService {
    'fee'?: number;
    'inputParameters'?: Array<Parameter>;
    'specialServiceId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "inputParameters",
            "baseName": "inputParameters",
            "type": "Array<Parameter>"
        },
        {
            "name": "specialServiceId",
            "baseName": "specialServiceId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SpecialService.attributeTypeMap;
    }
}
