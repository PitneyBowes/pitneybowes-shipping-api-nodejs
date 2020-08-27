# ShippingApi.RateParcelsApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rateParcel**](RateParcelsApi.md#rateParcel) | **POST** /v1/rates | Use this operation to rate a parcel before you print and purchase a shipment label. You can rate a parcel for multiple services and multiple parcel types with a single API request.



## rateParcel

> Shipment rateParcel(shipment, opts)

Use this operation to rate a parcel before you print and purchase a shipment label. You can rate a parcel for multiple services and multiple parcel types with a single API request.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.RateParcelsApi();
let shipment = {"fromAddress":{"company":"Supplier","name":"J. Smith","phone":"303-555-1213","email":"js@example.com","residential":false,"addressLines":["4750 Walnut Street"],"cityTown":"Boulder","stateProvince":"CO","postalCode":"80301","countryCode":"US"},"toAddress":{"company":"Shop","name":"J. Jones","phone":"203-000-1234","email":"jjones@example.com","residential":false,"addressLines":["771 Orange St"],"cityTown":"New Haven","stateProvince":"CT","postalCode":"06511","countryCode":"US"},"parcel":{"weight":{"weight":1,"unitOfMeasurement":"OZ"},"dimension":{"length":5,"width":0.25,"height":4,"unitOfMeasurement":"IN","irregularParcelGirth":1}},"rates":[{"carrier":"USPS","parcelType":"PKG","inductionPostalCode":"06484"}]}; // Shipment | Shipment request for Rates
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'xPBShipperRatePlan': "xPBShipperRatePlan_example", // String | USPS Only. Shipper rate plan, if applicable. For more information, see [this FAQ](https://shipping.pitneybowes.com/faqs/rates.html#rate-plans-faq)
  'xPBIntegratorCarrierId': "xPBIntegratorCarrierId_example", // String | USPS Only. Negotiated services rate, if applicable.
  'xPBShipperCarrierAccountId': "xPBShipperCarrierAccountId_example", // String | UPS (United Parcel Service) Only. The unique identifier returned in the shipperCarrierAccountId field by the [Register an Existing Carrier Account](https://shipping.pitneybowes.com/api/post-carrier-accounts-register.html) API.
  'includeDeliveryCommitment': true, // Boolean | When set to true, returns estimated transit time in days.
  'carrier': "carrier_example" // String | Cross-Border only. Required for PB Cross-Border. Set this to PBI.
};
apiInstance.rateParcel(shipment, opts, (error, data, response) => {
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
 **shipment** | [**Shipment**](Shipment.md)| Shipment request for Rates | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **xPBShipperRatePlan** | **String**| USPS Only. Shipper rate plan, if applicable. For more information, see [this FAQ](https://shipping.pitneybowes.com/faqs/rates.html#rate-plans-faq) | [optional] 
 **xPBIntegratorCarrierId** | **String**| USPS Only. Negotiated services rate, if applicable. | [optional] 
 **xPBShipperCarrierAccountId** | **String**| UPS (United Parcel Service) Only. The unique identifier returned in the shipperCarrierAccountId field by the [Register an Existing Carrier Account](https://shipping.pitneybowes.com/api/post-carrier-accounts-register.html) API. | [optional] 
 **includeDeliveryCommitment** | **Boolean**| When set to true, returns estimated transit time in days. | [optional] 
 **carrier** | **String**| Cross-Border only. Required for PB Cross-Border. Set this to PBI. | [optional] 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

