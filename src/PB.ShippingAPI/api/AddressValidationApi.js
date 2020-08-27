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
import Address from '../model/Address';
import AddressSuggestionResponse from '../model/AddressSuggestionResponse';
import AddressVerifySuggest from '../model/AddressVerifySuggest';

/**
* AddressValidation service.
* @module PB.ShippingAPI/api/AddressValidationApi
* @version 1.0.0
*/
export default class AddressValidationApi {

    /**
    * Constructs a new AddressValidationApi. 
    * @alias module:PB.ShippingAPI/api/AddressValidationApi
    * @class
    * @param {module:PB.ShippingAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:PB.ShippingAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the verifyAddress operation.
     * @callback module:PB.ShippingAPI/api/AddressValidationApi~verifyAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/Address} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Address validation
     * Address validation verifies and cleanses postal addresses within the United States to help ensure packages are rated accurately and shipments arrive at their final destinations on time.
     * @param {module:PB.ShippingAPI/model/Address} address Address object that needs to be validated.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {Boolean} opts.minimalAddressValidation When set to true, the complete address (delivery line and last line) is validated but only the last line (city, state, and postal code) would be changed by the validation check.
     * @param {module:PB.ShippingAPI/api/AddressValidationApi~verifyAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/Address}
     */
    verifyAddress(address, opts, callback) {
      opts = opts || {};
      let postBody = address;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling verifyAddress");
      }

      let pathParams = {
      };
      let queryParams = {
        'minimalAddressValidation': opts['minimalAddressValidation']
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure']
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Address;
      return this.apiClient.callApi(
        '/v1/addresses/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyAndSuggestAddress operation.
     * @callback module:PB.ShippingAPI/api/AddressValidationApi~verifyAndSuggestAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/AddressSuggestionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Address Suggestion
     * This operation returns suggested addresses. Use this if the [Address Validation API](https://shipping.pitneybowes.com/api/post-address-verify.html) call has returned an error.
     * @param {String} returnSuggestions To return suggested addresses, set this to true.
     * @param {module:PB.ShippingAPI/model/AddressVerifySuggest} addressVerifySuggest Address object that needs to be validated.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/AddressValidationApi~verifyAndSuggestAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/AddressSuggestionResponse}
     */
    verifyAndSuggestAddress(returnSuggestions, addressVerifySuggest, opts, callback) {
      opts = opts || {};
      let postBody = addressVerifySuggest;
      // verify the required parameter 'returnSuggestions' is set
      if (returnSuggestions === undefined || returnSuggestions === null) {
        throw new Error("Missing the required parameter 'returnSuggestions' when calling verifyAndSuggestAddress");
      }
      // verify the required parameter 'addressVerifySuggest' is set
      if (addressVerifySuggest === undefined || addressVerifySuggest === null) {
        throw new Error("Missing the required parameter 'addressVerifySuggest' when calling verifyAndSuggestAddress");
      }

      let pathParams = {
      };
      let queryParams = {
        'returnSuggestions': returnSuggestions
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure']
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddressSuggestionResponse;
      return this.apiClient.callApi(
        '/v1/addresses/verify-suggest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
