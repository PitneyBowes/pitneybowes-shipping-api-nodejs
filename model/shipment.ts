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
import { AdditionalAddress } from './additionalAddress';
import { Address } from './address';
import { CarrierPayment } from './carrierPayment';
import { Customs } from './customs';
import { Document } from './document';
import { HazmatDetails } from './hazmatDetails';
import { Parameter } from './parameter';
import { Parcel } from './parcel';
import { Rate } from './rate';

export class Shipment {
    'additionalAddresses'?: Array<AdditionalAddress>;
    'altReturnAddress'?: Address;
    'carrierPayments'?: Array<CarrierPayment>;
    'customs'?: Customs;
    'documents'?: Array<Document>;
    'fromAddress': Address;
    'hazmatDetails'?: HazmatDetails;
    'parcel': Parcel;
    'parcelTrackingNumber'?: string;
    'rates': Array<Rate>;
    'references'?: Array<Parameter>;
    'shipmentId'?: string;
    'shipmentOptions'?: Array<Parameter>;
    'shipmentType'?: Shipment.ShipmentTypeEnum;
    'soldToAddress'?: Address;
    'toAddress': Address;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalAddresses",
            "baseName": "additionalAddresses",
            "type": "Array<AdditionalAddress>"
        },
        {
            "name": "altReturnAddress",
            "baseName": "altReturnAddress",
            "type": "Address"
        },
        {
            "name": "carrierPayments",
            "baseName": "carrierPayments",
            "type": "Array<CarrierPayment>"
        },
        {
            "name": "customs",
            "baseName": "customs",
            "type": "Customs"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<Document>"
        },
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "Address"
        },
        {
            "name": "hazmatDetails",
            "baseName": "hazmatDetails",
            "type": "HazmatDetails"
        },
        {
            "name": "parcel",
            "baseName": "parcel",
            "type": "Parcel"
        },
        {
            "name": "parcelTrackingNumber",
            "baseName": "parcelTrackingNumber",
            "type": "string"
        },
        {
            "name": "rates",
            "baseName": "rates",
            "type": "Array<Rate>"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Parameter>"
        },
        {
            "name": "shipmentId",
            "baseName": "shipmentId",
            "type": "string"
        },
        {
            "name": "shipmentOptions",
            "baseName": "shipmentOptions",
            "type": "Array<Parameter>"
        },
        {
            "name": "shipmentType",
            "baseName": "shipmentType",
            "type": "Shipment.ShipmentTypeEnum"
        },
        {
            "name": "soldToAddress",
            "baseName": "soldToAddress",
            "type": "Address"
        },
        {
            "name": "toAddress",
            "baseName": "toAddress",
            "type": "Address"
        }    ];

    static getAttributeTypeMap() {
        return Shipment.attributeTypeMap;
    }
}

export namespace Shipment {
    export enum ShipmentTypeEnum {
        OUTBOUND = <any> 'OUTBOUND',
        RETURN = <any> 'RETURN'
    }
}