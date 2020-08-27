# ShippingApi.PickupApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPickup**](PickupApi.md#cancelPickup) | **POST** /v1/pickups/{pickupId}/cancel | Cancel Pickup
[**getPickupschedule**](PickupApi.md#getPickupschedule) | **POST** /v1/pickups/schedule | Address validation



## cancelPickup

> InlineResponse2001 cancelPickup(xPBTransactionId, pickupId, opts)

Cancel Pickup

This operation schedules a USPS package pickup from a residential or commercial location and provides a pickup confirmation number.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.PickupApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | A unique identifier for the transaction, up to 25 characters
let pickupId = "pickupId_example"; // String | A unique identifier for the transaction, up to 25 characters
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.cancelPickup(xPBTransactionId, pickupId, opts, (error, data, response) => {
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
 **xPBTransactionId** | **String**| A unique identifier for the transaction, up to 25 characters | 
 **pickupId** | **String**| A unique identifier for the transaction, up to 25 characters | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPickupschedule

> SchedulePickupResponse getPickupschedule(xPBTransactionId, schedulePickup, opts)

Address validation

This operation schedules a USPS package pickup from a residential or commercial location and provides a pickup confirmation number.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.PickupApi();
let xPBTransactionId = "xPBTransactionId_example"; // String | A unique identifier for the transaction, up to 25 characters
let schedulePickup = new ShippingApi.SchedulePickup(); // SchedulePickup | Schedule Pickup request.
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getPickupschedule(xPBTransactionId, schedulePickup, opts, (error, data, response) => {
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
 **xPBTransactionId** | **String**| A unique identifier for the transaction, up to 25 characters | 
 **schedulePickup** | [**SchedulePickup**](SchedulePickup.md)| Schedule Pickup request. | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**SchedulePickupResponse**](SchedulePickupResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

