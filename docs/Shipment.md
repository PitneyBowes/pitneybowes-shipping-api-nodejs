# ShippingApi.Shipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalAddresses** | [**[AdditionalAddress]**](AdditionalAddress.md) |  | [optional] 
**altReturnAddress** | [**Address**](Address.md) |  | [optional] 
**carrierPayments** | [**[CarrierPayment]**](CarrierPayment.md) |  | [optional] 
**customs** | [**Customs**](Customs.md) |  | [optional] 
**documents** | [**[Document]**](Document.md) |  | [optional] 
**fromAddress** | [**Address**](Address.md) |  | 
**hazmatDetails** | [**HazmatDetails**](HazmatDetails.md) |  | [optional] 
**parcel** | [**Parcel**](Parcel.md) |  | 
**parcelTrackingNumber** | **String** |  | [optional] 
**rates** | [**[Rate]**](Rate.md) |  | 
**references** | [**[Parameter]**](Parameter.md) |  | [optional] 
**shipmentId** | **String** |  | [optional] 
**shipmentOptions** | [**[Parameter]**](Parameter.md) |  | [optional] 
**shipmentType** | **String** |  | [optional] 
**soldToAddress** | [**Address**](Address.md) |  | [optional] 
**toAddress** | [**Address**](Address.md) |  | 



## Enum: ShipmentTypeEnum


* `OUTBOUND` (value: `"OUTBOUND"`)

* `RETURN` (value: `"RETURN"`)




