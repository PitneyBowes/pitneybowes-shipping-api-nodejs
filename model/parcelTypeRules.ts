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
import { DimensionRules } from './dimensionRules';
import { ParcelType } from './parcelType';
import { SpecialServiceCodes } from './specialServiceCodes';
import { SpecialServicesRule } from './specialServicesRule';
import { Trackable } from './trackable';
import { WeightRules } from './weightRules';

export class ParcelTypeRules {
    'parcelType'?: ParcelType;
    'brandedName'?: string;
    'rateTypeId'?: string;
    'rateTypeBrandedName'?: string;
    'trackable'?: Trackable;
    'specialServicesRule'?: Array<SpecialServicesRule>;
    'weightRules'?: Array<WeightRules>;
    'dimensionRules'?: Array<DimensionRules>;
    'suggestedTrackableSpecialServiceId'?: SpecialServiceCodes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "parcelType",
            "baseName": "parcelType",
            "type": "ParcelType"
        },
        {
            "name": "brandedName",
            "baseName": "brandedName",
            "type": "string"
        },
        {
            "name": "rateTypeId",
            "baseName": "rateTypeId",
            "type": "string"
        },
        {
            "name": "rateTypeBrandedName",
            "baseName": "rateTypeBrandedName",
            "type": "string"
        },
        {
            "name": "trackable",
            "baseName": "trackable",
            "type": "Trackable"
        },
        {
            "name": "specialServicesRule",
            "baseName": "specialServicesRule",
            "type": "Array<SpecialServicesRule>"
        },
        {
            "name": "weightRules",
            "baseName": "weightRules",
            "type": "Array<WeightRules>"
        },
        {
            "name": "dimensionRules",
            "baseName": "dimensionRules",
            "type": "Array<DimensionRules>"
        },
        {
            "name": "suggestedTrackableSpecialServiceId",
            "baseName": "suggestedTrackableSpecialServiceId",
            "type": "SpecialServiceCodes"
        }    ];

    static getAttributeTypeMap() {
        return ParcelTypeRules.attributeTypeMap;
    }
}

