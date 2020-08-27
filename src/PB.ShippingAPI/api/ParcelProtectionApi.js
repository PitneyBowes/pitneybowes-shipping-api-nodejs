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


import ApiClient from "../ApiClient";
import Errors from '../model/Errors';
import ParcelProtectionCreateRequest from '../model/ParcelProtectionCreateRequest';
import ParcelProtectionCreateResponse from '../model/ParcelProtectionCreateResponse';
import ParcelProtectionPolicyResponse from '../model/ParcelProtectionPolicyResponse';
import ParcelProtectionQuoteRequest from '../model/ParcelProtectionQuoteRequest';
import ParcelProtectionQuoteResponse from '../model/ParcelProtectionQuoteResponse';
import VoidParcelProtectionRequest from '../model/VoidParcelProtectionRequest';
import VoidParcelProtectionResponse from '../model/VoidParcelProtectionResponse';

/**
* ParcelProtection service.
* @module PB.ShippingAPI/api/ParcelProtectionApi
* @version 1.0.0
*/
export default class ParcelProtectionApi {

    /**
    * Constructs a new ParcelProtectionApi. 
    * @alias module:PB.ShippingAPI/api/ParcelProtectionApi
    * @class
    * @param {module:PB.ShippingAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:PB.ShippingAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelParcelProtection operation.
     * @callback module:PB.ShippingAPI/api/ParcelProtectionApi~cancelParcelProtectionCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/VoidParcelProtectionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parcel Protection Coverage
     * This API lets merchants request Pitney Bowes [Parcel Protection](https://shipping.pitneybowes.com/faqs/parcel-protection.html) coverage for shipments. Merchants can request coverage for shipments created with the Shipping APIs as well as for shipments created with other platforms.
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {String} parcelProtectionReferenceId Required. The identifier for the PB Parcel Protection policy that is being voided.
     * @param {module:PB.ShippingAPI/model/VoidParcelProtectionRequest} voidParcelProtectionRequest manifest
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ParcelProtectionApi~cancelParcelProtectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/VoidParcelProtectionResponse}
     */
    cancelParcelProtection(xPBTransactionId, parcelProtectionReferenceId, voidParcelProtectionRequest, opts, callback) {
      opts = opts || {};
      let postBody = voidParcelProtectionRequest;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling cancelParcelProtection");
      }
      // verify the required parameter 'parcelProtectionReferenceId' is set
      if (parcelProtectionReferenceId === undefined || parcelProtectionReferenceId === null) {
        throw new Error("Missing the required parameter 'parcelProtectionReferenceId' when calling cancelParcelProtection");
      }
      // verify the required parameter 'voidParcelProtectionRequest' is set
      if (voidParcelProtectionRequest === undefined || voidParcelProtectionRequest === null) {
        throw new Error("Missing the required parameter 'voidParcelProtectionRequest' when calling cancelParcelProtection");
      }

