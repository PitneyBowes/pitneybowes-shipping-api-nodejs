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
 * The SchedulePickupTotalWeight model module.
 * @module PB.ShippingAPI/model/SchedulePickupTotalWeight
 * @version 1.0.0
 */
class SchedulePickupTotalWeight {
    /**
     * Constructs a new <code>SchedulePickupTotalWeight</code>.
     * @alias module:PB.ShippingAPI/model/SchedulePickupTotalWeight
     * @param unitOfMeasurement {String} 
     * @param weight {String} 
     */
    constructor(unitOfMeasurement, weight) { 
        
        SchedulePickupTotalWeight.initialize(this, unitOfMeasurement, weight);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, unitOfMeasurement, weight) { 
        obj['unitOfMeasurement'] = unitOfMeasurement;
        obj['weight'] = weight;
    }

    /**
     * Constructs a <code>SchedulePickupTotalWeight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/SchedulePickupTotalWeight} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/SchedulePickupTotalWeight} The populated <code>SchedulePickupTotalWeight</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchedulePickupTotalWeight();

            if (data.hasOwnProperty('unitOfMeasurement')) {
                obj['unitOfMeasurement'] = ApiClient.convertToType(data['unitOfMeasurement'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} unitOfMeasurement
 */
SchedulePickupTotalWeight.prototype['unitOfMeasurement'] = undefined;

/**
 * @member {String} weight
 */
SchedulePickupTotalWeight.prototype['weight'] = undefined;






export default SchedulePickupTotalWeight;

