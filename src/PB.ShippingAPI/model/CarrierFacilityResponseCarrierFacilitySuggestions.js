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
import CarrierFacilityResponseCarrierFacilityOptions from './CarrierFacilityResponseCarrierFacilityOptions';
import CarrierFacilityResponseFacilityHours from './CarrierFacilityResponseFacilityHours';

/**
 * The CarrierFacilityResponseCarrierFacilitySuggestions model module.
 * @module PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilitySuggestions
 * @version 1.0.0
 */
class CarrierFacilityResponseCarrierFacilitySuggestions {
    /**
     * Constructs a new <code>CarrierFacilityResponseCarrierFacilitySuggestions</code>.
     * @alias module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilitySuggestions
     */
    constructor() { 
        
        CarrierFacilityResponseCarrierFacilitySuggestions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CarrierFacilityResponseCarrierFacilitySuggestions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilitySuggestions} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilitySuggestions} The populated <code>CarrierFacilityResponseCarrierFacilitySuggestions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarrierFacilityResponseCarrierFacilitySuggestions();

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('carrierFacilityAttributes')) {
                obj['carrierFacilityAttributes'] = ApiClient.convertToType(data['carrierFacilityAttributes'], [CarrierFacilityResponseCarrierFacilityOptions]);
            }
            if (data.hasOwnProperty('facilityHours')) {
                obj['facilityHours'] = ApiClient.convertToType(data['facilityHours'], [CarrierFacilityResponseFacilityHours]);
            }
            if (data.hasOwnProperty('facilityParking')) {
                obj['facilityParking'] = ApiClient.convertToType(data['facilityParking'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:PB.ShippingAPI/model/Address} address
 */
CarrierFacilityResponseCarrierFacilitySuggestions.prototype['address'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions>} carrierFacilityAttributes
 */
CarrierFacilityResponseCarrierFacilitySuggestions.prototype['carrierFacilityAttributes'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityHours>} facilityHours
 */
CarrierFacilityResponseCarrierFacilitySuggestions.prototype['facilityHours'] = undefined;

/**
 * @member {String} facilityParking
 */
CarrierFacilityResponseCarrierFacilitySuggestions.prototype['facilityParking'] = undefined;






export default CarrierFacilityResponseCarrierFacilitySuggestions;

