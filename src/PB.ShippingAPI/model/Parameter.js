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
 * The Parameter model module.
 * @module PB.ShippingAPI/model/Parameter
 * @version 1.0.0
 */
class Parameter {
    /**
     * Constructs a new <code>Parameter</code>.
     * @alias module:PB.ShippingAPI/model/Parameter
     * @param name {String} 
     * @param value {String} can be empty/blank, but not null
     */
    constructor(name, value) { 
        
        Parameter.initialize(this, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value) { 
        obj['name'] = name;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Parameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/Parameter} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/Parameter} The populated <code>Parameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Parameter();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Parameter.prototype['name'] = undefined;

/**
 * can be empty/blank, but not null
 * @member {String} value
 */
Parameter.prototype['value'] = undefined;






export default Parameter;

