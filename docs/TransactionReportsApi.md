# ShippingApi.TransactionReportsApi

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionReport**](TransactionReportsApi.md#getTransactionReport) | **GET** /v4/ledger/developers/{developerId}/transactions/reports | This operation retrieves all transactions for a specified period of time.



## getTransactionReport

> PageRealTransactionDetailReport getTransactionReport(developerId, opts)

This operation retrieves all transactions for a specified period of time.

### Example

```javascript
import ShippingApi from 'ShippingAPI';
let defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShippingApi.TransactionReportsApi();
let developerId = "developerId_example"; // String | developerId
let opts = {
  'xPBUnifiedErrorStructure': true, // Boolean | Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | fromDate
  'shipDetails': 0, // Number | 
  'page': 56, // Number | 
  'size': 20, // Number | 
  'printStatus': "printStatus_example", // String | printStatus
  'toDate': new Date("2013-10-20T19:20:30+01:00"), // Date | toDate
  'transactionType': "transactionType_example", // String | transactionType
  'merchantId': "merchantId_example", // String | The value of the postalReportingNumber element in the [merchant object](https://shipping.pitneybowes.com/reference/resource-objects.html). This value is also the merchant's Shipper ID.
  'sort': "sort_example", // String | Defines a property to sort on and the sort order. Sort order can be ascending (asc) or descending (desc). Use the following form-  * **sort=<property_name>,<sort_direction>** For example- **sort=transactionId,desc** 
  'parcelTrackingNumber': "parcelTrackingNumber_example", // String | Parcel tracking number of the shipment.
  'transactionId': "transactionId_example" // String | The unique string that identifies all the transactions associated with a given shipment. The string comprises the developer ID and the shipment's X-PB-TransactionId, separated by an underscore (_). For example-  * **transactionId=44397664_ad5aa07-ad7414-a78a-c22b3**
};
apiInstance.getTransactionReport(developerId, opts, (error, data, response) => {
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
 **developerId** | **String**| developerId | 
 **xPBUnifiedErrorStructure** | **Boolean**| Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. | [optional] [default to true]
 **fromDate** | **Date**| fromDate | [optional] 
 **shipDetails** | **Number**|  | [optional] [default to 0]
 **page** | **Number**|  | [optional] 
 **size** | **Number**|  | [optional] [default to 20]
 **printStatus** | **String**| printStatus | [optional] 
 **toDate** | **Date**| toDate | [optional] 
 **transactionType** | **String**| transactionType | [optional] 
 **merchantId** | **String**| The value of the postalReportingNumber element in the [merchant object](https://shipping.pitneybowes.com/reference/resource-objects.html). This value is also the merchant&#39;s Shipper ID. | [optional] 
 **sort** | **String**| Defines a property to sort on and the sort order. Sort order can be ascending (asc) or descending (desc). Use the following form-  * **sort&#x3D;&lt;property_name&gt;,&lt;sort_direction&gt;** For example- **sort&#x3D;transactionId,desc**  | [optional] 
 **parcelTrackingNumber** | **String**| Parcel tracking number of the shipment. | [optional] 
 **transactionId** | **String**| The unique string that identifies all the transactions associated with a given shipment. The string comprises the developer ID and the shipment&#39;s X-PB-TransactionId, separated by an underscore (_). For example-  * **transactionId&#x3D;44397664_ad5aa07-ad7414-a78a-c22b3** | [optional] 

### Return type

[**PageRealTransactionDetailReport**](PageRealTransactionDetailReport.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

