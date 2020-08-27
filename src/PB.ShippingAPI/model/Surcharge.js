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
 * The Surcharge model module.
 * @module PB.ShippingAPI/model/Surcharge
 * @version 1.0.0
 */
class Surcharge {
    /**
     * Constructs a new <code>Surcharge</code>.
     * @alias module:PB.ShippingAPI/model/Surcharge
     */
    constructor() { 
        
        Surcharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Surcharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/Surcharge} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/Surcharge} The populated <code>Surcharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Surcharge();

            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} fee
 */
Surcharge.prototype['fee'] = undefined;

/**
 * @member {String} name
 */
Surcharge.prototype['name'] = undefined;






export default Surcharge;
