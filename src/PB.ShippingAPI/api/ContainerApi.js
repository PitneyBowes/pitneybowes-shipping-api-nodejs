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
import ContainerManifestResponse from '../model/ContainerManifestResponse';
import Manifest from '../model/Manifest';

/**
* Container service.
* @module PB.ShippingAPI/api/ContainerApi
* @version 1.0.0
*/
export default class ContainerApi {

    /**
    * Constructs a new ContainerApi. 
    * @alias module:PB.ShippingAPI/api/ContainerApi
    * @class
    * @param {module:PB.ShippingAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:PB.ShippingAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getContainerizedParcelsLabels operation.
     * @callback module:PB.ShippingAPI/api/ContainerApi~getContainerizedParcelsLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/ContainerManifestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Container Manifest Label
     * This operation prints a label for the shipment of containerized parcels destined for a Pitney Bowes warehouse facility from the client location.
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {module:PB.ShippingAPI/model/Manifest} manifest manifest
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ContainerApi~getContainerizedParcelsLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/ContainerManifestResponse}
     */
    getContainerizedParcelsLabels(xPBTransactionId, manifest, opts, callback) {
      opts = opts || {};
      let postBody = manifest;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling getContainerizedParcelsLabels");
      }
      // verify the required parameter 'manifest' is set
      if (manifest === undefined || manifest === null) {
        throw new Error("Missing the required parameter 'manifest' when calling getContainerizedParcelsLabels");
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
      let accepts = ['text/plain'];
      let returnType = ContainerManifestResponse;
      return this.apiClient.callApi(
        '/v1/container-manifest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}