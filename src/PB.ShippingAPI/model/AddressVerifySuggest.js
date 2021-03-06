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
import Address from './Address';

/**
 * The AddressVerifySuggest model module.
 * @module PB.ShippingAPI/model/AddressVerifySuggest
 * @version 1.0.0
 */
class AddressVerifySuggest {
    /**
     * Constructs a new <code>AddressVerifySuggest</code>.
     * @alias module:PB.ShippingAPI/model/AddressVerifySuggest
     */
    constructor() { 
        
        AddressVerifySuggest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressVerifySuggest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/AddressVerifySuggest} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/AddressVerifySuggest} The populated <code>AddressVerifySuggest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressVerifySuggest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:PB.ShippingAPI/model/Address} address
 */
AddressVerifySuggest.prototype['address'] = undefined;






export default AddressVerifySuggest;

