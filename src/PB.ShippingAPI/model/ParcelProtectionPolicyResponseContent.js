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
import ParcelProtectionPolicyResponsePolicyDetails from './ParcelProtectionPolicyResponsePolicyDetails';
import ParcelProtectionPolicyResponseShipmentDetails from './ParcelProtectionPolicyResponseShipmentDetails';
import ParcelProtectionPolicyResponseShipperInfo from './ParcelProtectionPolicyResponseShipperInfo';

/**
 * The ParcelProtectionPolicyResponseContent model module.
 * @module PB.ShippingAPI/model/ParcelProtectionPolicyResponseContent
 * @version 1.0.0
 */
class ParcelProtectionPolicyResponseContent {
    /**
     * Constructs a new <code>ParcelProtectionPolicyResponseContent</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseContent
     */
    constructor() { 
        
        ParcelProtectionPolicyResponseContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionPolicyResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseContent} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseContent} The populated <code>ParcelProtectionPolicyResponseContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionPolicyResponseContent();

            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('developerId')) {
                obj['developerId'] = ApiClient.convertToType(data['developerId'], 'String');
            }
            if (data.hasOwnProperty('subscriptionAccNo')) {
                obj['subscriptionAccNo'] = ApiClient.convertToType(data['subscriptionAccNo'], 'String');
            }
            if (data.hasOwnProperty('clientTransactionId')) {
                obj['clientTransactionId'] = ApiClient.convertToType(data['clientTransactionId'], 'String');
            }
            if (data.hasOwnProperty('policyDetails')) {
                obj['policyDetails'] = ParcelProtectionPolicyResponsePolicyDetails.constructFromObject(data['policyDetails']);
            }
            if (data.hasOwnProperty('shipmentDetails')) {
                obj['shipmentDetails'] = ParcelProtectionPolicyResponseShipmentDetails.constructFromObject(data['shipmentDetails']);
            }
            if (data.hasOwnProperty('shipperInfo')) {
                obj['shipperInfo'] = ParcelProtectionPolicyResponseShipperInfo.constructFromObject(data['shipperInfo']);
            }
            if (data.hasOwnProperty('consigneeInfo')) {
                obj['consigneeInfo'] = ParcelProtectionPolicyResponseShipperInfo.constructFromObject(data['consigneeInfo']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} transactionId
 */
ParcelProtectionPolicyResponseContent.prototype['transactionId'] = undefined;

/**
 * @member {String} developerId
 */
ParcelProtectionPolicyResponseContent.prototype['developerId'] = undefined;

/**
 * @member {String} subscriptionAccNo
 */
ParcelProtectionPolicyResponseContent.prototype['subscriptionAccNo'] = undefined;

/**
 * @member {String} clientTransactionId
 */
ParcelProtectionPolicyResponseContent.prototype['clientTransactionId'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponsePolicyDetails} policyDetails
 */
ParcelProtectionPolicyResponseContent.prototype['policyDetails'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipmentDetails} shipmentDetails
 */
ParcelProtectionPolicyResponseContent.prototype['shipmentDetails'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo} shipperInfo
 */
ParcelProtectionPolicyResponseContent.prototype['shipperInfo'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo} consigneeInfo
 */
ParcelProtectionPolicyResponseContent.prototype['consigneeInfo'] = undefined;

/**
 * @member {String} createdAt
 */
ParcelProtectionPolicyResponseContent.prototype['createdAt'] = undefined;

/**
 * @member {String} updatedAt
 */
ParcelProtectionPolicyResponseContent.prototype['updatedAt'] = undefined;






export default ParcelProtectionPolicyResponseContent;

