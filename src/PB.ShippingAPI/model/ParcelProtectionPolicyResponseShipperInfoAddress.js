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
 * The ParcelProtectionPolicyResponseShipperInfoAddress model module.
 * @module PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfoAddress
 * @version 1.0.0
 */
class ParcelProtectionPolicyResponseShipperInfoAddress {
    /**
     * Constructs a new <code>ParcelProtectionPolicyResponseShipperInfoAddress</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfoAddress
     */
    constructor() { 
        
        ParcelProtectionPolicyResponseShipperInfoAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionPolicyResponseShipperInfoAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfoAddress} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfoAddress} The populated <code>ParcelProtectionPolicyResponseShipperInfoAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionPolicyResponseShipperInfoAddress();

            if (data.hasOwnProperty('street1')) {
                obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
            }
            if (data.hasOwnProperty('street2')) {
                obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
            }
            if (data.hasOwnProperty('street3')) {
                obj['street3'] = ApiClient.convertToType(data['street3'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} street1
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['street1'] = undefined;

/**
 * @member {String} street2
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['street2'] = undefined;

/**
 * @member {String} street3
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['street3'] = undefined;

/**
 * @member {String} city
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['city'] = undefined;

/**
 * @member {String} region
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['region'] = undefined;

/**
 * @member {String} country
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['country'] = undefined;

/**
 * @member {String} postalCode
 */
ParcelProtectionPolicyResponseShipperInfoAddress.prototype['postalCode'] = undefined;






export default ParcelProtectionPolicyResponseShipperInfoAddress;

