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
 * The DocTabItem model module.
 * @module PB.ShippingAPI/model/DocTabItem
 * @version 1.0.0
 */
class DocTabItem {
    /**
     * Constructs a new <code>DocTabItem</code>.
     * @alias module:PB.ShippingAPI/model/DocTabItem
     */
    constructor() { 
        
        DocTabItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocTabItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/DocTabItem} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/DocTabItem} The populated <code>DocTabItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocTabItem();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
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
 * @member {String} displayName
 */
DocTabItem.prototype['displayName'] = undefined;

/**
 * @member {String} name
 */
DocTabItem.prototype['name'] = undefined;

/**
 * @member {String} value
 */
DocTabItem.prototype['value'] = undefined;






export default DocTabItem;

