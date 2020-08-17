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
import { AddTrackingEvents } from '../model/addTrackingEvents';
import { Errors } from '../model/errors';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { TrackingResponse } from '../model/trackingResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api-sandbox.pitneybowes.com/shippingservices';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TrackingApiApiKeys {
}

export class TrackingApi {
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

    public setApiKey(key: TrackingApiApiKeys, value: string) {
        (this.authentications as any)[TrackingApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oAuth2ClientCredentials.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary getTrackingDetails
     * @param addTrackingEvents add track event
     * @param xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
     */
    public async addTrackingEvents (addTrackingEvents: AddTrackingEvents, xPBUnifiedErrorStructure?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InlineResponse2002;  }> {
        const localVarPath = this.basePath + '/v2/track/events';
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

        // verify required parameter 'addTrackingEvents' is not null or undefined
        if (addTrackingEvents === null || addTrackingEvents === undefined) {
            throw new Error('Required parameter addTrackingEvents was null or undefined when calling addTrackingEvents.');
        }

        localVarHeaderParams['X-PB-UnifiedErrorStructure'] = ObjectSerializer.serialize(xPBUnifiedErrorStructure, "boolean");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(addTrackingEvents, "AddTrackingEvents")
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
            return new Promise<{ response: http.IncomingMessage; body: InlineResponse2002;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "InlineResponse2002");
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
    /**
     * 
     * @summary getTrackingDetails
     * @param trackingNumber The tracking number for the shipment.
     * @param packageIdentifierType packageIdentifierType
     * @param carrier carrier
     * @param xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
     */
    public async getTrackingDetails (trackingNumber: string, packageIdentifierType: string, carrier: 'USPS' | 'IMB' | 'UPS' | 'PBI' | 'FedEx' | 'NEWGISTICS' | 'FDR', xPBUnifiedErrorStructure?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TrackingResponse;  }> {
        const localVarPath = this.basePath + '/v1/tracking/{trackingNumber}'
            .replace('{' + 'trackingNumber' + '}', encodeURIComponent(String(trackingNumber)));
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

        // verify required parameter 'trackingNumber' is not null or undefined
        if (trackingNumber === null || trackingNumber === undefined) {
            throw new Error('Required parameter trackingNumber was null or undefined when calling getTrackingDetails.');
        }

        // verify required parameter 'packageIdentifierType' is not null or undefined
        if (packageIdentifierType === null || packageIdentifierType === undefined) {
            throw new Error('Required parameter packageIdentifierType was null or undefined when calling getTrackingDetails.');
        }

        // verify required parameter 'carrier' is not null or undefined
        if (carrier === null || carrier === undefined) {
            throw new Error('Required parameter carrier was null or undefined when calling getTrackingDetails.');
        }

        if (packageIdentifierType !== undefined) {
            localVarQueryParameters['packageIdentifierType'] = ObjectSerializer.serialize(packageIdentifierType, "string");
        }

        if (carrier !== undefined) {
            localVarQueryParameters['carrier'] = ObjectSerializer.serialize(carrier, "'USPS' | 'IMB' | 'UPS' | 'PBI' | 'FedEx' | 'NEWGISTICS' | 'FDR'");
        }

        localVarHeaderParams['X-PB-UnifiedErrorStructure'] = ObjectSerializer.serialize(xPBUnifiedErrorStructure, "boolean");
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
            return new Promise<{ response: http.IncomingMessage; body: TrackingResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "TrackingResponse");
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
