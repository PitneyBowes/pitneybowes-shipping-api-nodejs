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

/**
 * The ParcelProtectionCreateResponseParcelProtectionFeesBreakup model module.
 * @module PB.ShippingAPI/model/ParcelProtectionCreateResponseParcelProtectionFeesBreakup
 * @version 1.0.0
 */
class ParcelProtectionCreateResponseParcelProtectionFeesBreakup {
    /**
     * Constructs a new <code>ParcelProtectionCreateResponseParcelProtectionFeesBreakup</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionCreateResponseParcelProtectionFeesBreakup
     */
    constructor() { 
        
        ParcelProtectionCreateResponseParcelProtectionFeesBreakup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionCreateResponseParcelProtectionFeesBreakup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionCreateResponseParcelProtectionFeesBreakup} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionCreateResponseParcelProtectionFeesBreakup} The populated <code>ParcelProtectionCreateResponseParcelProtectionFeesBreakup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionCreateResponseParcelProtectionFeesBreakup();

            if (data.hasOwnProperty('basePremium')) {
                obj['basePremium'] = ApiClient.convertToType(data['basePremium'], 'Number');
            }
            if (data.hasOwnProperty('technologyFee')) {
                obj['technologyFee'] = ApiClient.convertToType(data['technologyFee'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} basePremium
 */
ParcelProtectionCreateResponseParcelProtectionFeesBreakup.prototype['basePremium'] = undefined;

/**
 * @member {Number} technologyFee
 */
ParcelProtectionCreateResponseParcelProtectionFeesBreakup.prototype['technologyFee'] = undefined;






export default ParcelProtectionCreateResponseParcelProtectionFeesBreakup;

