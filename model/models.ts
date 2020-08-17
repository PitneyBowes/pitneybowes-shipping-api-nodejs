export * from './addTrackingEvents';
export * from './addTrackingEventsEvents';
export * from './addTrackingEventsReferences';
export * from './additionalAddress';
export * from './address';
export * from './addressSuggestionResponse';
export * from './addressSuggestionResponseSuggestions';
export * from './addressVerifySuggest';
export * from './batteryDetails';
export * from './cancelShipment';
export * from './carrier';
export * from './carrierFacilityRequest';
export * from './carrierFacilityRequestAddress';
export * from './carrierFacilityResponse';
export * from './carrierFacilityResponseCarrierFacilityOptions';
export * from './carrierFacilityResponseCarrierFacilitySuggestions';
export * from './carrierFacilityResponseFacilityHours';
export * from './carrierFacilityResponseFacilityTimings';
export * from './carrierPayment';
export * from './carrierRule';
export * from './commodityInfo';
export * from './containerDetails';
export * from './containerManifestResponse';
export * from './containerManifestResponseData';
export * from './crossBorderQuotesErrors';
export * from './crossBorderQuotesErrorsErrors';
export * from './crossBorderQuotesErrorsErrorsErrors';
export * from './crossBorderQuotesErrorsQuote';
export * from './crossBorderQuotesErrorsQuoteLines';
export * from './crossBorderQuotesErrorsUnitErrors';
export * from './crossBorderQuotesRequest';
export * from './crossBorderQuotesRequestAttributes';
export * from './crossBorderQuotesRequestBasketItems';
export * from './crossBorderQuotesRequestCategories';
export * from './crossBorderQuotesRequestDescriptions';
export * from './crossBorderQuotesRequestIdentifiers';
export * from './crossBorderQuotesRequestItemDimension';
export * from './crossBorderQuotesRequestPricing';
export * from './crossBorderQuotesRequestPricingCodPrice';
export * from './crossBorderQuotesRequestRates';
export * from './crossBorderQuotesRequestUnitWeight';
export * from './crossBorderQuotesResponse';
export * from './crossBorderQuotesResponseLineRates';
export * from './crossBorderQuotesResponseQuote';
export * from './crossBorderQuotesResponseQuoteLines';
export * from './crossBorderQuotesResponseTotalRates';
export * from './crossBorderQuotesResponseUnitRates';
export * from './crossBorderQuotesResponseUnitRatesDeliveryCommitment';
export * from './customs';
export * from './customsInfo';
export * from './customsItem';
export * from './deliveryCommitment';
export * from './dimensionRules';
export * from './dimensionRulesMaxParcelDimensions';
export * from './dimensionRulesMinParcelDimensions';
export * from './discount';
export * from './docTabItem';
export * from './document';
export * from './documentPage';
export * from './errors';
export * from './hazmatDetails';
export * from './iSOCountryCode';
export * from './infectiousSubstanceContact';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2002';
export * from './manifest';
export * from './pageRealTransactionDetailReport';
export * from './parameter';
export * from './parcel';
export * from './parcelDimension';
export * from './parcelProtectionCreateRequest';
export * from './parcelProtectionCreateRequestShipmentInfo';
export * from './parcelProtectionCreateRequestShipmentInfoConsigneeInfo';
export * from './parcelProtectionCreateRequestShipmentInfoParcelInfo';
export * from './parcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList';
export * from './parcelProtectionCreateRequestShipmentInfoShipperInfo';
export * from './parcelProtectionCreateRequestShipmentInfoShipperInfoAddress';
export * from './parcelProtectionCreateResponse';
export * from './parcelProtectionCreateResponseParcelProtectionFeesBreakup';
export * from './parcelProtectionPolicyResponse';
export * from './parcelProtectionPolicyResponseContent';
export * from './parcelProtectionPolicyResponsePolicyDetails';
export * from './parcelProtectionPolicyResponseShipmentDetails';
export * from './parcelProtectionPolicyResponseShipperInfo';
export * from './parcelProtectionPolicyResponseShipperInfoAddress';
export * from './parcelProtectionPolicyResponseSort';
export * from './parcelProtectionQuoteRequest';
export * from './parcelProtectionQuoteRequestShipmentInfo';
export * from './parcelProtectionQuoteRequestShipmentInfoConsigneeInfo';
export * from './parcelProtectionQuoteRequestShipmentInfoParcelInfo';
export * from './parcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList';
export * from './parcelProtectionQuoteRequestShipmentInfoShipperInfo';
export * from './parcelProtectionQuoteRequestShipmentInfoShipperInfoAddress';
export * from './parcelProtectionQuoteResponse';
export * from './parcelProtectionQuoteResponseParcelProtectionFeesBreakup';
export * from './parcelType';
export * from './parcelTypeRules';
export * from './parcelWeight';
export * from './prerequisiteRules';
export * from './radioActiveParcelDimension';
export * from './radioActivityDetail';
export * from './radioNuclideDetail';
export * from './rate';
export * from './realTransactionDetailReport';
export * from './schedulePickup';
export * from './schedulePickupPickupSummary';
export * from './schedulePickupResponse';
export * from './schedulePickupTotalWeight';
export * from './searchCriteria';
export * from './services';
export * from './servicesParameterRule';
export * from './shipment';
export * from './signatory';
export * from './specialService';
export * from './specialServiceCodes';
export * from './specialServicesRule';
export * from './surcharge';
export * from './tax';
export * from './trackable';
export * from './trackingAddress';
export * from './trackingResponse';
export * from './trackingResponseScanDetailsList';
export * from './unitOfDimension';
export * from './unitOfWeight';
export * from './voidParcelProtectionRequest';
export * from './voidParcelProtectionResponse';
export * from './weightRules';

