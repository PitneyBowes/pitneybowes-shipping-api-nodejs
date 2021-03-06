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
 *
 */

import ApiClient from '../ApiClient';
import ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList from './ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList';

/**
 * The ParcelProtectionQuoteRequestShipmentInfoParcelInfo model module.
 * @module PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo
 * @version 1.0.0
 */
class ParcelProtectionQuoteRequestShipmentInfoParcelInfo {
    /**
     * Constructs a new <code>ParcelProtectionQuoteRequestShipmentInfoParcelInfo</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo
     * @param commodityList {Array.<module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList>} 
     */
    constructor(commodityList) { 
        
        ParcelProtectionQuoteRequestShipmentInfoParcelInfo.initialize(this, commodityList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, commodityList) { 
        obj['commodityList'] = commodityList;
    }

    /**
     * Constructs a <code>ParcelProtectionQuoteRequestShipmentInfoParcelInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo} The populated <code>ParcelProtectionQuoteRequestShipmentInfoParcelInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionQuoteRequestShipmentInfoParcelInfo();

            if (data.hasOwnProperty('commodityList')) {
                obj['commodityList'] = ApiClient.convertToType(data['commodityList'], [ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList>} commodityList
 */
ParcelProtectionQuoteRequestShipmentInfoParcelInfo.prototype['commodityList'] = undefined;






export default ParcelProtectionQuoteRequestShipmentInfoParcelInfo;

