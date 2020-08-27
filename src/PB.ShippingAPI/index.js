/**
 * Shipping API
 * Shipping API Sample.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@pb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AddTrackingEvents from './model/AddTrackingEvents';
import AddTrackingEventsEvents from './model/AddTrackingEventsEvents';
import AddTrackingEventsReferences from './model/AddTrackingEventsReferences';
import AdditionalAddress from './model/AdditionalAddress';
import Address from './model/Address';
import AddressSuggestionResponse from './model/AddressSuggestionResponse';
import AddressSuggestionResponseSuggestions from './model/AddressSuggestionResponseSuggestions';
import AddressVerifySuggest from './model/AddressVerifySuggest';
import BatteryDetails from './model/BatteryDetails';
import CancelShipment from './model/CancelShipment';
import Carrier from './model/Carrier';
import CarrierFacilityRequest from './model/CarrierFacilityRequest';
import CarrierFacilityRequestAddress from './model/CarrierFacilityRequestAddress';
import CarrierFacilityResponse from './model/CarrierFacilityResponse';
import CarrierFacilityResponseCarrierFacilityOptions from './model/CarrierFacilityResponseCarrierFacilityOptions';
import CarrierFacilityResponseCarrierFacilitySuggestions from './model/CarrierFacilityResponseCarrierFacilitySuggestions';
import CarrierFacilityResponseFacilityHours from './model/CarrierFacilityResponseFacilityHours';
import CarrierFacilityResponseFacilityTimings from './model/CarrierFacilityResponseFacilityTimings';
import CarrierPayment from './model/CarrierPayment';
import CarrierRule from './model/CarrierRule';
import CommodityInfo from './model/CommodityInfo';
import ContainerDetails from './model/ContainerDetails';
import ContainerManifestResponse from './model/ContainerManifestResponse';
import ContainerManifestResponseData from './model/ContainerManifestResponseData';
import CrossBorderQuotesErrors from './model/CrossBorderQuotesErrors';
import CrossBorderQuotesErrorsErrors from './model/CrossBorderQuotesErrorsErrors';
import CrossBorderQuotesErrorsErrorsErrors from './model/CrossBorderQuotesErrorsErrorsErrors';
import CrossBorderQuotesErrorsQuote from './model/CrossBorderQuotesErrorsQuote';
import CrossBorderQuotesErrorsQuoteLines from './model/CrossBorderQuotesErrorsQuoteLines';
import CrossBorderQuotesErrorsUnitErrors from './model/CrossBorderQuotesErrorsUnitErrors';
import CrossBorderQuotesRequest from './model/CrossBorderQuotesRequest';
import CrossBorderQuotesRequestAttributes from './model/CrossBorderQuotesRequestAttributes';
import CrossBorderQuotesRequestBasketItems from './model/CrossBorderQuotesRequestBasketItems';
import CrossBorderQuotesRequestCategories from './model/CrossBorderQuotesRequestCategories';
import CrossBorderQuotesRequestDescriptions from './model/CrossBorderQuotesRequestDescriptions';
import CrossBorderQuotesRequestIdentifiers from './model/CrossBorderQuotesRequestIdentifiers';
import CrossBorderQuotesRequestItemDimension from './model/CrossBorderQuotesRequestItemDimension';
import CrossBorderQuotesRequestPricing from './model/CrossBorderQuotesRequestPricing';
import CrossBorderQuotesRequestPricingCodPrice from './model/CrossBorderQuotesRequestPricingCodPrice';
import CrossBorderQuotesRequestRates from './model/CrossBorderQuotesRequestRates';
import CrossBorderQuotesRequestUnitWeight from './model/CrossBorderQuotesRequestUnitWeight';
import CrossBorderQuotesResponse from './model/CrossBorderQuotesResponse';
import CrossBorderQuotesResponseLineRates from './model/CrossBorderQuotesResponseLineRates';
import CrossBorderQuotesResponseQuote from './model/CrossBorderQuotesResponseQuote';
import CrossBorderQuotesResponseQuoteLines from './model/CrossBorderQuotesResponseQuoteLines';
import CrossBorderQuotesResponseTotalRates from './model/CrossBorderQuotesResponseTotalRates';
import CrossBorderQuotesResponseUnitRates from './model/CrossBorderQuotesResponseUnitRates';
import CrossBorderQuotesResponseUnitRatesDeliveryCommitment from './model/CrossBorderQuotesResponseUnitRatesDeliveryCommitment';
import Customs from './model/Customs';
import CustomsInfo from './model/CustomsInfo';
import CustomsItem from './model/CustomsItem';
import DeliveryCommitment from './model/DeliveryCommitment';
import DimensionRules from './model/DimensionRules';
import DimensionRulesMaxParcelDimensions from './model/DimensionRulesMaxParcelDimensions';
import DimensionRulesMinParcelDimensions from './model/DimensionRulesMinParcelDimensions';
import Discount from './model/Discount';
import DocTabItem from './model/DocTabItem';
import Document from './model/Document';
import DocumentPage from './model/DocumentPage';
import Errors from './model/Errors';
import HazmatDetails from './model/HazmatDetails';
import ISOCountryCode from './model/ISOCountryCode';
import InfectiousSubstanceContact from './model/InfectiousSubstanceContact';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import Manifest from './model/Manifest';
import PageRealTransactionDetailReport from './model/PageRealTransactionDetailReport';
import Parameter from './model/Parameter';
import Parcel from './model/Parcel';
import ParcelDimension from './model/ParcelDimension';
import ParcelProtectionCreateRequest from './model/ParcelProtectionCreateRequest';
import ParcelProtectionCreateRequestShipmentInfo from './model/ParcelProtectionCreateRequestShipmentInfo';
import ParcelProtectionCreateRequestShipmentInfoConsigneeInfo from './model/ParcelProtectionCreateRequestShipmentInfoConsigneeInfo';
import ParcelProtectionCreateRequestShipmentInfoParcelInfo from './model/ParcelProtectionCreateRequestShipmentInfoParcelInfo';
import ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList from './model/ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList';
import ParcelProtectionCreateRequestShipmentInfoShipperInfo from './model/ParcelProtectionCreateRequestShipmentInfoShipperInfo';
import ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress from './model/ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress';
import ParcelProtectionCreateResponse from './model/ParcelProtectionCreateResponse';
import ParcelProtectionCreateResponseParcelProtectionFeesBreakup from './model/ParcelProtectionCreateResponseParcelProtectionFeesBreakup';
import ParcelProtectionPolicyResponse from './model/ParcelProtectionPolicyResponse';
import ParcelProtectionPolicyResponseContent from './model/ParcelProtectionPolicyResponseContent';
import ParcelProtectionPolicyResponsePolicyDetails from './model/ParcelProtectionPolicyResponsePolicyDetails';
import ParcelProtectionPolicyResponseShipmentDetails from './model/ParcelProtectionPolicyResponseShipmentDetails';
import ParcelProtectionPolicyResponseShipperInfo from './model/ParcelProtectionPolicyResponseShipperInfo';
import ParcelProtectionPolicyResponseShipperInfoAddress from './model/ParcelProtectionPolicyResponseShipperInfoAddress';
import ParcelProtectionPolicyResponseSort from './model/ParcelProtectionPolicyResponseSort';
import ParcelProtectionQuoteRequest from './model/ParcelProtectionQuoteRequest';
import ParcelProtectionQuoteRequestShipmentInfo from './model/ParcelProtectionQuoteRequestShipmentInfo';
import ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo from './model/ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo';
import ParcelProtectionQuoteRequestShipmentInfoParcelInfo from './model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo';
import ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList from './model/ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList';
import ParcelProtectionQuoteRequestShipmentInfoShipperInfo from './model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo';
import ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress from './model/ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress';
import ParcelProtectionQuoteResponse from './model/ParcelProtectionQuoteResponse';
import ParcelProtectionQuoteResponseParcelProtectionFeesBreakup from './model/ParcelProtectionQuoteResponseParcelProtectionFeesBreakup';
import ParcelType from './model/ParcelType';
import ParcelTypeRules from './model/ParcelTypeRules';
import ParcelWeight from './model/ParcelWeight';
import PrerequisiteRules from './model/PrerequisiteRules';
import RadioActiveParcelDimension from './model/RadioActiveParcelDimension';
import RadioActivityDetail from './model/RadioActivityDetail';
import RadioNuclideDetail from './model/RadioNuclideDetail';
import Rate from './model/Rate';
import RealTransactionDetailReport from './model/RealTransactionDetailReport';
import SchedulePickup from './model/SchedulePickup';
import SchedulePickupPickupSummary from './model/SchedulePickupPickupSummary';
import SchedulePickupResponse from './model/SchedulePickupResponse';
import SchedulePickupTotalWeight from './model/SchedulePickupTotalWeight';
import SearchCriteria from './model/SearchCriteria';
import Services from './model/Services';
import ServicesParameterRule from './model/ServicesParameterRule';
import Shipment from './model/Shipment';
import Signatory from './model/Signatory';
import SpecialService from './model/SpecialService';
import SpecialServiceCodes from './model/SpecialServiceCodes';
import SpecialServicesRule from './model/SpecialServicesRule';
import Surcharge from './model/Surcharge';
import Tax from './model/Tax';
import Trackable from './model/Trackable';
import TrackingAddress from './model/TrackingAddress';
import TrackingResponse from './model/TrackingResponse';
import TrackingResponseScanDetailsList from './model/TrackingResponseScanDetailsList';
import UnitOfDimension from './model/UnitOfDimension';
import UnitOfWeight from './model/UnitOfWeight';
import VoidParcelProtectionRequest from './model/VoidParcelProtectionRequest';
import VoidParcelProtectionResponse from './model/VoidParcelProtectionResponse';
import WeightRules from './model/WeightRules';
import AddressValidationApi from './api/AddressValidationApi';
import CarrierInfoApi from './api/CarrierInfoApi';
import ContainerApi from './api/ContainerApi';
import CrossBorderQuotesApi from './api/CrossBorderQuotesApi';
import ManifestsApi from './api/ManifestsApi';
import ParcelProtectionApi from './api/ParcelProtectionApi';
import PickupApi from './api/PickupApi';
import RateParcelsApi from './api/RateParcelsApi';
import ShipmentApi from './api/ShipmentApi';
import TrackingApi from './api/TrackingApi';
import TransactionReportsApi from './api/TransactionReportsApi';


/**
* Shipping_API_Sample_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ShippingApi = require('PB.ShippingAPI/index'); // See note below*.
* var xxxSvc = new ShippingApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ShippingApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['PB.ShippingAPI/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ShippingApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ShippingApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module PB.ShippingAPI/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:PB.ShippingAPI/ApiClient}
     */
    ApiClient,

    /**
     * The AddTrackingEvents model constructor.
     * @property {module:PB.ShippingAPI/model/AddTrackingEvents}
     */
    AddTrackingEvents,

    /**
     * The AddTrackingEventsEvents model constructor.
     * @property {module:PB.ShippingAPI/model/AddTrackingEventsEvents}
     */
    AddTrackingEventsEvents,

    /**
     * The AddTrackingEventsReferences model constructor.
     * @property {module:PB.ShippingAPI/model/AddTrackingEventsReferences}
     */
    AddTrackingEventsReferences,

    /**
     * The AdditionalAddress model constructor.
     * @property {module:PB.ShippingAPI/model/AdditionalAddress}
     */
    AdditionalAddress,

    /**
     * The Address model constructor.
     * @property {module:PB.ShippingAPI/model/Address}
     */
    Address,

    /**
     * The AddressSuggestionResponse model constructor.
     * @property {module:PB.ShippingAPI/model/AddressSuggestionResponse}
     */
    AddressSuggestionResponse,

    /**
     * The AddressSuggestionResponseSuggestions model constructor.
     * @property {module:PB.ShippingAPI/model/AddressSuggestionResponseSuggestions}
     */
    AddressSuggestionResponseSuggestions,

    /**
     * The AddressVerifySuggest model constructor.
     * @property {module:PB.ShippingAPI/model/AddressVerifySuggest}
     */
    AddressVerifySuggest,

    /**
     * The BatteryDetails model constructor.
     * @property {module:PB.ShippingAPI/model/BatteryDetails}
     */
    BatteryDetails,

    /**
     * The CancelShipment model constructor.
     * @property {module:PB.ShippingAPI/model/CancelShipment}
     */
    CancelShipment,

    /**
     * The Carrier model constructor.
     * @property {module:PB.ShippingAPI/model/Carrier}
     */
    Carrier,

    /**
     * The CarrierFacilityRequest model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityRequest}
     */
    CarrierFacilityRequest,

    /**
     * The CarrierFacilityRequestAddress model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityRequestAddress}
     */
    CarrierFacilityRequestAddress,

    /**
     * The CarrierFacilityResponse model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityResponse}
     */
    CarrierFacilityResponse,

    /**
     * The CarrierFacilityResponseCarrierFacilityOptions model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions}
     */
    CarrierFacilityResponseCarrierFacilityOptions,

    /**
     * The CarrierFacilityResponseCarrierFacilitySuggestions model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilitySuggestions}
     */
    CarrierFacilityResponseCarrierFacilitySuggestions,

    /**
     * The CarrierFacilityResponseFacilityHours model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityHours}
     */
    CarrierFacilityResponseFacilityHours,

    /**
     * The CarrierFacilityResponseFacilityTimings model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierFacilityResponseFacilityTimings}
     */
    CarrierFacilityResponseFacilityTimings,

    /**
     * The CarrierPayment model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierPayment}
     */
    CarrierPayment,

    /**
     * The CarrierRule model constructor.
     * @property {module:PB.ShippingAPI/model/CarrierRule}
     */
    CarrierRule,

    /**
     * The CommodityInfo model constructor.
     * @property {module:PB.ShippingAPI/model/CommodityInfo}
     */
    CommodityInfo,

    /**
     * The ContainerDetails model constructor.
     * @property {module:PB.ShippingAPI/model/ContainerDetails}
     */
    ContainerDetails,

    /**
     * The ContainerManifestResponse model constructor.
     * @property {module:PB.ShippingAPI/model/ContainerManifestResponse}
     */
    ContainerManifestResponse,

    /**
     * The ContainerManifestResponseData model constructor.
     * @property {module:PB.ShippingAPI/model/ContainerManifestResponseData}
     */
    ContainerManifestResponseData,

    /**
     * The CrossBorderQuotesErrors model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesErrors}
     */
    CrossBorderQuotesErrors,

    /**
     * The CrossBorderQuotesErrorsErrors model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrors}
     */
    CrossBorderQuotesErrorsErrors,

    /**
     * The CrossBorderQuotesErrorsErrorsErrors model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrorsErrors}
     */
    CrossBorderQuotesErrorsErrorsErrors,

    /**
     * The CrossBorderQuotesErrorsQuote model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsQuote}
     */
    CrossBorderQuotesErrorsQuote,

    /**
     * The CrossBorderQuotesErrorsQuoteLines model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsQuoteLines}
     */
    CrossBorderQuotesErrorsQuoteLines,

    /**
     * The CrossBorderQuotesErrorsUnitErrors model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsUnitErrors}
     */
    CrossBorderQuotesErrorsUnitErrors,

    /**
     * The CrossBorderQuotesRequest model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequest}
     */
    CrossBorderQuotesRequest,

    /**
     * The CrossBorderQuotesRequestAttributes model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestAttributes}
     */
    CrossBorderQuotesRequestAttributes,

    /**
     * The CrossBorderQuotesRequestBasketItems model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestBasketItems}
     */
    CrossBorderQuotesRequestBasketItems,

    /**
     * The CrossBorderQuotesRequestCategories model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestCategories}
     */
    CrossBorderQuotesRequestCategories,

    /**
     * The CrossBorderQuotesRequestDescriptions model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestDescriptions}
     */
    CrossBorderQuotesRequestDescriptions,

    /**
     * The CrossBorderQuotesRequestIdentifiers model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestIdentifiers}
     */
    CrossBorderQuotesRequestIdentifiers,

    /**
     * The CrossBorderQuotesRequestItemDimension model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestItemDimension}
     */
    CrossBorderQuotesRequestItemDimension,

    /**
     * The CrossBorderQuotesRequestPricing model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestPricing}
     */
    CrossBorderQuotesRequestPricing,

    /**
     * The CrossBorderQuotesRequestPricingCodPrice model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestPricingCodPrice}
     */
    CrossBorderQuotesRequestPricingCodPrice,

    /**
     * The CrossBorderQuotesRequestRates model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestRates}
     */
    CrossBorderQuotesRequestRates,

    /**
     * The CrossBorderQuotesRequestUnitWeight model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesRequestUnitWeight}
     */
    CrossBorderQuotesRequestUnitWeight,

    /**
     * The CrossBorderQuotesResponse model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponse}
     */
    CrossBorderQuotesResponse,

    /**
     * The CrossBorderQuotesResponseLineRates model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponseLineRates}
     */
    CrossBorderQuotesResponseLineRates,

    /**
     * The CrossBorderQuotesResponseQuote model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponseQuote}
     */
    CrossBorderQuotesResponseQuote,

    /**
     * The CrossBorderQuotesResponseQuoteLines model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponseQuoteLines}
     */
    CrossBorderQuotesResponseQuoteLines,

    /**
     * The CrossBorderQuotesResponseTotalRates model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponseTotalRates}
     */
    CrossBorderQuotesResponseTotalRates,

    /**
     * The CrossBorderQuotesResponseUnitRates model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponseUnitRates}
     */
    CrossBorderQuotesResponseUnitRates,

    /**
     * The CrossBorderQuotesResponseUnitRatesDeliveryCommitment model constructor.
     * @property {module:PB.ShippingAPI/model/CrossBorderQuotesResponseUnitRatesDeliveryCommitment}
     */
    CrossBorderQuotesResponseUnitRatesDeliveryCommitment,

    /**
     * The Customs model constructor.
     * @property {module:PB.ShippingAPI/model/Customs}
     */
    Customs,

    /**
     * The CustomsInfo model constructor.
     * @property {module:PB.ShippingAPI/model/CustomsInfo}
     */
    CustomsInfo,

    /**
     * The CustomsItem model constructor.
     * @property {module:PB.ShippingAPI/model/CustomsItem}
     */
    CustomsItem,

    /**
     * The DeliveryCommitment model constructor.
     * @property {module:PB.ShippingAPI/model/DeliveryCommitment}
     */
    DeliveryCommitment,

    /**
     * The DimensionRules model constructor.
     * @property {module:PB.ShippingAPI/model/DimensionRules}
     */
    DimensionRules,

    /**
     * The DimensionRulesMaxParcelDimensions model constructor.
     * @property {module:PB.ShippingAPI/model/DimensionRulesMaxParcelDimensions}
     */
    DimensionRulesMaxParcelDimensions,

    /**
     * The DimensionRulesMinParcelDimensions model constructor.
     * @property {module:PB.ShippingAPI/model/DimensionRulesMinParcelDimensions}
     */
    DimensionRulesMinParcelDimensions,

    /**
     * The Discount model constructor.
     * @property {module:PB.ShippingAPI/model/Discount}
     */
    Discount,

    /**
     * The DocTabItem model constructor.
     * @property {module:PB.ShippingAPI/model/DocTabItem}
     */
    DocTabItem,

    /**
     * The Document model constructor.
     * @property {module:PB.ShippingAPI/model/Document}
     */
    Document,

    /**
     * The DocumentPage model constructor.
     * @property {module:PB.ShippingAPI/model/DocumentPage}
     */
    DocumentPage,

    /**
     * The Errors model constructor.
     * @property {module:PB.ShippingAPI/model/Errors}
     */
    Errors,

    /**
     * The HazmatDetails model constructor.
     * @property {module:PB.ShippingAPI/model/HazmatDetails}
     */
    HazmatDetails,

    /**
     * The ISOCountryCode model constructor.
     * @property {module:PB.ShippingAPI/model/ISOCountryCode}
     */
    ISOCountryCode,

    /**
     * The InfectiousSubstanceContact model constructor.
     * @property {module:PB.ShippingAPI/model/InfectiousSubstanceContact}
     */
    InfectiousSubstanceContact,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:PB.ShippingAPI/model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:PB.ShippingAPI/model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:PB.ShippingAPI/model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The Manifest model constructor.
     * @property {module:PB.ShippingAPI/model/Manifest}
     */
    Manifest,

    /**
     * The PageRealTransactionDetailReport model constructor.
     * @property {module:PB.ShippingAPI/model/PageRealTransactionDetailReport}
     */
    PageRealTransactionDetailReport,

    /**
     * The Parameter model constructor.
     * @property {module:PB.ShippingAPI/model/Parameter}
     */
    Parameter,

    /**
     * The Parcel model constructor.
     * @property {module:PB.ShippingAPI/model/Parcel}
     */
    Parcel,

    /**
     * The ParcelDimension model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelDimension}
     */
    ParcelDimension,

    /**
     * The ParcelProtectionCreateRequest model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequest}
     */
    ParcelProtectionCreateRequest,

    /**
     * The ParcelProtectionCreateRequestShipmentInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfo}
     */
    ParcelProtectionCreateRequestShipmentInfo,

    /**
     * The ParcelProtectionCreateRequestShipmentInfoConsigneeInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoConsigneeInfo}
     */
    ParcelProtectionCreateRequestShipmentInfoConsigneeInfo,

    /**
     * The ParcelProtectionCreateRequestShipmentInfoParcelInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfo}
     */
    ParcelProtectionCreateRequestShipmentInfoParcelInfo,

    /**
     * The ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList}
     */
    ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList,

    /**
     * The ParcelProtectionCreateRequestShipmentInfoShipperInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoShipperInfo}
     */
    ParcelProtectionCreateRequestShipmentInfoShipperInfo,

    /**
     * The ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress}
     */
    ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress,

    /**
     * The ParcelProtectionCreateResponse model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateResponse}
     */
    ParcelProtectionCreateResponse,

    /**
     * The ParcelProtectionCreateResponseParcelProtectionFeesBreakup model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionCreateResponseParcelProtectionFeesBreakup}
     */
    ParcelProtectionCreateResponseParcelProtectionFeesBreakup,

    /**
     * The ParcelProtectionPolicyResponse model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse}
     */
    ParcelProtectionPolicyResponse,

    /**
     * The ParcelProtectionPolicyResponseContent model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseContent}
     */
    ParcelProtectionPolicyResponseContent,

    /**
     * The ParcelProtectionPolicyResponsePolicyDetails model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponsePolicyDetails}
     */
    ParcelProtectionPolicyResponsePolicyDetails,

    /**
     * The ParcelProtectionPolicyResponseShipmentDetails model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipmentDetails}
     */
    ParcelProtectionPolicyResponseShipmentDetails,

    /**
     * The ParcelProtectionPolicyResponseShipperInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfo}
     */
    ParcelProtectionPolicyResponseShipperInfo,

    /**
     * The ParcelProtectionPolicyResponseShipperInfoAddress model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseShipperInfoAddress}
     */
    ParcelProtectionPolicyResponseShipperInfoAddress,

    /**
     * The ParcelProtectionPolicyResponseSort model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponseSort}
     */
    ParcelProtectionPolicyResponseSort,

    /**
     * The ParcelProtectionQuoteRequest model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequest}
     */
    ParcelProtectionQuoteRequest,

    /**
     * The ParcelProtectionQuoteRequestShipmentInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfo}
     */
    ParcelProtectionQuoteRequestShipmentInfo,

    /**
     * The ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo}
     */
    ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo,

    /**
     * The ParcelProtectionQuoteRequestShipmentInfoParcelInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo}
     */
    ParcelProtectionQuoteRequestShipmentInfoParcelInfo,

    /**
     * The ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList}
     */
    ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList,

    /**
     * The ParcelProtectionQuoteRequestShipmentInfoShipperInfo model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo}
     */
    ParcelProtectionQuoteRequestShipmentInfoShipperInfo,

    /**
     * The ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress}
     */
    ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress,

    /**
     * The ParcelProtectionQuoteResponse model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteResponse}
     */
    ParcelProtectionQuoteResponse,

    /**
     * The ParcelProtectionQuoteResponseParcelProtectionFeesBreakup model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelProtectionQuoteResponseParcelProtectionFeesBreakup}
     */
    ParcelProtectionQuoteResponseParcelProtectionFeesBreakup,

    /**
     * The ParcelType model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelType}
     */
    ParcelType,

    /**
     * The ParcelTypeRules model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelTypeRules}
     */
    ParcelTypeRules,

    /**
     * The ParcelWeight model constructor.
     * @property {module:PB.ShippingAPI/model/ParcelWeight}
     */
    ParcelWeight,

    /**
     * The PrerequisiteRules model constructor.
     * @property {module:PB.ShippingAPI/model/PrerequisiteRules}
     */
    PrerequisiteRules,

    /**
     * The RadioActiveParcelDimension model constructor.
     * @property {module:PB.ShippingAPI/model/RadioActiveParcelDimension}
     */
    RadioActiveParcelDimension,

    /**
     * The RadioActivityDetail model constructor.
     * @property {module:PB.ShippingAPI/model/RadioActivityDetail}
     */
    RadioActivityDetail,

    /**
     * The RadioNuclideDetail model constructor.
     * @property {module:PB.ShippingAPI/model/RadioNuclideDetail}
     */
    RadioNuclideDetail,

    /**
     * The Rate model constructor.
     * @property {module:PB.ShippingAPI/model/Rate}
     */
    Rate,

    /**
     * The RealTransactionDetailReport model constructor.
     * @property {module:PB.ShippingAPI/model/RealTransactionDetailReport}
     */
    RealTransactionDetailReport,

    /**
     * The SchedulePickup model constructor.
     * @property {module:PB.ShippingAPI/model/SchedulePickup}
     */
    SchedulePickup,

    /**
     * The SchedulePickupPickupSummary model constructor.
     * @property {module:PB.ShippingAPI/model/SchedulePickupPickupSummary}
     */
    SchedulePickupPickupSummary,

    /**
     * The SchedulePickupResponse model constructor.
     * @property {module:PB.ShippingAPI/model/SchedulePickupResponse}
     */
    SchedulePickupResponse,

    /**
     * The SchedulePickupTotalWeight model constructor.
     * @property {module:PB.ShippingAPI/model/SchedulePickupTotalWeight}
     */
    SchedulePickupTotalWeight,

    /**
     * The SearchCriteria model constructor.
     * @property {module:PB.ShippingAPI/model/SearchCriteria}
     */
    SearchCriteria,

    /**
     * The Services model constructor.
     * @property {module:PB.ShippingAPI/model/Services}
     */
    Services,

    /**
     * The ServicesParameterRule model constructor.
     * @property {module:PB.ShippingAPI/model/ServicesParameterRule}
     */
    ServicesParameterRule,

    /**
     * The Shipment model constructor.
     * @property {module:PB.ShippingAPI/model/Shipment}
     */
    Shipment,

    /**
     * The Signatory model constructor.
     * @property {module:PB.ShippingAPI/model/Signatory}
     */
    Signatory,

    /**
     * The SpecialService model constructor.
     * @property {module:PB.ShippingAPI/model/SpecialService}
     */
    SpecialService,

    /**
     * The SpecialServiceCodes model constructor.
     * @property {module:PB.ShippingAPI/model/SpecialServiceCodes}
     */
    SpecialServiceCodes,

    /**
     * The SpecialServicesRule model constructor.
     * @property {module:PB.ShippingAPI/model/SpecialServicesRule}
     */
    SpecialServicesRule,

    /**
     * The Surcharge model constructor.
     * @property {module:PB.ShippingAPI/model/Surcharge}
     */
    Surcharge,

    /**
     * The Tax model constructor.
     * @property {module:PB.ShippingAPI/model/Tax}
     */
    Tax,

    /**
     * The Trackable model constructor.
     * @property {module:PB.ShippingAPI/model/Trackable}
     */
    Trackable,

    /**
     * The TrackingAddress model constructor.
     * @property {module:PB.ShippingAPI/model/TrackingAddress}
     */
    TrackingAddress,

    /**
     * The TrackingResponse model constructor.
     * @property {module:PB.ShippingAPI/model/TrackingResponse}
     */
    TrackingResponse,

    /**
     * The TrackingResponseScanDetailsList model constructor.
     * @property {module:PB.ShippingAPI/model/TrackingResponseScanDetailsList}
     */
    TrackingResponseScanDetailsList,

    /**
     * The UnitOfDimension model constructor.
     * @property {module:PB.ShippingAPI/model/UnitOfDimension}
     */
    UnitOfDimension,

    /**
     * The UnitOfWeight model constructor.
     * @property {module:PB.ShippingAPI/model/UnitOfWeight}
     */
    UnitOfWeight,

    /**
     * The VoidParcelProtectionRequest model constructor.
     * @property {module:PB.ShippingAPI/model/VoidParcelProtectionRequest}
     */
    VoidParcelProtectionRequest,

    /**
     * The VoidParcelProtectionResponse model constructor.
     * @property {module:PB.ShippingAPI/model/VoidParcelProtectionResponse}
     */
    VoidParcelProtectionResponse,

    /**
     * The WeightRules model constructor.
     * @property {module:PB.ShippingAPI/model/WeightRules}
     */
    WeightRules,

    /**
    * The AddressValidationApi service constructor.
    * @property {module:PB.ShippingAPI/api/AddressValidationApi}
    */
    AddressValidationApi,

    /**
    * The CarrierInfoApi service constructor.
    * @property {module:PB.ShippingAPI/api/CarrierInfoApi}
    */
    CarrierInfoApi,

    /**
    * The ContainerApi service constructor.
    * @property {module:PB.ShippingAPI/api/ContainerApi}
    */
    ContainerApi,

    /**
    * The CrossBorderQuotesApi service constructor.
    * @property {module:PB.ShippingAPI/api/CrossBorderQuotesApi}
    */
    CrossBorderQuotesApi,

    /**
    * The ManifestsApi service constructor.
    * @property {module:PB.ShippingAPI/api/ManifestsApi}
    */
    ManifestsApi,

    /**
    * The ParcelProtectionApi service constructor.
    * @property {module:PB.ShippingAPI/api/ParcelProtectionApi}
    */
    ParcelProtectionApi,

    /**
    * The PickupApi service constructor.
    * @property {module:PB.ShippingAPI/api/PickupApi}
    */
    PickupApi,

    /**
    * The RateParcelsApi service constructor.
    * @property {module:PB.ShippingAPI/api/RateParcelsApi}
    */
    RateParcelsApi,

    /**
    * The ShipmentApi service constructor.
    * @property {module:PB.ShippingAPI/api/ShipmentApi}
    */
    ShipmentApi,

    /**
    * The TrackingApi service constructor.
    * @property {module:PB.ShippingAPI/api/TrackingApi}
    */
    TrackingApi,

    /**
    * The TransactionReportsApi service constructor.
    * @property {module:PB.ShippingAPI/api/TransactionReportsApi}
    */
    TransactionReportsApi
};