import localVarRequest = require('request');

import { AddTrackingEvents } from './addTrackingEvents';
import { AddTrackingEventsEvents } from './addTrackingEventsEvents';
import { AddTrackingEventsReferences } from './addTrackingEventsReferences';
import { AdditionalAddress } from './additionalAddress';
import { Address } from './address';
import { AddressSuggestionResponse } from './addressSuggestionResponse';
import { AddressSuggestionResponseSuggestions } from './addressSuggestionResponseSuggestions';
import { AddressVerifySuggest } from './addressVerifySuggest';
import { BatteryDetails } from './batteryDetails';
import { CancelShipment } from './cancelShipment';
import { Carrier } from './carrier';
import { CarrierFacilityRequest } from './carrierFacilityRequest';
import { CarrierFacilityRequestAddress } from './carrierFacilityRequestAddress';
import { CarrierFacilityResponse } from './carrierFacilityResponse';
import { CarrierFacilityResponseCarrierFacilityOptions } from './carrierFacilityResponseCarrierFacilityOptions';
import { CarrierFacilityResponseCarrierFacilitySuggestions } from './carrierFacilityResponseCarrierFacilitySuggestions';
import { CarrierFacilityResponseFacilityHours } from './carrierFacilityResponseFacilityHours';
import { CarrierFacilityResponseFacilityTimings } from './carrierFacilityResponseFacilityTimings';
import { CarrierPayment } from './carrierPayment';
import { CarrierRule } from './carrierRule';
import { CommodityInfo } from './commodityInfo';
import { ContainerDetails } from './containerDetails';
import { ContainerManifestResponse } from './containerManifestResponse';
import { ContainerManifestResponseData } from './containerManifestResponseData';
import { CrossBorderQuotesErrors } from './crossBorderQuotesErrors';
import { CrossBorderQuotesErrorsErrors } from './crossBorderQuotesErrorsErrors';
import { CrossBorderQuotesErrorsErrorsErrors } from './crossBorderQuotesErrorsErrorsErrors';
import { CrossBorderQuotesErrorsQuote } from './crossBorderQuotesErrorsQuote';
import { CrossBorderQuotesErrorsQuoteLines } from './crossBorderQuotesErrorsQuoteLines';
import { CrossBorderQuotesErrorsUnitErrors } from './crossBorderQuotesErrorsUnitErrors';
import { CrossBorderQuotesRequest } from './crossBorderQuotesRequest';
import { CrossBorderQuotesRequestAttributes } from './crossBorderQuotesRequestAttributes';
import { CrossBorderQuotesRequestBasketItems } from './crossBorderQuotesRequestBasketItems';
import { CrossBorderQuotesRequestCategories } from './crossBorderQuotesRequestCategories';
import { CrossBorderQuotesRequestDescriptions } from './crossBorderQuotesRequestDescriptions';
import { CrossBorderQuotesRequestIdentifiers } from './crossBorderQuotesRequestIdentifiers';
import { CrossBorderQuotesRequestItemDimension } from './crossBorderQuotesRequestItemDimension';
import { CrossBorderQuotesRequestPricing } from './crossBorderQuotesRequestPricing';
import { CrossBorderQuotesRequestPricingCodPrice } from './crossBorderQuotesRequestPricingCodPrice';
import { CrossBorderQuotesRequestRates } from './crossBorderQuotesRequestRates';
import { CrossBorderQuotesRequestUnitWeight } from './crossBorderQuotesRequestUnitWeight';
import { CrossBorderQuotesResponse } from './crossBorderQuotesResponse';
import { CrossBorderQuotesResponseLineRates } from './crossBorderQuotesResponseLineRates';
import { CrossBorderQuotesResponseQuote } from './crossBorderQuotesResponseQuote';
import { CrossBorderQuotesResponseQuoteLines } from './crossBorderQuotesResponseQuoteLines';
import { CrossBorderQuotesResponseTotalRates } from './crossBorderQuotesResponseTotalRates';
import { CrossBorderQuotesResponseUnitRates } from './crossBorderQuotesResponseUnitRates';
import { CrossBorderQuotesResponseUnitRatesDeliveryCommitment } from './crossBorderQuotesResponseUnitRatesDeliveryCommitment';
import { Customs } from './customs';
import { CustomsInfo } from './customsInfo';
import { CustomsItem } from './customsItem';
import { DeliveryCommitment } from './deliveryCommitment';
import { DimensionRules } from './dimensionRules';
import { DimensionRulesMaxParcelDimensions } from './dimensionRulesMaxParcelDimensions';
import { DimensionRulesMinParcelDimensions } from './dimensionRulesMinParcelDimensions';
import { Discount } from './discount';
import { DocTabItem } from './docTabItem';
import { Document } from './document';
import { DocumentPage } from './documentPage';
import { Errors } from './errors';
import { HazmatDetails } from './hazmatDetails';
import { ISOCountryCode } from './iSOCountryCode';
import { InfectiousSubstanceContact } from './infectiousSubstanceContact';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse2002 } from './inlineResponse2002';
import { Manifest } from './manifest';
import { PageRealTransactionDetailReport } from './pageRealTransactionDetailReport';
import { Parameter } from './parameter';
import { Parcel } from './parcel';
import { ParcelDimension } from './parcelDimension';
import { ParcelProtectionCreateRequest } from './parcelProtectionCreateRequest';
import { ParcelProtectionCreateRequestShipmentInfo } from './parcelProtectionCreateRequestShipmentInfo';
import { ParcelProtectionCreateRequestShipmentInfoConsigneeInfo } from './parcelProtectionCreateRequestShipmentInfoConsigneeInfo';
import { ParcelProtectionCreateRequestShipmentInfoParcelInfo } from './parcelProtectionCreateRequestShipmentInfoParcelInfo';
import { ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList } from './parcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList';
import { ParcelProtectionCreateRequestShipmentInfoShipperInfo } from './parcelProtectionCreateRequestShipmentInfoShipperInfo';
import { ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress } from './parcelProtectionCreateRequestShipmentInfoShipperInfoAddress';
import { ParcelProtectionCreateResponse } from './parcelProtectionCreateResponse';
import { ParcelProtectionCreateResponseParcelProtectionFeesBreakup } from './parcelProtectionCreateResponseParcelProtectionFeesBreakup';
import { ParcelProtectionPolicyResponse } from './parcelProtectionPolicyResponse';
import { ParcelProtectionPolicyResponseContent } from './parcelProtectionPolicyResponseContent';
import { ParcelProtectionPolicyResponsePolicyDetails } from './parcelProtectionPolicyResponsePolicyDetails';
import { ParcelProtectionPolicyResponseShipmentDetails } from './parcelProtectionPolicyResponseShipmentDetails';
import { ParcelProtectionPolicyResponseShipperInfo } from './parcelProtectionPolicyResponseShipperInfo';
import { ParcelProtectionPolicyResponseShipperInfoAddress } from './parcelProtectionPolicyResponseShipperInfoAddress';
import { ParcelProtectionPolicyResponseSort } from './parcelProtectionPolicyResponseSort';
import { ParcelProtectionQuoteRequest } from './parcelProtectionQuoteRequest';
import { ParcelProtectionQuoteRequestShipmentInfo } from './parcelProtectionQuoteRequestShipmentInfo';
import { ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo } from './parcelProtectionQuoteRequestShipmentInfoConsigneeInfo';
import { ParcelProtectionQuoteRequestShipmentInfoParcelInfo } from './parcelProtectionQuoteRequestShipmentInfoParcelInfo';
import { ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList } from './parcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList';
import { ParcelProtectionQuoteRequestShipmentInfoShipperInfo } from './parcelProtectionQuoteRequestShipmentInfoShipperInfo';
import { ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress } from './parcelProtectionQuoteRequestShipmentInfoShipperInfoAddress';
import { ParcelProtectionQuoteResponse } from './parcelProtectionQuoteResponse';
import { ParcelProtectionQuoteResponseParcelProtectionFeesBreakup } from './parcelProtectionQuoteResponseParcelProtectionFeesBreakup';
import { ParcelType } from './parcelType';
import { ParcelTypeRules } from './parcelTypeRules';
import { ParcelWeight } from './parcelWeight';
import { PrerequisiteRules } from './prerequisiteRules';
import { RadioActiveParcelDimension } from './radioActiveParcelDimension';
import { RadioActivityDetail } from './radioActivityDetail';
import { RadioNuclideDetail } from './radioNuclideDetail';
import { Rate } from './rate';
import { RealTransactionDetailReport } from './realTransactionDetailReport';
import { SchedulePickup } from './schedulePickup';
import { SchedulePickupPickupSummary } from './schedulePickupPickupSummary';
import { SchedulePickupResponse } from './schedulePickupResponse';
import { SchedulePickupTotalWeight } from './schedulePickupTotalWeight';
import { SearchCriteria } from './searchCriteria';
import { Services } from './services';
import { ServicesParameterRule } from './servicesParameterRule';
import { Shipment } from './shipment';
import { Signatory } from './signatory';
import { SpecialService } from './specialService';
import { SpecialServiceCodes } from './specialServiceCodes';
import { SpecialServicesRule } from './specialServicesRule';
import { Surcharge } from './surcharge';
import { Tax } from './tax';
import { Trackable } from './trackable';
import { TrackingAddress } from './trackingAddress';
import { TrackingResponse } from './trackingResponse';
import { TrackingResponseScanDetailsList } from './trackingResponseScanDetailsList';
import { UnitOfDimension } from './unitOfDimension';
import { UnitOfWeight } from './unitOfWeight';
import { VoidParcelProtectionRequest } from './voidParcelProtectionRequest';
import { VoidParcelProtectionResponse } from './voidParcelProtectionResponse';
import { WeightRules } from './weightRules';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AdditionalAddress.AddressTypeEnum": AdditionalAddress.AddressTypeEnum,
        "Address.StatusEnum": Address.StatusEnum,
        "Address.TaxIdTypeEnum": Address.TaxIdTypeEnum,
        "Carrier": Carrier,
        "CarrierPayment.PartyEnum": CarrierPayment.PartyEnum,
        "CarrierPayment.TypeOfChargeEnum": CarrierPayment.TypeOfChargeEnum,
        "CustomsInfo.OtherTypeEnum": CustomsInfo.OtherTypeEnum,
        "CustomsInfo.ProducerSpecificationEnum": CustomsInfo.ProducerSpecificationEnum,
        "CustomsInfo.ReasonForExportEnum": CustomsInfo.ReasonForExportEnum,
        "CustomsInfo.ShippingDocumentTypeEnum": CustomsInfo.ShippingDocumentTypeEnum,
        "CustomsItem.NetCostMethodEnum": CustomsItem.NetCostMethodEnum,
        "CustomsItem.PreferenceCriterionEnum": CustomsItem.PreferenceCriterionEnum,
        "CustomsItem.ProducerDeterminationEnum": CustomsItem.ProducerDeterminationEnum,
        "Document.ContentTypeEnum": Document.ContentTypeEnum,
        "Document.FileFormatEnum": Document.FileFormatEnum,
        "Document.PrintDialogOptionEnum": Document.PrintDialogOptionEnum,
        "Document.ResolutionEnum": Document.ResolutionEnum,
        "Document.SizeEnum": Document.SizeEnum,
        "ISOCountryCode": ISOCountryCode,
        "Manifest.CarrierEnum": Manifest.CarrierEnum,
        "ParcelType": ParcelType,
        "RadioActiveParcelDimension.UOMEnum": RadioActiveParcelDimension.UOMEnum,
        "Services": Services,
        "Shipment.ShipmentTypeEnum": Shipment.ShipmentTypeEnum,
        "SpecialServiceCodes": SpecialServiceCodes,
        "Trackable": Trackable,
        "TrackingResponse.StatusEnum": TrackingResponse.StatusEnum,
        "TrackingResponse.WeightOUMEnum": TrackingResponse.WeightOUMEnum,
        "UnitOfDimension": UnitOfDimension,
        "UnitOfWeight": UnitOfWeight,
}

