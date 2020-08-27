# ShippingApi.CustomsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EELPFC** | **String** |  | [optional] 
**blanketEndDate** | **String** | format: YYYY-MM-DD | [optional] 
**blanketStartDate** | **String** | format: YYYY-MM-DD | [optional] 
**certificateNumber** | **String** |  | [optional] 
**comments** | **String** |  | [optional] 
**currencyCode** | **String** | ISO-4217 | 
**customsDeclaredValue** | **Number** |  | [optional] 
**declarationStatement** | **String** |  | [optional] 
**freightCharge** | **Number** |  | [optional] 
**fromCustomsReference** | **String** |  | [optional] 
**handlingCosts** | **Number** |  | [optional] 
**importerCustomsReference** | **String** |  | [optional] 
**insuredAmount** | **Number** |  | [optional] 
**insuredNumber** | **String** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**licenseNumber** | **String** |  | [optional] 
**otherCharge** | **Number** |  | [optional] 
**otherDescription** | **String** |  | [optional] 
**otherType** | **String** |  | [optional] 
**packingCosts** | **Number** |  | [optional] 
**producerSpecification** | **String** |  | [optional] 
**reasonForExport** | **String** |  | [optional] 
**reasonForExportExplanation** | **String** |  | [optional] 
**sdrValue** | **Number** |  | [optional] 
**shippingDocumentType** | **String** |  | [optional] 
**signatureContact** | [**Address**](Address.md) |  | [optional] 
**termsOfSale** | **String** |  | [optional] 



## Enum: OtherTypeEnum


* `COMMISSIONS` (value: `"COMMISSIONS"`)

* `DISCOUNTS` (value: `"DISCOUNTS"`)

* `HANDLING_FEES` (value: `"HANDLING_FEES"`)

* `OTHER` (value: `"OTHER"`)

* `ROYALTIES_AND_LICENSE_FEES` (value: `"ROYALTIES_AND_LICENSE_FEES"`)

* `TAXES` (value: `"TAXES"`)





## Enum: ProducerSpecificationEnum


* `MULTIPLE_SPECIFIED` (value: `"MULTIPLE_SPECIFIED"`)

* `SAME` (value: `"SAME"`)

* `SINGLE_SPECIFIED` (value: `"SINGLE_SPECIFIED"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `AVAILABLE_UPON_REQUEST` (value: `"AVAILABLE_UPON_REQUEST"`)





## Enum: ReasonForExportEnum


* `GIFT` (value: `"GIFT"`)

* `COMMERCIAL_SAMPLE` (value: `"COMMERCIAL_SAMPLE"`)

* `MERCHANDISE` (value: `"MERCHANDISE"`)

* `DOCUMENTS` (value: `"DOCUMENTS"`)

* `RETURNED_GOODS` (value: `"RETURNED_GOODS"`)

* `SOLD` (value: `"SOLD"`)

* `NOT_SOLD` (value: `"NOT_SOLD"`)

* `OTHER` (value: `"OTHER"`)

* `DANGEROUS_GOOD` (value: `"DANGEROUS_GOOD"`)

* `HUMANITARIAN_GOODS` (value: `"HUMANITARIAN_GOODS"`)





## Enum: ShippingDocumentTypeEnum


* `NAFTA` (value: `"NAFTA"`)

* `COO` (value: `"COO"`)




