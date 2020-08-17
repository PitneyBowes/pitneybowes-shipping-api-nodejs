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
import { SchedulePickupTotalWeight } from './schedulePickupTotalWeight';

export class SchedulePickupPickupSummary {
    'serviceId'?: string;
    'count'?: number;
    'totalWeight'?: SchedulePickupTotalWeight;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "totalWeight",
            "baseName": "totalWeight",
            "type": "SchedulePickupTotalWeight"
        }    ];

    static getAttributeTypeMap() {
        return SchedulePickupPickupSummary.attributeTypeMap;
    }
}

