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
import CrossBorderQuotesErrorsErrorsErrors from './CrossBorderQuotesErrorsErrorsErrors';

/**
 * The CrossBorderQuotesErrorsErrors model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesErrorsErrors
 * @version 1.0.0
 */
class CrossBorderQuotesErrorsErrors {
    /**
     * Constructs a new <code>CrossBorderQuotesErrorsErrors</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrors
     */
    constructor() { 
        
        CrossBorderQuotesErrorsErrors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CrossBorderQuotesErrorsErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrors} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrors} The populated <code>CrossBorderQuotesErrorsErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesErrorsErrors();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [CrossBorderQuotesErrorsErrorsErrors]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrorsErrors>} errors
 */
CrossBorderQuotesErrorsErrors.prototype['errors'] = undefined;






export default CrossBorderQuotesErrorsErrors;

