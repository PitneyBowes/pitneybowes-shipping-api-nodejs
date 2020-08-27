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
 * The RadioActiveParcelDimension model module.
 * @module PB.ShippingAPI/model/RadioActiveParcelDimension
 * @version 1.0.0
 */
class RadioActiveParcelDimension {
    /**
     * Constructs a new <code>RadioActiveParcelDimension</code>.
     * @alias module:PB.ShippingAPI/model/RadioActiveParcelDimension
     */
    constructor() { 
        
        RadioActiveParcelDimension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RadioActiveParcelDimension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/RadioActiveParcelDimension} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/RadioActiveParcelDimension} The populated <code>RadioActiveParcelDimension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RadioActiveParcelDimension();

            if (data.hasOwnProperty('UOM')) {
                obj['UOM'] = ApiClient.convertToType(data['UOM'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * unit of measurement
 * @member {module:PB.ShippingAPI/model/RadioActiveParcelDimension.UOMEnum} UOM
 */
RadioActiveParcelDimension.prototype['UOM'] = undefined;

/**
 * @member {Number} height
 */
RadioActiveParcelDimension.prototype['height'] = undefined;

/**
 * @member {Number} length
 */
RadioActiveParcelDimension.prototype['length'] = undefined;

/**
 * @member {Number} width
 */
RadioActiveParcelDimension.prototype['width'] = undefined;





/**
 * Allowed values for the <code>UOM</code> property.
 * @enum {String}
 * @readonly
 */
RadioActiveParcelDimension['UOMEnum'] = {

    /**
     * value: "CM"
     * @const
     */
    "CM": "CM",

    /**
     * value: "IN"
     * @const
     */
    "IN": "IN"
};



export default RadioActiveParcelDimension;

