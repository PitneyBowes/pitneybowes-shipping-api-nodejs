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
import { Address } from './address';
import { CarrierFacilityResponseCarrierFacilityOptions } from './carrierFacilityResponseCarrierFacilityOptions';
import { CarrierFacilityResponseFacilityHours } from './carrierFacilityResponseFacilityHours';

export class CarrierFacilityResponseCarrierFacilitySuggestions {
    'address'?: Address;
    'carrierFacilityAttributes'?: Array<CarrierFacilityResponseCarrierFacilityOptions>;
    'facilityHours'?: Array<CarrierFacilityResponseFacilityHours>;
    'facilityParking'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "carrierFacilityAttributes",
            "baseName": "carrierFacilityAttributes",
            "type": "Array<CarrierFacilityResponseCarrierFacilityOptions>"
        },
        {
            "name": "facilityHours",
            "baseName": "facilityHours",
            "type": "Array<CarrierFacilityResponseFacilityHours>"
        },
        {
            "name": "facilityParking",
            "baseName": "facilityParking",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CarrierFacilityResponseCarrierFacilitySuggestions.attributeTypeMap;
    }
}
