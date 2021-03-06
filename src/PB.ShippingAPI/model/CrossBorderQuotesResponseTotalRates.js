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
import CrossBorderQuotesResponseUnitRatesDeliveryCommitment from './CrossBorderQuotesResponseUnitRatesDeliveryCommitment';

/**
 * The CrossBorderQuotesResponseTotalRates model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesResponseTotalRates
 * @version 1.0.0
 */
class CrossBorderQuotesResponseTotalRates {
    /**
     * Constructs a new <code>CrossBorderQuotesResponseTotalRates</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesResponseTotalRates
     */
    constructor() { 
        
        CrossBorderQuotesResponseTotalRates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CrossBorderQuotesResponseTotalRates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesResponseTotalRates} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesResponseTotalRates} The populated <code>CrossBorderQuotesResponseTotalRates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesResponseTotalRates();

            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('baseCharge')) {
                obj['baseCharge'] = ApiClient.convertToType(data['baseCharge'], 'Number');
            }
            if (data.hasOwnProperty('deliveryCommitment')) {
                obj['deliveryCommitment'] = CrossBorderQuotesResponseUnitRatesDeliveryCommitment.constructFromObject(data['deliveryCommitment']);
            }
            if (data.hasOwnProperty('totalCarrierCharge')) {
                obj['totalCarrierCharge'] = ApiClient.convertToType(data['totalCarrierCharge'], 'Number');
            }
            if (data.hasOwnProperty('totalDutyAmount')) {
                obj['totalDutyAmount'] = ApiClient.convertToType(data['totalDutyAmount'], 'Number');
            }
            if (data.hasOwnProperty('totalTaxAmount')) {
                obj['totalTaxAmount'] = ApiClient.convertToType(data['totalTaxAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} serviceId
 */
CrossBorderQuotesResponseTotalRates.prototype['serviceId'] = undefined;

/**
 * @member {Number} baseCharge
 */
CrossBorderQuotesResponseTotalRates.prototype['baseCharge'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CrossBorderQuotesResponseUnitRatesDeliveryCommitment} deliveryCommitment
 */
CrossBorderQuotesResponseTotalRates.prototype['deliveryCommitment'] = undefined;

/**
 * @member {Number} totalCarrierCharge
 */
CrossBorderQuotesResponseTotalRates.prototype['totalCarrierCharge'] = undefined;

/**
 * @member {Number} totalDutyAmount
 */
CrossBorderQuotesResponseTotalRates.prototype['totalDutyAmount'] = undefined;

/**
 * @member {Number} totalTaxAmount
 */
CrossBorderQuotesResponseTotalRates.prototype['totalTaxAmount'] = undefined;






export default CrossBorderQuotesResponseTotalRates;

