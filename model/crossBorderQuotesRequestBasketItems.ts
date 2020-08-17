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
import { CrossBorderQuotesRequestAttributes } from './crossBorderQuotesRequestAttributes';
import { CrossBorderQuotesRequestCategories } from './crossBorderQuotesRequestCategories';
import { CrossBorderQuotesRequestIdentifiers } from './crossBorderQuotesRequestIdentifiers';
import { CrossBorderQuotesRequestItemDimension } from './crossBorderQuotesRequestItemDimension';
import { CrossBorderQuotesRequestPricing } from './crossBorderQuotesRequestPricing';
import { CrossBorderQuotesRequestUnitWeight } from './crossBorderQuotesRequestUnitWeight';

export class CrossBorderQuotesRequestBasketItems {
    'itemId'?: string;
    'categories'?: Array<CrossBorderQuotesRequestCategories>;
    'description'?: string;
    'longDescription'?: string;
    'unitWeight'?: CrossBorderQuotesRequestUnitWeight;
    'itemDimension'?: CrossBorderQuotesRequestItemDimension;
    'url'?: string;
    'quantity'?: number;
    'unitPrice'?: number;
    'originCountryCode'?: string;
    'parentIdentifier'?: string;
    'childIdentifier'?: string;
    'kit'?: string;
    'kitIdentifier'?: string;
    'kitQuantity'?: string;
    'manufacturer'?: string;
    'brand'?: string;
    'eccn'?: string;
    'enabled'?: boolean;
    'pricing'?: CrossBorderQuotesRequestPricing;
    'hSTariffCode'?: string;
    'hSTariffCodeCountry'?: string;
    'identifiers'?: Array<CrossBorderQuotesRequestIdentifiers>;
    'imageUrls'?: Array<string>;
    'shipsAlone'?: boolean;
    'attributes'?: Array<CrossBorderQuotesRequestAttributes>;
    'hazmats'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<CrossBorderQuotesRequestCategories>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "longDescription",
            "baseName": "longDescription",
            "type": "string"
        },
        {
            "name": "unitWeight",
            "baseName": "unitWeight",
            "type": "CrossBorderQuotesRequestUnitWeight"
        },
        {
            "name": "itemDimension",
            "baseName": "itemDimension",
            "type": "CrossBorderQuotesRequestItemDimension"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "unitPrice",
            "baseName": "unitPrice",
            "type": "number"
        },
        {
            "name": "originCountryCode",
            "baseName": "originCountryCode",
            "type": "string"
        },
        {
            "name": "parentIdentifier",
            "baseName": "parentIdentifier",
            "type": "string"
        },
        {
            "name": "childIdentifier",
            "baseName": "childIdentifier",
            "type": "string"
        },
        {
            "name": "kit",
            "baseName": "kit",
            "type": "string"
        },
        {
            "name": "kitIdentifier",
            "baseName": "kitIdentifier",
            "type": "string"
        },
        {
            "name": "kitQuantity",
            "baseName": "kitQuantity",
            "type": "string"
        },
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "string"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "eccn",
            "baseName": "eccn",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "pricing",
            "baseName": "pricing",
            "type": "CrossBorderQuotesRequestPricing"
        },
        {
            "name": "hSTariffCode",
            "baseName": "hSTariffCode",
            "type": "string"
        },
        {
            "name": "hSTariffCodeCountry",
            "baseName": "hSTariffCodeCountry",
            "type": "string"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<CrossBorderQuotesRequestIdentifiers>"
        },
        {
            "name": "imageUrls",
            "baseName": "imageUrls",
            "type": "Array<string>"
        },
        {
            "name": "shipsAlone",
            "baseName": "shipsAlone",
            "type": "boolean"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<CrossBorderQuotesRequestAttributes>"
        },
        {
            "name": "hazmats",
            "baseName": "hazmats",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CrossBorderQuotesRequestBasketItems.attributeTypeMap;
    }
}
