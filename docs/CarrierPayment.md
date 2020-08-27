# ShippingApi.CarrierPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **String** |  | [optional] 
**countryCode** | **String** |  | [optional] 
**party** | **String** |  | 
**postalCode** | **String** |  | [optional] 
**typeOfCharge** | **String** |  | 



## Enum: PartyEnum


* `RECEIVER` (value: `"BILL_RECEIVER"`)

* `SENDER` (value: `"BILL_SENDER"`)

* `THIRD_PARTY` (value: `"BILL_THIRD_PARTY"`)

* `RECEIVER_CONTRACT` (value: `"BILL_RECEIVER_CONTRACT"`)





## Enum: TypeOfChargeEnum


* `TRANSPORTATION_CHARGES` (value: `"TRANSPORTATION_CHARGES"`)

* `DUTIES_AND_TAXES` (value: `"DUTIES_AND_TAXES"`)

* `ALL_CHARGES` (value: `"ALL_CHARGES"`)




