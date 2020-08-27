# ShippingApi.TrackingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageCount** | **Number** |  | [optional] 
**carrier** | **String** |  | [optional] 
**trackingNumber** | **String** |  | [optional] 
**referenceNumber** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**updatedDate** | **Date** |  | [optional] 
**updatedTime** | **String** |  | [optional] 
**shipDate** | **Date** |  | [optional] 
**estimatedDeliveryDate** | **Date** |  | [optional] 
**estimatedDeliveryTime** | **String** |  | [optional] 
**deliveryDate** | **Date** |  | [optional] 
**deliveryTime** | **String** |  | [optional] 
**deliveryLocation** | **String** |  | [optional] 
**deliveryLocationDescription** | **String** |  | [optional] 
**signedBy** | **String** |  | [optional] 
**weight** | **Number** |  | [optional] 
**weightOUM** | **String** |  | [optional] 
**reattemptDate** | **Date** |  | [optional] 
**reattemptTime** | **String** |  | [optional] 
**destinationAddress** | [**TrackingAddress**](TrackingAddress.md) |  | [optional] 
**senderAddress** | [**TrackingAddress**](TrackingAddress.md) |  | [optional] 
**scanDetailsList** | [**[TrackingResponseScanDetailsList]**](TrackingResponseScanDetailsList.md) |  | [optional] 



## Enum: StatusEnum


* `In Transit` (value: `"In Transit"`)

* `Delivered` (value: `"Delivered"`)

* `Manifest` (value: `"Manifest"`)





## Enum: WeightOUMEnum


* `LBS` (value: `"LBS"`)

* `KGS` (value: `"KGS"`)




