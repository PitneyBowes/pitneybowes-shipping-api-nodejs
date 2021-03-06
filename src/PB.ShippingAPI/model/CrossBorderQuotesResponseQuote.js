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
import CrossBorderQuotesResponseQuoteLines from './CrossBorderQuotesResponseQuoteLines';
import CrossBorderQuotesResponseTotalRates from './CrossBorderQuotesResponseTotalRates';

/**
 * The CrossBorderQuotesResponseQuote model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesResponseQuote
 * @version 1.0.0
 */
class CrossBorderQuotesResponseQuote {
    /**
     * Constructs a new <code>CrossBorderQuotesResponseQuote</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesResponseQuote
     */
    constructor() { 
        
        CrossBorderQuotesResponseQuote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CrossBorderQuotesResponseQuote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesResponseQuote} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesResponseQuote} The populated <code>CrossBorderQuotesResponseQuote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesResponseQuote();

            if (data.hasOwnProperty('quoteCurrency')) {
                obj['quoteCurrency'] = ApiClient.convertToType(data['quoteCurrency'], 'String');
            }
            if (data.hasOwnProperty('quoteLines')) {
                obj['quoteLines'] = ApiClient.convertToType(data['quoteLines'], [CrossBorderQuotesResponseQuoteLines]);
            }
            if (data.hasOwnProperty('totalPrice')) {
                obj['totalPrice'] = ApiClient.convertToType(data['totalPrice'], 'Number');
            }
            if (data.hasOwnProperty('totalRates')) {
                obj['totalRates'] = CrossBorderQuotesResponseTotalRates.constructFromObject(data['totalRates']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} quoteCurrency
 */
CrossBorderQuotesResponseQuote.prototype['quoteCurrency'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesResponseQuoteLines>} quoteLines
 */
CrossBorderQuotesResponseQuote.prototype['quoteLines'] = undefined;

/**
 * @member {Number} totalPrice
 */
CrossBorderQuotesResponseQuote.prototype['totalPrice'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CrossBorderQuotesResponseTotalRates} totalRates
 */
CrossBorderQuotesResponseQuote.prototype['totalRates'] = undefined;






export default CrossBorderQuotesResponseQuote;

