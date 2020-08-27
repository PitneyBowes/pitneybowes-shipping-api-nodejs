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
import ParcelProtectionPolicyResponseShipperInfoAddress from './ParcelProtectionPolicyResponseShipperInfoAddress';

/**
 * The ParcelProtectionPolicyResponseShipperInfo model module.
 * @module PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo
 * @version 1.0.0
 */
class ParcelProtectionPolicyResponseShipperInfo {
    /**
     * Constructs a new <code>ParcelProtectionPolicyResponseShipperInfo</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo
     */
    constructor() { 
        
        ParcelProtectionPolicyResponseShipperInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionPolicyResponseShipperInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo} The populated <code>ParcelProtectionPolicyResponseShipperInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionPolicyResponseShipperInfo();

            if (data.hasOwnProperty('shipperID')) {
                obj['shipperID'] = ApiClient.convertToType(data['shipperID'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber1')) {
                obj['phoneNumber1'] = ApiClient.convertToType(data['phoneNumber1'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber2')) {
                obj['phoneNumber2'] = ApiClient.convertToType(data['phoneNumber2'], 'String');
            }
            if (data.hasOwnProperty('faxNumber')) {
                obj['faxNumber'] = ApiClient.convertToType(data['faxNumber'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ParcelProtectionPolicyResponseShipperInfoAddress.constructFromObject(data['address']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} shipperID
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['shipperID'] = undefined;

/**
 * @member {String} firstName
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['firstName'] = undefined;

/**
 * @member {String} middleName
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['middleName'] = undefined;

/**
 * @member {String} lastName
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['lastName'] = undefined;

/**
 * @member {String} company
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['company'] = undefined;

/**
 * @member {String} email
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['email'] = undefined;

/**
 * @member {String} phoneNumber1
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['phoneNumber1'] = undefined;

/**
 * @member {String} phoneNumber2
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['phoneNumber2'] = undefined;

/**
 * @member {String} faxNumber
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['faxNumber'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfoAddress} address
 */
ParcelProtectionPolicyResponseShipperInfo.prototype['address'] = undefined;






export default ParcelProtectionPolicyResponseShipperInfo;
