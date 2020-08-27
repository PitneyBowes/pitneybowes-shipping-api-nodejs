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
import CustomsInfo from './CustomsInfo';
import CustomsItem from './CustomsItem';

/**
 * The Customs model module.
 * @module PB.ShippingAPI/model/Customs
 * @version 1.0.0
 */
class Customs {
    /**
     * Constructs a new <code>Customs</code>.
     * @alias module:PB.ShippingAPI/model/Customs
     */
    constructor() { 
        
        Customs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Customs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/Customs} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/Customs} The populated <code>Customs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Customs();

            if (data.hasOwnProperty('customsInfo')) {
                obj['customsInfo'] = CustomsInfo.constructFromObject(data['customsInfo']);
            }
            if (data.hasOwnProperty('customsItems')) {
                obj['customsItems'] = ApiClient.convertToType(data['customsItems'], [CustomsItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:PB.ShippingAPI/model/CustomsInfo} customsInfo
 */
Customs.prototype['customsInfo'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CustomsItem>} customsItems
 */
Customs.prototype['customsItems'] = undefined;






export default Customs;

