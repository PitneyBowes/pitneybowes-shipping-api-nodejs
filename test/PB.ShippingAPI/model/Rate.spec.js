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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/PB.ShippingAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/PB.ShippingAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShippingApi);
  }
}(this, function(expect, ShippingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShippingApi.Rate();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Rate', function() {
    it('should create an instance of Rate', function() {
      // uncomment below and update the code to test Rate
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be.a(ShippingApi.Rate);
    });

    it('should have the property alternateBaseCharge (base name: "alternateBaseCharge")', function() {
      // uncomment below and update the code to test the property alternateBaseCharge
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property alternateTotalCharge (base name: "alternateTotalCharge")', function() {
      // uncomment below and update the code to test the property alternateTotalCharge
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property baseCharge (base name: "baseCharge")', function() {
      // uncomment below and update the code to test the property baseCharge
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property baseChargeTaxes (base name: "baseChargeTaxes")', function() {
      // uncomment below and update the code to test the property baseChargeTaxes
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property deliveryCommitment (base name: "deliveryCommitment")', function() {
      // uncomment below and update the code to test the property deliveryCommitment
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property destinationZone (base name: "destinationZone")', function() {
      // uncomment below and update the code to test the property destinationZone
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property dimensionalWeight (base name: "dimensionalWeight")', function() {
      // uncomment below and update the code to test the property dimensionalWeight
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property discounts (base name: "discounts")', function() {
      // uncomment below and update the code to test the property discounts
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property inductionPostalCode (base name: "inductionPostalCode")', function() {
      // uncomment below and update the code to test the property inductionPostalCode
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property parcelType (base name: "parcelType")', function() {
      // uncomment below and update the code to test the property parcelType
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property rateTypeId (base name: "rateTypeId")', function() {
      // uncomment below and update the code to test the property rateTypeId
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "serviceId")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property specialServices (base name: "specialServices")', function() {
      // uncomment below and update the code to test the property specialServices
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property surcharges (base name: "surcharges")', function() {
      // uncomment below and update the code to test the property surcharges
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property totalCarrierCharge (base name: "totalCarrierCharge")', function() {
      // uncomment below and update the code to test the property totalCarrierCharge
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

    it('should have the property totalTaxAmount (base name: "totalTaxAmount")', function() {
      // uncomment below and update the code to test the property totalTaxAmount
      //var instane = new ShippingApi.Rate();
      //expect(instance).to.be();
    });

  });

}));