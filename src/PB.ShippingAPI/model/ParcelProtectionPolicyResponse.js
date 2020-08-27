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
import ParcelProtectionPolicyResponseContent from './ParcelProtectionPolicyResponseContent';
import ParcelProtectionPolicyResponseSort from './ParcelProtectionPolicyResponseSort';

/**
 * The ParcelProtectionPolicyResponse model module.
 * @module PB.ShippingAPI/model/ParcelProtectionPolicyResponse
 * @version 1.0.0
 */
class ParcelProtectionPolicyResponse {
    /**
     * Constructs a new <code>ParcelProtectionPolicyResponse</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse
     */
    constructor() { 
        
        ParcelProtectionPolicyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionPolicyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse} The populated <code>ParcelProtectionPolicyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionPolicyResponse();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [ParcelProtectionPolicyResponseContent]);
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('numberOfElements')) {
                obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], [ParcelProtectionPolicyResponseSort]);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseContent>} content
 */
ParcelProtectionPolicyResponse.prototype['content'] = undefined;

/**
 * @member {Boolean} last
 */
ParcelProtectionPolicyResponse.prototype['last'] = undefined;

/**
 * @member {Number} totalElements
 */
ParcelProtectionPolicyResponse.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
ParcelProtectionPolicyResponse.prototype['totalPages'] = undefined;

/**
 * @member {Boolean} first
 */
ParcelProtectionPolicyResponse.prototype['first'] = undefined;

/**
 * @member {Number} numberOfElements
 */
ParcelProtectionPolicyResponse.prototype['numberOfElements'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseSort>} sort
 */
ParcelProtectionPolicyResponse.prototype['sort'] = undefined;

/**
 * @member {Number} size
 */
ParcelProtectionPolicyResponse.prototype['size'] = undefined;

/**
 * @member {Number} number
 */
ParcelProtectionPolicyResponse.prototype['number'] = undefined;






export default ParcelProtectionPolicyResponse;
