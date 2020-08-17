export * from './addressValidationApi';
import { AddressValidationApi } from './addressValidationApi';
export * from './carrierInfoApi';
import { CarrierInfoApi } from './carrierInfoApi';
export * from './containerApi';
import { ContainerApi } from './containerApi';
export * from './crossBorderQuotesApi';
import { CrossBorderQuotesApi } from './crossBorderQuotesApi';
export * from './manifestsApi';
import { ManifestsApi } from './manifestsApi';
export * from './parcelProtectionApi';
import { ParcelProtectionApi } from './parcelProtectionApi';
export * from './pickupApi';
import { PickupApi } from './pickupApi';
export * from './rateParcelsApi';
import { RateParcelsApi } from './rateParcelsApi';
export * from './shipmentApi';
import { ShipmentApi } from './shipmentApi';
export * from './trackingApi';
import { TrackingApi } from './trackingApi';
export * from './transactionReportsApi';
import { TransactionReportsApi } from './transactionReportsApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AddressValidationApi, CarrierInfoApi, ContainerApi, CrossBorderQuotesApi, ManifestsApi, ParcelProtectionApi, PickupApi, RateParcelsApi, ShipmentApi, TrackingApi, TransactionReportsApi];
