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

export class WeightRules {
    'required'?: boolean;
    'unitOfMeasurement'?: string;
    'minWeight'?: number;
    'maxWeight'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "unitOfMeasurement",
            "baseName": "unitOfMeasurement",
            "type": "string"
        },
        {
            "name": "minWeight",
            "baseName": "minWeight",
            "type": "number"
        },
        {
            "name": "maxWeight",
            "baseName": "maxWeight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return WeightRules.attributeTypeMap;
    }
}

