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
import { ParcelProtectionCreateRequestShipmentInfoConsigneeInfo } from './parcelProtectionCreateRequestShipmentInfoConsigneeInfo';
import { ParcelProtectionCreateRequestShipmentInfoParcelInfo } from './parcelProtectionCreateRequestShipmentInfoParcelInfo';
import { ParcelProtectionCreateRequestShipmentInfoShipperInfo } from './parcelProtectionCreateRequestShipmentInfoShipperInfo';

export class ParcelProtectionCreateRequestShipmentInfo {
    'trackingNumber'?: string;
    'carrier'?: string;
    'serviceId'?: string;
    'insuranceCoverageValue'?: number;
    'insuranceCoverageValueCurrency'?: string;
    'parcelInfo'?: ParcelProtectionCreateRequestShipmentInfoParcelInfo;
    'shipperInfo'?: ParcelProtectionCreateRequestShipmentInfoShipperInfo;
    'consigneeInfo'?: ParcelProtectionCreateRequestShipmentInfoConsigneeInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingNumber",
            "baseName": "trackingNumber",
            "type": "string"
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string"
        },
        {
            "name": "serviceId",
            "baseName": "serviceId",
            "type": "string"
        },
        {
            "name": "insuranceCoverageValue",
            "baseName": "insuranceCoverageValue",
            "type": "number"
        },
        {
            "name": "insuranceCoverageValueCurrency",
            "baseName": "insuranceCoverageValueCurrency",
            "type": "string"
        },
        {
            "name": "parcelInfo",
            "baseName": "parcelInfo",
            "type": "ParcelProtectionCreateRequestShipmentInfoParcelInfo"
        },
        {
            "name": "shipperInfo",
            "baseName": "shipperInfo",
            "type": "ParcelProtectionCreateRequestShipmentInfoShipperInfo"
        },
        {
            "name": "consigneeInfo",
            "baseName": "consigneeInfo",
            "type": "ParcelProtectionCreateRequestShipmentInfoConsigneeInfo"
        }    ];

    static getAttributeTypeMap() {
        return ParcelProtectionCreateRequestShipmentInfo.attributeTypeMap;
    }
}

