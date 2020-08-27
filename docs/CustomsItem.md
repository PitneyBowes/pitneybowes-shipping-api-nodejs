# ShippingApi.CustomsItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** |  | 
**hSTariffCode** | **String** |  | [optional] 
**netCostMethod** | **String** |  | [optional] 
**originCountryCode** | **String** |  | 
**originStateProvince** | **String** |  | [optional] 
**preferenceCriterion** | **String** |  | [optional] 
**producerAddress** | [**Address**](Address.md) |  | [optional] 
**producerDetermination** | **String** |  | [optional] 
**producerId** | **String** |  | [optional] 
**quantity** | **Number** |  | 
**quantityUOM** | **String** |  | [optional] 
**unitPrice** | **Number** |  | 
**unitWeight** | [**ParcelWeight**](ParcelWeight.md) |  | 



## Enum: NetCostMethodEnum


* `NO_NET_COST` (value: `"NO_NET_COST"`)

* `NET_COST` (value: `"NET_COST"`)





## Enum: PreferenceCriterionEnum


* `A` (value: `"A"`)

* `B` (value: `"B"`)

* `C` (value: `"C"`)

* `D` (value: `"D"`)

* `E` (value: `"E"`)

* `F` (value: `"F"`)





## Enum: ProducerDeterminationEnum


* `NO_1` (value: `"NO_1"`)

* `NO_2` (value: `"NO_2"`)

* `NO_3` (value: `"NO_3"`)

* `PD_YES` (value: `"PD_YES"`)




