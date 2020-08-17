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
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { Errors } from '../model/errors';
import { PageRealTransactionDetailReport } from '../model/pageRealTransactionDetailReport';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api-sandbox.pitneybowes.com/shippingservices';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TransactionReportsApiApiKeys {
}

export class TransactionReportsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oAuth2ClientCredentials': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TransactionReportsApiApiKeys, value: string) {
        (this.authentications as any)[TransactionReportsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oAuth2ClientCredentials.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary This operation retrieves all transactions for a specified period of time.
     * @param developerId developerId
     * @param xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
     * @param fromDate fromDate
     * @param shipDetails 
     * @param page 
     * @param size 
     * @param printStatus printStatus
     * @param toDate toDate
     * @param transactionType transactionType
     * @param merchantId The value of the postalReportingNumber element in the [merchant object](https://shipping.pitneybowes.com/reference/resource-objects.html). This value is also the merchant\&#39;s Shipper ID.
     * @param sort Defines a property to sort on and the sort order. Sort order can be ascending (asc) or descending (desc). Use the following form-  * **sort&#x3D;&lt;property_name&gt;,&lt;sort_direction&gt;** For example- **sort&#x3D;transactionId,desc** 
     * @param parcelTrackingNumber Parcel tracking number of the shipment.
     * @param transactionId The unique string that identifies all the transactions associated with a given shipment. The string comprises the developer ID and the shipment\&#39;s X-PB-TransactionId, separated by an underscore (_). For example-  * **transactionId&#x3D;44397664_ad5aa07-ad7414-a78a-c22b3**
     */
    public async getTransactionReport (developerId: string, xPBUnifiedErrorStructure?: boolean, fromDate?: Date, shipDetails?: 0 | 1, page?: number, size?: number, printStatus?: 'SBR' | 'SBRPrinted' | 'SBRCharged', toDate?: Date, transactionType?: 'POSTAGE FUND' | 'POSTAGE PRINT' | 'POSTAGE REFUND' | 'APV-POSTAGE ALL' | 'APV-POSTAGE OVERPAID' | 'APV-POSTAGE UNDERPAID', merchantId?: string, sort?: string, parcelTrackingNumber?: string, transactionId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PageRealTransactionDetailReport;  }> {
        const localVarPath = this.basePath + '/v4/ledger/developers/{developerId}/transactions/reports'
            .replace('{' + 'developerId' + '}', encodeURIComponent(String(developerId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'developerId' is not null or undefined
        if (developerId === null || developerId === undefined) {
            throw new Error('Required parameter developerId was null or undefined when calling getTransactionReport.');
        }

        if (fromDate !== undefined) {
            localVarQueryParameters['fromDate'] = ObjectSerializer.serialize(fromDate, "Date");
        }

        if (shipDetails !== undefined) {
            localVarQueryParameters['shipDetails'] = ObjectSerializer.serialize(shipDetails, "0 | 1");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (size !== undefined) {
            localVarQueryParameters['size'] = ObjectSerializer.serialize(size, "number");
        }

        if (printStatus !== undefined) {
            localVarQueryParameters['printStatus'] = ObjectSerializer.serialize(printStatus, "'SBR' | 'SBRPrinted' | 'SBRCharged'");
        }

        if (toDate !== undefined) {
            localVarQueryParameters['toDate'] = ObjectSerializer.serialize(toDate, "Date");
        }

        if (transactionType !== undefined) {
            localVarQueryParameters['transactionType'] = ObjectSerializer.serialize(transactionType, "'POSTAGE FUND' | 'POSTAGE PRINT' | 'POSTAGE REFUND' | 'APV-POSTAGE ALL' | 'APV-POSTAGE OVERPAID' | 'APV-POSTAGE UNDERPAID'");
        }

        if (merchantId !== undefined) {
            localVarQueryParameters['merchantId'] = ObjectSerializer.serialize(merchantId, "string");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "string");
        }

        if (parcelTrackingNumber !== undefined) {
            localVarQueryParameters['parcelTrackingNumber'] = ObjectSerializer.serialize(parcelTrackingNumber, "string");
        }

        localVarHeaderParams['X-PB-UnifiedErrorStructure'] = ObjectSerializer.serialize(xPBUnifiedErrorStructure, "boolean");
        localVarHeaderParams['transactionId'] = ObjectSerializer.serialize(transactionId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oAuth2ClientCredentials.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oAuth2ClientCredentials.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PageRealTransactionDetailReport;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PageRealTransactionDetailReport");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
