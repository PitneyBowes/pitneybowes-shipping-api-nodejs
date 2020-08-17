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
import { Document } from './document';
import { Parameter } from './parameter';

export class Manifest {
    'carrier': Manifest.CarrierEnum;
    'documents'?: Array<Document>;
    'fromAddress'?: Address;
    'inductionPostalCode'?: string;
    'manifestId'?: string;
    'manifestTrackingNumber'?: string;
    'parameters'?: Array<Parameter>;
    'parcelTrackingNumbers'?: Array<string>;
    'submissionDate': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "Manifest.CarrierEnum"
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
            "name": "inductionPostalCode",
            "baseName": "inductionPostalCode",
            "type": "string"
        },
        {
            "name": "manifestId",
            "baseName": "manifestId",
            "type": "string"
        },
        {
            "name": "manifestTrackingNumber",
            "baseName": "manifestTrackingNumber",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<Parameter>"
        },
        {
            "name": "parcelTrackingNumbers",
            "baseName": "parcelTrackingNumbers",
            "type": "Array<string>"
        },
        {
            "name": "submissionDate",
            "baseName": "submissionDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Manifest.attributeTypeMap;
    }
}

export namespace Manifest {
    export enum CarrierEnum {
        USPS = <any> 'USPS',
        NEWGISTICS = <any> 'NEWGISTICS',
        PBPresort = <any> 'PBPresort'
    }
}