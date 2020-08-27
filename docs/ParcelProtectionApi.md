# ShippingApi.ParcelProtectionApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelParcelProtection**](ParcelProtectionApi.md#cancelParcelProtection) | **POST** /v1/parcel-protection/void | Parcel Protection Coverage
[**getParcelProtectionCoverage**](ParcelProtectionApi.md#getParcelProtectionCoverage) | **POST** /v1/parcel-protection/create | Parcel Protection Coverage
[**getParcelProtectionQuote**](ParcelProtectionApi.md#getParcelProtectionQuote) | **POST** /v1/parcel-protection/quote | Parcel Protection Quote
[**getParcelProtectionReports**](ParcelProtectionApi.md#getParcelProtectionReports) | **GET** /v1/parcel-protection/{developerId}/policies | Parcel Protection Reports



## cancelParcelProtection

> VoidParcelProtectionResponse cancelParcelProtection(xPBTransactionId, parcelProtectionReferenceId, voidParcelProtectionRequest, opts)

Parcel Protection Coverage

This API lets merchants request Pitney Bowes [Parcel Protection](https://shipping.pitneybowes.com/faqs/parcel-protection.html) coverage for shipments. Merchants can request coverage for shipments created with the Shipping APIs as well as for shipments created with other platforms.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ParcelProtectionApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | Required. A unique identifier for the transaction, up to 25 characters.
let parcelProtectionReferenceId = "parcelProtectionReferenceId_example"; // String | Required. The identifier for the PB Parcel Protection policy that is being voided.
let voidParcelProtectionRequest = {"shipperID":"9024324564","parcelProtectionAccountID":"IPACT2345678"}; // VoidParcelProtectionRequest | manifest
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.cancelParcelProtection(xPBTransactionId, parcelProtectionReferenceId, voidParcelProtectionRequest, opts, (error, data, response) => {
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
 **parcelProtectionReferenceId** | **String**| Required. The identifier for the PB Parcel Protection policy that is being voided. | 
 **voidParcelProtectionRequest** | [**VoidParcelProtectionRequest**](VoidParcelProtectionRequest.md)| manifest | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**VoidParcelProtectionResponse**](VoidParcelProtectionResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getParcelProtectionCoverage

> ParcelProtectionCreateResponse getParcelProtectionCoverage(xPBTransactionId, parcelProtectionCreateRequest, opts)

Parcel Protection Coverage

This API lets merchants request Pitney Bowes [Parcel Protection](https://shipping.pitneybowes.com/faqs/parcel-protection.html) coverage for shipments. Merchants can request coverage for shipments created with the Shipping APIs as well as for shipments created with other platforms.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ParcelProtectionApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | Required. A unique identifier for the transaction, up to 25 characters.
let parcelProtectionCreateRequest = {"shipmentInfo":{"trackingNumber":"940509898641491871138","carrier":"USPS","serviceId":"PM","insuranceCoverageValue":1000,"insuranceCoverageValueCurrency":"USD","parcelInfo":{"commodityList":[{"categoryPath":"electronics","itemCode":"SKU1084","name":"Laptop","url":"https://example.com/computers/laptop/1084"}]},"shipperInfo":{"shipperID":"9024324564","address":{"addressLines":["545 Market St"],"cityTown":"San Francisco","stateProvince":"CA","postalCode":"94105-2847","countryCode":"US"},"companyName":"Supplies","givenName":"John","middleName":"James","familyName":"Smith","email":"john@example.com","phoneNumbers":[{"number":"1234567890","type":"business phone"}]},"consigneeInfo":{"address":{"addressLines":["284 W Fulton"],"cityTown":"Garden City","stateProvince":"KS","postalCode":"67846","countryCode":"US"},"companyName":"Shop","givenName":"Mary","middleName":"Anne","familyName":"Jones","email":"mary@example.com","phoneNumbers":[{"number":"6205551234","type":"business phone"},{"number":"6205554321","type":"fax"}]}}}; // ParcelProtectionCreateRequest | manifest
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getParcelProtectionCoverage(xPBTransactionId, parcelProtectionCreateRequest, opts, (error, data, response) => {
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
 **parcelProtectionCreateRequest** | [**ParcelProtectionCreateRequest**](ParcelProtectionCreateRequest.md)| manifest | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**ParcelProtectionCreateResponse**](ParcelProtectionCreateResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getParcelProtectionQuote

> ParcelProtectionQuoteResponse getParcelProtectionQuote(xPBTransactionId, parcelProtectionQuoteRequest, opts)

Parcel Protection Quote

This API provides a quote for covering a shipment through Pitney Bowes [Parcel Protection](https://www.pitneybowes.com/us/ecommerce-delivery-services/parcel-protection.html).

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ParcelProtectionApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | Required. A unique identifier for the transaction, up to 25 characters.
let parcelProtectionQuoteRequest = {"shipmentInfo":{"carrier":"USPS","serviceId":"PM","insuranceCoverageValue":1000,"insuranceCoverageValueCurrency":"USD","parcelInfo":{"commodityList":[{"categoryPath":"electronics","itemCode":"SKU1084","name":"Laptop","url":"https://example.com/computers/laptop/1084"}]},"shipperInfo":{"shipperID":"9024324564","address":{"addressLines":["545 Market St"],"cityTown":"San Francisco","stateProvince":"CA","postalCode":"94105-2847","countryCode":"US"}},"consigneeInfo":{"address":{"addressLines":["284 W Fulton"],"cityTown":"Garden City","stateProvince":"KS","postalCode":"67846","countryCode":"US"}}}}; // ParcelProtectionQuoteRequest | manifest
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getParcelProtectionQuote(xPBTransactionId, parcelProtectionQuoteRequest, opts, (error, data, response) => {
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
 **parcelProtectionQuoteRequest** | [**ParcelProtectionQuoteRequest**](ParcelProtectionQuoteRequest.md)| manifest | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**ParcelProtectionQuoteResponse**](ParcelProtectionQuoteResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getParcelProtectionReports

> ParcelProtectionPolicyResponse getParcelProtectionReports(xPBTransactionId, developerId, policyCreatedFromDate, opts)

Parcel Protection Reports

This operation retrieves the policy status and other information on the Parcel Protection policies you have purchased for your shipments. Further Details https://shipping.pitneybowes.com/api/get-parcel-protection-reports.html

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.ParcelProtectionApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | Required. A unique identifier for the transaction, up to 25 characters.
let developerId = "developerId_example"; // String | Required. Your Pitney Bowes developer ID.
let policyCreatedFromDate = "policyCreatedFromDate_example"; // String | The beginning of the date range. Specify this value in UTC using the ISO 8601 standard. You must include both date and time, and you must end the time with Z to indicate a zero offset.
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'policyCreatedToDate': "policyCreatedToDate_example", // String | The end of the date range. Specify this value in UTC using the ISO 8601 standard. You must include both date and time, and you must end the time with Z to indicate a zero offset.
  'policyReferenceId': "policyReferenceId_example", // String | The unique identifier for the PB Parcel Protection policy.].
  'parcelTrackingNumber': "parcelTrackingNumber_example", // String | The parcel tracking number of the shipment that the policy applies to.
  'merchantId': "merchantId_example", // String | The merchant's Shipper ID. This is the value of the postalReportingNumber element in the Merchant Object.
  'policyStatus': "policyStatus_example", // String | Whether the policy is active or voided.
  'size': "size_example", // String | The number of transactions to return per page in the result set.
  'page': "page_example", // String | The index number of the page to return. Page index numbering starts at 0. Specifying page=0 returns the first page of the result set.
  'sort': "sort_example" // String | Defines a property to sort on and the sort order. Sort order can be ascending (asc) or descending (desc).
};
apiInstance.getParcelProtectionReports(xPBTransactionId, developerId, policyCreatedFromDate, opts, (error, data, response) => {
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
 **developerId** | **String**| Required. Your Pitney Bowes developer ID. | 
 **policyCreatedFromDate** | **String**| The beginning of the date range. Specify this value in UTC using the ISO 8601 standard. You must include both date and time, and you must end the time with Z to indicate a zero offset. | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **policyCreatedToDate** | **String**| The end of the date range. Specify this value in UTC using the ISO 8601 standard. You must include both date and time, and you must end the time with Z to indicate a zero offset. | [optional] 
 **policyReferenceId** | **String**| The unique identifier for the PB Parcel Protection policy.]. | [optional] 
 **parcelTrackingNumber** | **String**| The parcel tracking number of the shipment that the policy applies to. | [optional] 
 **merchantId** | **String**| The merchant&#39;s Shipper ID. This is the value of the postalReportingNumber element in the Merchant Object. | [optional] 
 **policyStatus** | **String**| Whether the policy is active or voided. | [optional] 
 **size** | **String**| The number of transactions to return per page in the result set. | [optional] 
 **page** | **String**| The index number of the page to return. Page index numbering starts at 0. Specifying page&#x3D;0 returns the first page of the result set. | [optional] 
 **sort** | **String**| Defines a property to sort on and the sort order. Sort order can be ascending (asc) or descending (desc). | [optional] 

### Return type

[**ParcelProtectionPolicyResponse**](ParcelProtectionPolicyResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