      let pathParams = {
      };
      let queryParams = {
        'parcelProtectionReferenceId': parcelProtectionReferenceId
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure'],
        'X-PB-TransactionId': xPBTransactionId
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VoidParcelProtectionResponse;
      return this.apiClient.callApi(
        '/v1/parcel-protection/void', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelProtectionCoverage operation.
     * @callback module:PB.ShippingAPI/api/ParcelProtectionApi~getParcelProtectionCoverageCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parcel Protection Coverage
     * This API lets merchants request Pitney Bowes [Parcel Protection](https://shipping.pitneybowes.com/faqs/parcel-protection.html) coverage for shipments. Merchants can request coverage for shipments created with the Shipping APIs as well as for shipments created with other platforms.
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionCreateRequest} parcelProtectionCreateRequest manifest
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ParcelProtectionApi~getParcelProtectionCoverageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/ParcelProtectionCreateResponse}
     */
    getParcelProtectionCoverage(xPBTransactionId, parcelProtectionCreateRequest, opts, callback) {
      opts = opts || {};
      let postBody = parcelProtectionCreateRequest;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling getParcelProtectionCoverage");
      }
      // verify the required parameter 'parcelProtectionCreateRequest' is set
      if (parcelProtectionCreateRequest === undefined || parcelProtectionCreateRequest === null) {
        throw new Error("Missing the required parameter 'parcelProtectionCreateRequest' when calling getParcelProtectionCoverage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure'],
        'X-PB-TransactionId': xPBTransactionId
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ParcelProtectionCreateResponse;
      return this.apiClient.callApi(
        '/v1/parcel-protection/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelProtectionQuote operation.
     * @callback module:PB.ShippingAPI/api/ParcelProtectionApi~getParcelProtectionQuoteCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionQuoteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parcel Protection Quote
     * This API provides a quote for covering a shipment through Pitney Bowes [Parcel Protection](https://www.pitneybowes.com/us/ecommerce-delivery-services/parcel-protection.html).
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequest} parcelProtectionQuoteRequest manifest
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ParcelProtectionApi~getParcelProtectionQuoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/ParcelProtectionQuoteResponse}
     */
    getParcelProtectionQuote(xPBTransactionId, parcelProtectionQuoteRequest, opts, callback) {
      opts = opts || {};
      let postBody = parcelProtectionQuoteRequest;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling getParcelProtectionQuote");
      }
      // verify the required parameter 'parcelProtectionQuoteRequest' is set
      if (parcelProtectionQuoteRequest === undefined || parcelProtectionQuoteRequest === null) {
        throw new Error("Missing the required parameter 'parcelProtectionQuoteRequest' when calling getParcelProtectionQuote");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure'],
        'X-PB-TransactionId': xPBTransactionId
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ParcelProtectionQuoteResponse;
      return this.apiClient.callApi(
        '/v1/parcel-protection/quote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getParcelProtectionReports operation.
     * @callback module:PB.ShippingAPI/api/ParcelProtectionApi~getParcelProtectionReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parcel Protection Reports
     * This operation retrieves the policy status and other information on the Parcel Protection policies you have purchased for your shipments. Further Details https://shipping.pitneybowes.com/api/get-parcel-protection-reports.html
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {String} developerId Required. Your Pitney Bowes developer ID.
     * @param {String} policyCreatedFromDate The beginning of the date range. Specify this value in UTC using the ISO 8601 standard. You must include both date and time, and you must end the time with Z to indicate a zero offset.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {String} opts.policyCreatedToDate The end of the date range. Specify this value in UTC using the ISO 8601 standard. You must include both date and time, and you must end the time with Z to indicate a zero offset.
     * @param {String} opts.policyReferenceId The unique identifier for the PB Parcel Protection policy.].
     * @param {String} opts.parcelTrackingNumber The parcel tracking number of the shipment that the policy applies to.
     * @param {String} opts.merchantId The merchant's Shipper ID. This is the value of the postalReportingNumber element in the Merchant Object.
     * @param {String} opts.policyStatus Whether the policy is active or voided.
     * @param {String} opts.size The number of transactions to return per page in the result set.
     * @param {String} opts.page The index number of the page to return. Page index numbering starts at 0. Specifying page=0 returns the first page of the result set.
     * @param {String} opts.sort Defines a property to sort on and the sort order. Sort order can be ascending (asc) or descending (desc).
     * @param {module:PB.ShippingAPI/api/ParcelProtectionApi~getParcelProtectionReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse}
     */
    getParcelProtectionReports(xPBTransactionId, developerId, policyCreatedFromDate, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling getParcelProtectionReports");
      }
      // verify the required parameter 'developerId' is set
      if (developerId === undefined || developerId === null) {
        throw new Error("Missing the required parameter 'developerId' when calling getParcelProtectionReports");
      }
      // verify the required parameter 'policyCreatedFromDate' is set
      if (policyCreatedFromDate === undefined || policyCreatedFromDate === null) {
        throw new Error("Missing the required parameter 'policyCreatedFromDate' when calling getParcelProtectionReports");
      }

      let pathParams = {
        'developerId': developerId
      };
      let queryParams = {
        'policyCreatedFromDate': policyCreatedFromDate,
        'policyCreatedToDate': opts['policyCreatedToDate'],
        'policyReferenceId': opts['policyReferenceId'],
        'parcelTrackingNumber': opts['parcelTrackingNumber'],
        'merchantId': opts['merchantId'],
        'policyStatus': opts['policyStatus'],
        'size': opts['size'],
        'page': opts['page'],
        'sort': opts['sort']
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure'],
        'X-PB-TransactionId': xPBTransactionId
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ParcelProtectionPolicyResponse;
      return this.apiClient.callApi(
        '/v1/parcel-protection/{developerId}/policies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
