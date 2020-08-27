# ShippingApi.TrackingApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTrackingEvents**](TrackingApi.md#addTrackingEvents) | **POST** /v2/track/events | getTrackingDetails
[**getTrackingDetails**](TrackingApi.md#getTrackingDetails) | **GET** /v1/tracking/{trackingNumber} | getTrackingDetails



## addTrackingEvents

> InlineResponse2002 addTrackingEvents(addTrackingEvents, opts)

getTrackingDetails

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.TrackingApi();
let addTrackingEvents = {"carrier":"NEWGISTICS","references":[{"referenceType":"package","referenceValue":"1Z00","events":[{"eventCode":"DPB","carrierEventCode":"DOAC","eventDate":"2020-04-18","eventTime":"12:48:10","eventTimeOffset":"-06:00","eventCity":"Decatur","eventStateOrProvince":"IL","postalCode":"62521","country":"US"}]},{"referenceType":"package","referenceValue":"3Z30","events":[{"eventCode":"DPB","carrierEventCode":"DOAC","eventDate":"2020-04-18","eventTime":"12:50:00","eventTimeOffset":"-06:00","eventCity":"Decatur","eventStateOrProvince":"IL","postalCode":"62521","country":"US"}]}]}; // AddTrackingEvents | add track event
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.addTrackingEvents(addTrackingEvents, opts, (error, data, response) => {
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
 **addTrackingEvents** | [**AddTrackingEvents**](AddTrackingEvents.md)| add track event | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTrackingDetails

> TrackingResponse getTrackingDetails(trackingNumber, packageIdentifierType, carrier, opts)

getTrackingDetails

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.TrackingApi();
let trackingNumber = "trackingNumber_example"; // String | The tracking number for the shipment.
let packageIdentifierType = "'TrackingNumber'"; // String | packageIdentifierType
let carrier = "carrier_example"; // String | carrier
let opts = {
  'xPBUnifiedErrorStructure': true // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
};
apiInstance.getTrackingDetails(trackingNumber, packageIdentifierType, carrier, opts, (error, data, response) => {
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
 **trackingNumber** | **String**| The tracking number for the shipment. | 
 **packageIdentifierType** | **String**| packageIdentifierType | [default to &#39;TrackingNumber&#39;]
 **carrier** | **String**| carrier | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]

### Return type

[**TrackingResponse**](TrackingResponse.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