let typeMap: {[index: string]: any} = {
    "AddTrackingEvents": AddTrackingEvents,
    "AddTrackingEventsEvents": AddTrackingEventsEvents,
    "AddTrackingEventsReferences": AddTrackingEventsReferences,
    "AdditionalAddress": AdditionalAddress,
    "Address": Address,
    "AddressSuggestionResponse": AddressSuggestionResponse,
    "AddressSuggestionResponseSuggestions": AddressSuggestionResponseSuggestions,
    "AddressVerifySuggest": AddressVerifySuggest,
    "BatteryDetails": BatteryDetails,
    "CancelShipment": CancelShipment,
    "CarrierFacilityRequest": CarrierFacilityRequest,
    "CarrierFacilityRequestAddress": CarrierFacilityRequestAddress,
    "CarrierFacilityResponse": CarrierFacilityResponse,
    "CarrierFacilityResponseCarrierFacilityOptions": CarrierFacilityResponseCarrierFacilityOptions,
    "CarrierFacilityResponseCarrierFacilitySuggestions": CarrierFacilityResponseCarrierFacilitySuggestions,
    "CarrierFacilityResponseFacilityHours": CarrierFacilityResponseFacilityHours,
    "CarrierFacilityResponseFacilityTimings": CarrierFacilityResponseFacilityTimings,
    "CarrierPayment": CarrierPayment,
    "CarrierRule": CarrierRule,
    "CommodityInfo": CommodityInfo,
    "ContainerDetails": ContainerDetails,
    "ContainerManifestResponse": ContainerManifestResponse,
    "ContainerManifestResponseData": ContainerManifestResponseData,
    "CrossBorderQuotesErrors": CrossBorderQuotesErrors,
    "CrossBorderQuotesErrorsErrors": CrossBorderQuotesErrorsErrors,
    "CrossBorderQuotesErrorsErrorsErrors": CrossBorderQuotesErrorsErrorsErrors,
    "CrossBorderQuotesErrorsQuote": CrossBorderQuotesErrorsQuote,
    "CrossBorderQuotesErrorsQuoteLines": CrossBorderQuotesErrorsQuoteLines,
    "CrossBorderQuotesErrorsUnitErrors": CrossBorderQuotesErrorsUnitErrors,
    "CrossBorderQuotesRequest": CrossBorderQuotesRequest,
    "CrossBorderQuotesRequestAttributes": CrossBorderQuotesRequestAttributes,
    "CrossBorderQuotesRequestBasketItems": CrossBorderQuotesRequestBasketItems,
    "CrossBorderQuotesRequestCategories": CrossBorderQuotesRequestCategories,
    "CrossBorderQuotesRequestDescriptions": CrossBorderQuotesRequestDescriptions,
    "CrossBorderQuotesRequestIdentifiers": CrossBorderQuotesRequestIdentifiers,
    "CrossBorderQuotesRequestItemDimension": CrossBorderQuotesRequestItemDimension,
    "CrossBorderQuotesRequestPricing": CrossBorderQuotesRequestPricing,
    "CrossBorderQuotesRequestPricingCodPrice": CrossBorderQuotesRequestPricingCodPrice,
    "CrossBorderQuotesRequestRates": CrossBorderQuotesRequestRates,
    "CrossBorderQuotesRequestUnitWeight": CrossBorderQuotesRequestUnitWeight,
    "CrossBorderQuotesResponse": CrossBorderQuotesResponse,
    "CrossBorderQuotesResponseLineRates": CrossBorderQuotesResponseLineRates,
    "CrossBorderQuotesResponseQuote": CrossBorderQuotesResponseQuote,
    "CrossBorderQuotesResponseQuoteLines": CrossBorderQuotesResponseQuoteLines,
    "CrossBorderQuotesResponseTotalRates": CrossBorderQuotesResponseTotalRates,
    "CrossBorderQuotesResponseUnitRates": CrossBorderQuotesResponseUnitRates,
    "CrossBorderQuotesResponseUnitRatesDeliveryCommitment": CrossBorderQuotesResponseUnitRatesDeliveryCommitment,
    "Customs": Customs,
    "CustomsInfo": CustomsInfo,
    "CustomsItem": CustomsItem,
    "DeliveryCommitment": DeliveryCommitment,
    "DimensionRules": DimensionRules,
    "DimensionRulesMaxParcelDimensions": DimensionRulesMaxParcelDimensions,
    "DimensionRulesMinParcelDimensions": DimensionRulesMinParcelDimensions,
    "Discount": Discount,
    "DocTabItem": DocTabItem,
    "Document": Document,
    "DocumentPage": DocumentPage,
    "Errors": Errors,
    "HazmatDetails": HazmatDetails,
    "InfectiousSubstanceContact": InfectiousSubstanceContact,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2002": InlineResponse2002,
    "Manifest": Manifest,
    "PageRealTransactionDetailReport": PageRealTransactionDetailReport,
    "Parameter": Parameter,
    "Parcel": Parcel,
    "ParcelDimension": ParcelDimension,
    "ParcelProtectionCreateRequest": ParcelProtectionCreateRequest,
    "ParcelProtectionCreateRequestShipmentInfo": ParcelProtectionCreateRequestShipmentInfo,
    "ParcelProtectionCreateRequestShipmentInfoConsigneeInfo": ParcelProtectionCreateRequestShipmentInfoConsigneeInfo,
    "ParcelProtectionCreateRequestShipmentInfoParcelInfo": ParcelProtectionCreateRequestShipmentInfoParcelInfo,
    "ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList": ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList,
    "ParcelProtectionCreateRequestShipmentInfoShipperInfo": ParcelProtectionCreateRequestShipmentInfoShipperInfo,
    "ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress": ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress,
    "ParcelProtectionCreateResponse": ParcelProtectionCreateResponse,
    "ParcelProtectionCreateResponseParcelProtectionFeesBreakup": ParcelProtectionCreateResponseParcelProtectionFeesBreakup,
    "ParcelProtectionPolicyResponse": ParcelProtectionPolicyResponse,
    "ParcelProtectionPolicyResponseContent": ParcelProtectionPolicyResponseContent,
    "ParcelProtectionPolicyResponsePolicyDetails": ParcelProtectionPolicyResponsePolicyDetails,
    "ParcelProtectionPolicyResponseShipmentDetails": ParcelProtectionPolicyResponseShipmentDetails,
    "ParcelProtectionPolicyResponseShipperInfo": ParcelProtectionPolicyResponseShipperInfo,
    "ParcelProtectionPolicyResponseShipperInfoAddress": ParcelProtectionPolicyResponseShipperInfoAddress,
    "ParcelProtectionPolicyResponseSort": ParcelProtectionPolicyResponseSort,
    "ParcelProtectionQuoteRequest": ParcelProtectionQuoteRequest,
    "ParcelProtectionQuoteRequestShipmentInfo": ParcelProtectionQuoteRequestShipmentInfo,
    "ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo": ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo,
    "ParcelProtectionQuoteRequestShipmentInfoParcelInfo": ParcelProtectionQuoteRequestShipmentInfoParcelInfo,
    "ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList": ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList,
    "ParcelProtectionQuoteRequestShipmentInfoShipperInfo": ParcelProtectionQuoteRequestShipmentInfoShipperInfo,
    "ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress": ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress,
    "ParcelProtectionQuoteResponse": ParcelProtectionQuoteResponse,
    "ParcelProtectionQuoteResponseParcelProtectionFeesBreakup": ParcelProtectionQuoteResponseParcelProtectionFeesBreakup,
    "ParcelTypeRules": ParcelTypeRules,
    "ParcelWeight": ParcelWeight,
    "PrerequisiteRules": PrerequisiteRules,
    "RadioActiveParcelDimension": RadioActiveParcelDimension,
    "RadioActivityDetail": RadioActivityDetail,
    "RadioNuclideDetail": RadioNuclideDetail,
    "Rate": Rate,
    "RealTransactionDetailReport": RealTransactionDetailReport,
    "SchedulePickup": SchedulePickup,
    "SchedulePickupPickupSummary": SchedulePickupPickupSummary,
    "SchedulePickupResponse": SchedulePickupResponse,
    "SchedulePickupTotalWeight": SchedulePickupTotalWeight,
    "SearchCriteria": SearchCriteria,
    "ServicesParameterRule": ServicesParameterRule,
    "Shipment": Shipment,
    "Signatory": Signatory,
    "SpecialService": SpecialService,
    "SpecialServicesRule": SpecialServicesRule,
    "Surcharge": Surcharge,
    "Tax": Tax,
    "TrackingAddress": TrackingAddress,
    "TrackingResponse": TrackingResponse,
    "TrackingResponseScanDetailsList": TrackingResponseScanDetailsList,
    "VoidParcelProtectionRequest": VoidParcelProtectionRequest,
    "VoidParcelProtectionResponse": VoidParcelProtectionResponse,
    "WeightRules": WeightRules,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
