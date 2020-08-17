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
import { Address } from '../model/address';
import { AddressSuggestionResponse } from '../model/addressSuggestionResponse';
import { AddressVerifySuggest } from '../model/addressVerifySuggest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api-sandbox.pitneybowes.com/shippingservices';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AddressValidationApiApiKeys {
}

export class AddressValidationApi {
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

    public setApiKey(key: AddressValidationApiApiKeys, value: string) {
        (this.authentications as any)[AddressValidationApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oAuth2ClientCredentials.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Address validation verifies and cleanses postal addresses within the United States to help ensure packages are rated accurately and shipments arrive at their final destinations on time.
     * @summary Address validation
     * @param address Address object that needs to be validated.
     * @param xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
     * @param minimalAddressValidation When set to true, the complete address (delivery line and last line) is validated but only the last line (city, state, and postal code) would be changed by the validation check.
     */
    public async verifyAddress (address: Address, xPBUnifiedErrorStructure?: boolean, minimalAddressValidation?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Address;  }> {
        const localVarPath = this.basePath + '/v1/addresses/verify';
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

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling verifyAddress.');
        }

        if (minimalAddressValidation !== undefined) {
            localVarQueryParameters['minimalAddressValidation'] = ObjectSerializer.serialize(minimalAddressValidation, "boolean");
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
            body: ObjectSerializer.serialize(address, "Address")
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
            return new Promise<{ response: http.IncomingMessage; body: Address;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Address");
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
     * This operation returns suggested addresses. Use this if the [Address Validation API](https://shipping.pitneybowes.com/api/post-address-verify.html) call has returned an error.
     * @summary Address Suggestion
     * @param returnSuggestions To return suggested addresses, set this to true.
     * @param addressVerifySuggest Address object that needs to be validated.
     * @param xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
     */
    public async verifyAndSuggestAddress (returnSuggestions: string, addressVerifySuggest: AddressVerifySuggest, xPBUnifiedErrorStructure?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AddressSuggestionResponse;  }> {
        const localVarPath = this.basePath + '/v1/addresses/verify-suggest';
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

        // verify required parameter 'returnSuggestions' is not null or undefined
        if (returnSuggestions === null || returnSuggestions === undefined) {
            throw new Error('Required parameter returnSuggestions was null or undefined when calling verifyAndSuggestAddress.');
        }

        // verify required parameter 'addressVerifySuggest' is not null or undefined
        if (addressVerifySuggest === null || addressVerifySuggest === undefined) {
            throw new Error('Required parameter addressVerifySuggest was null or undefined when calling verifyAndSuggestAddress.');
        }

        if (returnSuggestions !== undefined) {
            localVarQueryParameters['returnSuggestions'] = ObjectSerializer.serialize(returnSuggestions, "string");
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
            body: ObjectSerializer.serialize(addressVerifySuggest, "AddressVerifySuggest")
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
            return new Promise<{ response: http.IncomingMessage; body: AddressSuggestionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "AddressSuggestionResponse");
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