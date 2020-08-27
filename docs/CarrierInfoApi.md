# ShippingApi.CarrierInfoApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCarrierFacilities**](CarrierInfoApi.md#getCarrierFacilities) | **POST** /v1/carrier-facility | Find Carrier Facilities
[**getCarrierLicenseAgreement**](CarrierInfoApi.md#getCarrierLicenseAgreement) | **GET** /v1/carrier/license-agreements | This operation retrieves a carrier&#39;s license agreement.
[**getCarrierServiceRules**](CarrierInfoApi.md#getCarrierServiceRules) | **GET** /v1/information/rules/rating-services | Retrieves the rules governing the carrier&#39;s services.
[**getCarrierSupportedDestination**](CarrierInfoApi.md#getCarrierSupportedDestination) | **GET** /v1/countries | This operation returns a list of supported destination countries to which the carrier offers international shipping services.



## getCarrierFacilities

> CarrierFacilityResponse getCarrierFacilities(carrierFacilityRequest, opts)

Find Carrier Facilities

This operation locates Post Offices and other facilities for a given carrier. You can use this operation, for example, to locate all USPS Post Offices near to a given postal code.If you use the Standard Return API and if you use the option to print a QR code, use this API to locate facilities where the buyer can print the label from the QR code.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.CarrierInfoApi();
let carrierFacilityRequest = {"address":{"addressLines":["6525 Greenway Dr"],"cityTown":"Roanoke","stateProvince":"VA","countryCode":"US"},"carrier":"USPS","carrierFacilityOptions":[{"name":"FACILITY_TYPE_SERVICE","value":"LABEL_BROKER_RETAIL"},{"name":"FACILITY_TYPE","value":"POST_OFFICE"},{"name":"FACILITY_WITHIN_RADIUS","value":"10"},{"name":"NUMBER_OF_FACILITIES","value":"5"}]}; // CarrierFacilityRequest | 
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getCarrierFacilities(carrierFacilityRequest, opts, (error, data, response) => {
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
 **carrierFacilityRequest** | [**CarrierFacilityRequest**](CarrierFacilityRequest.md)|  | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**CarrierFacilityResponse**](CarrierFacilityResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCarrierLicenseAgreement

> InlineResponse200 getCarrierLicenseAgreement(carrier, originCountryCode, opts)

This operation retrieves a carrier&#39;s license agreement.

This operation retrieves a carrier&#39;s license agreement. The operation is used in the [Carrier Registration Tutorial](https://shipping.pitneybowes.com/carrier-registration.html).

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.CarrierInfoApi();
let carrier = UPS; // String | The carrier name. Currently this must be set to: UPS
let originCountryCode = US; // ISOCountryCode | The two-character ISO country code for the country where the shipment originates.
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getCarrierLicenseAgreement(carrier, originCountryCode, opts, (error, data, response) => {
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
 **carrier** | **String**| The carrier name. Currently this must be set to: UPS | [default to &#39;UPS&#39;]
 **originCountryCode** | [**ISOCountryCode**](.md)| The two-character ISO country code for the country where the shipment originates. | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCarrierServiceRules

> CarrierRule getCarrierServiceRules(carrier, originCountryCode, destinationCountryCode, opts)

Retrieves the rules governing the carrier&#39;s services.

This operation retrieves the rules governing the carrier&#39;s services, including the available parcel types and the limits on weights and dimensions. **This API currently returns rules only for USPS** . Find more information at [Get Carrier Rules](https://shipping.pitneybowes.com/api/get-carrier-rules.html)

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.CarrierInfoApi();
let carrier = USPS; // Carrier | The carrier name. **Currently this must be set to: USPS** 
let originCountryCode = US; // ISOCountryCode | The [two-character ISO country code](https://www.iso.org/obp/ui/#search) for the country where the shipment originates.
let destinationCountryCode = IN; // ISOCountryCode | The [two-character ISO country code](https://www.iso.org/obp/ui/#search) for the country of the shipment's destination address.
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'rateTypeId': "rateTypeId_example", // String | The type of rate requested, such as COMMERCIAL_BASE. If a rate type is not specified, all eligible rate types are returned.
  'futureShipmentDate': "futureShipmentDate_example", // String | If the shipment is for a future date, and if a rate change is expected before the shipment date, use this field to ensure you get the correct rates and correct rate rules. Note that a rate change can affect the structure of the rate rules as well as the actual rates.Specify this value in UTC/GMT, not in local time. Formats allowed are   * **YYYY-MM-DD**   * **YYYY-MM-DD HH:mm:ss** * **YYYY-MM-DD HH:mm:ss.SSS**
  'returnShipment': new Date("2013-10-20T19:20:30+01:00"), // Date | If set to true, provides only services applicable for return shipment.
  'compactResponse': true // Boolean | If set to true, returns only summary, without special service details.
};
apiInstance.getCarrierServiceRules(carrier, originCountryCode, destinationCountryCode, opts, (error, data, response) => {
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
 **carrier** | [**Carrier**](.md)| The carrier name. **Currently this must be set to: USPS**  | 
 **originCountryCode** | [**ISOCountryCode**](.md)| The [two-character ISO country code](https://www.iso.org/obp/ui/#search) for the country where the shipment originates. | 
 **destinationCountryCode** | [**ISOCountryCode**](.md)| The [two-character ISO country code](https://www.iso.org/obp/ui/#search) for the country of the shipment&#39;s destination address. | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **rateTypeId** | **String**| The type of rate requested, such as COMMERCIAL_BASE. If a rate type is not specified, all eligible rate types are returned. | [optional] 
 **futureShipmentDate** | **String**| If the shipment is for a future date, and if a rate change is expected before the shipment date, use this field to ensure you get the correct rates and correct rate rules. Note that a rate change can affect the structure of the rate rules as well as the actual rates.Specify this value in UTC/GMT, not in local time. Formats allowed are   * **YYYY-MM-DD**   * **YYYY-MM-DD HH:mm:ss** * **YYYY-MM-DD HH:mm:ss.SSS** | [optional] 
 **returnShipment** | **Date**| If set to true, provides only services applicable for return shipment. | [optional] 
 **compactResponse** | **Boolean**| If set to true, returns only summary, without special service details. | [optional] 

### Return type

[**CarrierRule**](CarrierRule.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCarrierSupportedDestination

> [Object] getCarrierSupportedDestination(carrier, originCountryCode, opts)

This operation returns a list of supported destination countries to which the carrier offers international shipping services.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.CarrierInfoApi();
let carrier = usps; // Carrier | The carrier name. Currently this must be set to: USPS
let originCountryCode = US; // ISOCountryCode | The two-character ISO country code for the country where the shipment originates.
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getCarrierSupportedDestination(carrier, originCountryCode, opts, (error, data, response) => {
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
 **carrier** | [**Carrier**](.md)| The carrier name. Currently this must be set to: USPS | 
 **originCountryCode** | [**ISOCountryCode**](.md)| The two-character ISO country code for the country where the shipment originates. | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

**[Object]**

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

