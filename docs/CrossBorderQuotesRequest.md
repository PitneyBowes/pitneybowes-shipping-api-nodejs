# ShippingApi.CrossBorderQuotesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteCurrency** | **String** | The currency to return the quote in. Use three uppercase letters, per the ISO currency code (ISO 4217). For example- USD, CAD, or EUR | 
**basketCurrency** | **String** | The default currency of the basket. Use three uppercase letters, per the ISO currency code (ISO 4217). For example- USD, CAD, or EUR | 
**fromAddress** | [**Address**](Address.md) |  | [optional] 
**toAddress** | [**Address**](Address.md) |  | 
**basketItems** | [**[CrossBorderQuotesRequestBasketItems]**](CrossBorderQuotesRequestBasketItems.md) | The items in the buyer&#39;s shopping basket. | 
**rates** | [**[CrossBorderQuotesRequestRates]**](CrossBorderQuotesRequestRates.md) | Specifies the carrier, service, parcel, and other information. In a response, this field also contains the service charges. Importatn- In a request, the rates array can contain only one rates object. | 
**shipmentOptions** | [**[CarrierFacilityResponseCarrierFacilityOptions]**](CarrierFacilityResponseCarrierFacilityOptions.md) |  | [optional] 


