# ShippingApi.Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLines** | **[String]** |  | [optional] 
**carrierRoute** | **String** |  | [optional] 
**cityTown** | **String** |  | [optional] 
**company** | **String** |  | [optional] 
**countryCode** | **String** | 2-character country code (ISO-3166-1 alpha-2) | 
**deliveryPoint** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**postalCode** | **String** |  | [optional] 
**residential** | **Boolean** |  | [optional] 
**stateProvince** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**taxId** | **String** |  | [optional] 
**taxIdType** | **String** |  | [optional] 



## Enum: StatusEnum


* `PARSED` (value: `"PARSED"`)

* `VALIDATED_CHANGED` (value: `"VALIDATED_CHANGED"`)

* `VALIDATED_AND_NOT_CHANGED` (value: `"VALIDATED_AND_NOT_CHANGED"`)

* `NOT_CHANGED` (value: `"NOT_CHANGED"`)





## Enum: TaxIdTypeEnum


* `EIN` (value: `"EIN"`)

* `GST` (value: `"GST"`)

* `VAT` (value: `"VAT"`)

* `RFC` (value: `"RFC"`)

* `EORI` (value: `"EORI"`)




