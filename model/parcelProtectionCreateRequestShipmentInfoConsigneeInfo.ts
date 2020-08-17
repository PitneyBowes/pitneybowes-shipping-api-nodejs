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

export class ParcelProtectionCreateRequestShipmentInfoConsigneeInfo {
    'address'?: Address;
    'companyName'?: string;
    'familyName'?: string;
    'givenName'?: string;
    'middleName'?: string;
    'email'?: string;
    'phoneNumbers'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "familyName",
            "baseName": "familyName",
            "type": "string"
        },
        {
            "name": "givenName",
            "baseName": "givenName",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumbers",
            "baseName": "phoneNumbers",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return ParcelProtectionCreateRequestShipmentInfoConsigneeInfo.attributeTypeMap;
    }
}

