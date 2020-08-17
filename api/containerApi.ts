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
import { ContainerManifestResponse } from '../model/containerManifestResponse';
import { Manifest } from '../model/manifest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api-sandbox.pitneybowes.com/shippingservices';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ContainerApiApiKeys {
}

export class ContainerApi {
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

    public setApiKey(key: ContainerApiApiKeys, value: string) {
        (this.authentications as any)[ContainerApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oAuth2ClientCredentials.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This operation prints a label for the shipment of containerized parcels destined for a Pitney Bowes warehouse facility from the client location.
     * @summary Create Container Manifest Label
     * @param xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param manifest manifest
     * @param xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
     */
    public async getContainerizedParcelsLabels (xPBTransactionId: string, manifest: Manifest, xPBUnifiedErrorStructure?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ContainerManifestResponse;  }> {
        const localVarPath = this.basePath + '/v1/container-manifest';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xPBTransactionId' is not null or undefined
        if (xPBTransactionId === null || xPBTransactionId === undefined) {
            throw new Error('Required parameter xPBTransactionId was null or undefined when calling getContainerizedParcelsLabels.');
        }

        // verify required parameter 'manifest' is not null or undefined
        if (manifest === null || manifest === undefined) {
            throw new Error('Required parameter manifest was null or undefined when calling getContainerizedParcelsLabels.');
        }

        localVarHeaderParams['X-PB-UnifiedErrorStructure'] = ObjectSerializer.serialize(xPBUnifiedErrorStructure, "boolean");
        localVarHeaderParams['X-PB-TransactionId'] = ObjectSerializer.serialize(xPBTransactionId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(manifest, "Manifest")
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
            return new Promise<{ response: http.IncomingMessage; body: ContainerManifestResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ContainerManifestResponse");
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