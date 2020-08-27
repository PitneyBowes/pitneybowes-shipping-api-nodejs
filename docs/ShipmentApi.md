# ShippingApi.ShipmentApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipment**](ShipmentApi.md#cancelShipment) | **DELETE** /v1/shipments/{shipmentId} | cancelShipment
[**createShipmentLabel**](ShipmentApi.md#createShipmentLabel) | **POST** /v1/shipments | This operation creates a shipment and purchases a shipment label.
[**reprintShipment**](ShipmentApi.md#reprintShipment) | **GET** /v1/shipments/{shipmentId} | reprintShipment
[**retryShipment**](ShipmentApi.md#retryShipment) | **GET** /v1/shipments | retryShipment



## cancelShipment

> CancelShipment cancelShipment(xPBTransactionId, shipmentId, opts)

cancelShipment

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ShipmentApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | Required. A unique identifier for the transaction, up to 25 characters.
let shipmentId = "shipmentId_example"; // String | shipmentId
let opts = {
  'xPBUnifiedErrorStructure': "'true'", // String | Recommended. Set this to true to use the standard error object if an error occurs.
  'xPBShipperCarrierAccountId': "xPBShipperCarrierAccountId_example", // String | UPS Only. The unique identifier returned in the shipperCarrierAccountId field by the [Register an Existing Carrier Account API.(https://shipping.pitneybowes.com/api/post-carrier-accounts-register.html)
  'cancelInitiator': SHIPPER, // String | Indicates that this refund request is initiated by the shipper. Set this to: SHIPPER
  'carrier': USPS // Carrier | Conditional. The carrier. This is required if the carrier is not USPS
};
apiInstance.cancelShipment(xPBTransactionId, shipmentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBTransactionId** | **String**| Required. A unique identifier for the transaction, up to 25 characters. | 
 **shipmentId** | **String**| shipmentId | 
 **xPBUnifiedErrorStructure** | **String**| Recommended. Set this to true to use the standard error object if an error occurs. | [optional] [default to &#39;true&#39;]
 **xPBShipperCarrierAccountId** | **String**| UPS Only. The unique identifier returned in the shipperCarrierAccountId field by the [Register an Existing Carrier Account API.(https://shipping.pitneybowes.com/api/post-carrier-accounts-register.html) | [optional] 
 **cancelInitiator** | **String**| Indicates that this refund request is initiated by the shipper. Set this to: SHIPPER | [optional] 
 **carrier** | [**Carrier**](.md)| Conditional. The carrier. This is required if the carrier is not USPS | [optional] 

### Return type

[**CancelShipment**](CancelShipment.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createShipmentLabel

> Shipment createShipmentLabel(xPBTransactionId, shipment, opts)

This operation creates a shipment and purchases a shipment label.

The API returns the label as either a Base64 string or a link to a PDF. For more information visit [Create Shipment Documents](https://shipping.pitneybowes.com/api/post-shipments.html). Following are samples of different carriers -  * [Create a USPS (U.S. Postal Service) Label](https://shipping.pitneybowes.com/api/post-shipments-usps.html)  * [Create a USPS PMOD Label](https://shipping.pitneybowes.com/api/post-shipments-pmod.html) * [Create a USPS Scan-Based Return Label](https://shipping.pitneybowes.com/api/post-shipments-returns.html) * [Create a Pure Post Return Label](https://shipping.pitneybowes.com/api/post-shipments-pure-post-return.html) * [Create a Newgistics Label](https://shipping.pitneybowes.com/api/post-shipments-newgistics.html) * [Create a PB Presort Label](https://shipping.pitneybowes.com/api/post-shipments-presort.html) * [Create a PB Cross-Border Shipment](https://shipping.pitneybowes.com/api/post-shipments-cbds.html) * [Create a UPS (United Parcel Service) Label](https://shipping.pitneybowes.com/api/post-shipments-ups.html)

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ShipmentApi();
let xPBTransactionId = uniquevalue; // String | Required. A unique identifier for the transaction, up to 25 characters.
let shipment = {"fromAddress":{"company":"Pitney Bowes Inc.","name":"Paul Wright","phone":"203-555-1430","email":"john.publica@pb.com","residential":false,"addressLines":["27 Waterview Drive"],"cityTown":"Shelton","stateProvince":"CT","postalCode":"06484","countryCode":"US"},"toAddress":{"company":"ABC Company","name":"Rufous Sirius Canid","phone":"323 555-1212","email":"rs.canid@gmail.com","residential":true,"addressLines":["631 S Main St"],"cityTown":"Greenville","stateProvince":"SC","postalCode":"29601","countryCode":"US"},"parcel":{"weight":{"unitOfMeasurement":"OZ","weight":38},"dimension":{"unitOfMeasurement":"IN","length":6,"width":6,"height":6}},"rates":[{"carrier":"USPS","serviceId":"PM","parcelType":"PKG","specialServices":[{"specialServiceId":"DelCon","inputParameters":[{"name":"INPUT_VALUE","value":"0"}]}],"inductionPostalCode":"06484"}],"documents":[{"type":"SHIPPING_LABEL","contentType":"URL","size":"DOC_4X6","fileFormat":"PDF","printDialogOption":"NO_PRINT_DIALOG"}],"shipmentOptions":[{"name":"SHIPPER_ID","value":"3000090171"},{"name":"ADD_TO_MANIFEST","value":"true"},{"name":"HIDE_TOTAL_CARRIER_CHARGE","value":"true"},{"name":"PRINT_CUSTOM_MESSAGE_1","value":"custom message for label"},{"name":"SHIPPING_LABEL_RECEIPT","value":"NO_OPTIONS"}]}; // Shipment | request
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'xPBIntegratorCarrierId': "xPBIntegratorCarrierId_example", // String | USPS Only. Negotiated services rate, if applicable.
  'xPBShipperRatePlan': "xPBShipperRatePlan_example", // String | USPS Only. Shipper rate plan, if applicable. For more information, see [this FAQ](https://shipping.pitneybowes.com/faqs/rates.html#rate-plans-faq).
  'xPBShipmentGroupId': "xPBShipmentGroupId_example", // String |  **[Required parameter for PBPresort service](https://shipping.pitneybowes.com/api/post-shipments-presort.html)**.The job number that represents the agreement between the merchant and PB Presort. This was provided by Pitney Bowes during [merchant onboarding for PB Presort](https://shipping.pitneybowes.com/carriers/pb-presort.html).
  'xPBShipperCarrierAccountId': "xPBShipperCarrierAccountId_example", // String | **[Required parameter for PBPresort service](https://shipping.pitneybowes.com/api/post-shipments-presort.html)**. The merchant's Mailer ID (MID), as provided by Pitney Bowes during merchant onboarding for PB Presort.
  'includeDeliveryCommitment': "includeDeliveryCommitment_example" // String | If set to true, returns estimated transit times in days. Only for USPS Create Shipment. See also [Pitney Bowes Delivery Guarantee](https://shipping.pitneybowes.com/faqs/delivery-guarantee.html) [Do all USPS services return transit times?](https://shipping.pitneybowes.com/faqs/shipments.html#transit-times-faq)
};
apiInstance.createShipmentLabel(xPBTransactionId, shipment, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPBTransactionId** | **String**| Required. A unique identifier for the transaction, up to 25 characters. | 
 **shipment** | [**Shipment**](Shipment.md)| request | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **xPBIntegratorCarrierId** | **String**| USPS Only. Negotiated services rate, if applicable. | [optional] 
 **xPBShipperRatePlan** | **String**| USPS Only. Shipper rate plan, if applicable. For more information, see [this FAQ](https://shipping.pitneybowes.com/faqs/rates.html#rate-plans-faq). | [optional] 
 **xPBShipmentGroupId** | **String**|  **[Required parameter for PBPresort service](https://shipping.pitneybowes.com/api/post-shipments-presort.html)**.The job number that represents the agreement between the merchant and PB Presort. This was provided by Pitney Bowes during [merchant onboarding for PB Presort](https://shipping.pitneybowes.com/carriers/pb-presort.html). | [optional] 
 **xPBShipperCarrierAccountId** | **String**| **[Required parameter for PBPresort service](https://shipping.pitneybowes.com/api/post-shipments-presort.html)**. The merchant&#39;s Mailer ID (MID), as provided by Pitney Bowes during merchant onboarding for PB Presort. | [optional] 
 **includeDeliveryCommitment** | **String**| If set to true, returns estimated transit times in days. Only for USPS Create Shipment. See also [Pitney Bowes Delivery Guarantee](https://shipping.pitneybowes.com/faqs/delivery-guarantee.html) [Do all USPS services return transit times?](https://shipping.pitneybowes.com/faqs/shipments.html#transit-times-faq) | [optional] 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reprintShipment

> Shipment reprintShipment(shipmentId, opts)

reprintShipment

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ShipmentApi();
let shipmentId = "shipmentId_example"; // String | Required. The shipment ID that was issued when shipment label was generated.
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'carrier': USPS // Carrier | 
};
apiInstance.reprintShipment(shipmentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| Required. The shipment ID that was issued when shipment label was generated. | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **carrier** | [**Carrier**](.md)|  | [optional] 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryShipment

> Shipment retryShipment(originalTransactionId, opts)

retryShipment

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ShipmentApi();
let originalTransactionId = 12344; // String | 
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'carrier': USPS // Carrier | 
};
apiInstance.retryShipment(originalTransactionId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originalTransactionId** | **String**|  | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **carrier** | [**Carrier**](.md)|  | [optional] 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

