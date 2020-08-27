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
 * The ParcelProtectionPolicyResponsePolicyDetails model module.
 * @module PB.ShippingAPI/model/ParcelProtectionPolicyResponsePolicyDetails
 * @version 1.0.0
 */
class ParcelProtectionPolicyResponsePolicyDetails {
    /**
     * Constructs a new <code>ParcelProtectionPolicyResponsePolicyDetails</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionPolicyResponsePolicyDetails
     */
    constructor() { 
        
        ParcelProtectionPolicyResponsePolicyDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionPolicyResponsePolicyDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponsePolicyDetails} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponsePolicyDetails} The populated <code>ParcelProtectionPolicyResponsePolicyDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionPolicyResponsePolicyDetails();

            if (data.hasOwnProperty('policyId')) {
                obj['policyId'] = ApiClient.convertToType(data['policyId'], 'String');
            }
            if (data.hasOwnProperty('policyDate')) {
                obj['policyDate'] = ApiClient.convertToType(data['policyDate'], 'String');
            }
            if (data.hasOwnProperty('policyStatus')) {
                obj['policyStatus'] = ApiClient.convertToType(data['policyStatus'], 'String');
            }
            if (data.hasOwnProperty('claimStatus')) {
                obj['claimStatus'] = ApiClient.convertToType(data['claimStatus'], 'String');
            }
            if (data.hasOwnProperty('claimStatusUpdateDate')) {
                obj['claimStatusUpdateDate'] = ApiClient.convertToType(data['claimStatusUpdateDate'], 'String');
            }
            if (data.hasOwnProperty('valueOfGoods')) {
                obj['valueOfGoods'] = ApiClient.convertToType(data['valueOfGoods'], 'Number');
            }
            if (data.hasOwnProperty('insuranceValue')) {
                obj['insuranceValue'] = ApiClient.convertToType(data['insuranceValue'], 'Number');
            }
            if (data.hasOwnProperty('premiumValue')) {
                obj['premiumValue'] = ApiClient.convertToType(data['premiumValue'], 'Number');
            }
            if (data.hasOwnProperty('basePremium')) {
                obj['basePremium'] = ApiClient.convertToType(data['basePremium'], 'Number');
            }
            if (data.hasOwnProperty('technologyFee')) {
                obj['technologyFee'] = ApiClient.convertToType(data['technologyFee'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('mailClass')) {
                obj['mailClass'] = ApiClient.convertToType(data['mailClass'], 'String');
            }
            if (data.hasOwnProperty('mailClassOption')) {
                obj['mailClassOption'] = ApiClient.convertToType(data['mailClassOption'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} policyId
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['policyId'] = undefined;

/**
 * @member {String} policyDate
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['policyDate'] = undefined;

/**
 * @member {String} policyStatus
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['policyStatus'] = undefined;

/**
 * @member {String} claimStatus
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['claimStatus'] = undefined;

/**
 * @member {String} claimStatusUpdateDate
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['claimStatusUpdateDate'] = undefined;

/**
 * @member {Number} valueOfGoods
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['valueOfGoods'] = undefined;

/**
 * @member {Number} insuranceValue
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['insuranceValue'] = undefined;

/**
 * @member {Number} premiumValue
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['premiumValue'] = undefined;

/**
 * @member {Number} basePremium
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['basePremium'] = undefined;

/**
 * @member {Number} technologyFee
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['technologyFee'] = undefined;

/**
 * @member {String} currencyCode
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['currencyCode'] = undefined;

/**
 * @member {String} mailClass
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['mailClass'] = undefined;

/**
 * @member {String} mailClassOption
 */
ParcelProtectionPolicyResponsePolicyDetails.prototype['mailClassOption'] = undefined;






export default ParcelProtectionPolicyResponsePolicyDetails;

