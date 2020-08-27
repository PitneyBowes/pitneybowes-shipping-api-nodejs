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
import CarrierFacilityResponseFacilityTimings from './CarrierFacilityResponseFacilityTimings';

/**
 * The CarrierFacilityResponseFacilityHours model module.
 * @module PB.ShippingAPI/model/CarrierFacilityResponseFacilityHours
 * @version 1.0.0
 */
class CarrierFacilityResponseFacilityHours {
    /**
     * Constructs a new <code>CarrierFacilityResponseFacilityHours</code>.
     * @alias module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityHours
     */
    constructor() { 
        
        CarrierFacilityResponseFacilityHours.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CarrierFacilityResponseFacilityHours</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityHours} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityHours} The populated <code>CarrierFacilityResponseFacilityHours</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarrierFacilityResponseFacilityHours();

            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'String');
            }
            if (data.hasOwnProperty('facilityTimings')) {
                obj['facilityTimings'] = ApiClient.convertToType(data['facilityTimings'], [CarrierFacilityResponseFacilityTimings]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} day
 */
CarrierFacilityResponseFacilityHours.prototype['day'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityTimings>} facilityTimings
 */
CarrierFacilityResponseFacilityHours.prototype['facilityTimings'] = undefined;






export default CarrierFacilityResponseFacilityHours;

