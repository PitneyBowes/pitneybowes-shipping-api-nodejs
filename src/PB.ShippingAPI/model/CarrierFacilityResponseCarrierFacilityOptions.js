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
 * The CarrierFacilityResponseCarrierFacilityOptions model module.
 * @module PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions
 * @version 1.0.0
 */
class CarrierFacilityResponseCarrierFacilityOptions {
    /**
     * Constructs a new <code>CarrierFacilityResponseCarrierFacilityOptions</code>.
     * @alias module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions
     */
    constructor() { 
        
        CarrierFacilityResponseCarrierFacilityOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CarrierFacilityResponseCarrierFacilityOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions} The populated <code>CarrierFacilityResponseCarrierFacilityOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarrierFacilityResponseCarrierFacilityOptions();

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
CarrierFacilityResponseCarrierFacilityOptions.prototype['name'] = undefined;

/**
 * @member {String} value
 */
CarrierFacilityResponseCarrierFacilityOptions.prototype['value'] = undefined;






export default CarrierFacilityResponseCarrierFacilityOptions;
