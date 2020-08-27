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
    instance = new ShippingApi.CustomsInfo();
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

  describe('CustomsInfo', function() {
    it('should create an instance of CustomsInfo', function() {
      // uncomment below and update the code to test CustomsInfo
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be.a(ShippingApi.CustomsInfo);
    });

    it('should have the property EELPFC (base name: "EELPFC")', function() {
      // uncomment below and update the code to test the property EELPFC
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property blanketEndDate (base name: "blanketEndDate")', function() {
      // uncomment below and update the code to test the property blanketEndDate
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property blanketStartDate (base name: "blanketStartDate")', function() {
      // uncomment below and update the code to test the property blanketStartDate
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property certificateNumber (base name: "certificateNumber")', function() {
      // uncomment below and update the code to test the property certificateNumber
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property customsDeclaredValue (base name: "customsDeclaredValue")', function() {
      // uncomment below and update the code to test the property customsDeclaredValue
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property declarationStatement (base name: "declarationStatement")', function() {
      // uncomment below and update the code to test the property declarationStatement
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property freightCharge (base name: "freightCharge")', function() {
      // uncomment below and update the code to test the property freightCharge
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property fromCustomsReference (base name: "fromCustomsReference")', function() {
      // uncomment below and update the code to test the property fromCustomsReference
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property handlingCosts (base name: "handlingCosts")', function() {
      // uncomment below and update the code to test the property handlingCosts
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property importerCustomsReference (base name: "importerCustomsReference")', function() {
      // uncomment below and update the code to test the property importerCustomsReference
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property insuredAmount (base name: "insuredAmount")', function() {
      // uncomment below and update the code to test the property insuredAmount
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property insuredNumber (base name: "insuredNumber")', function() {
      // uncomment below and update the code to test the property insuredNumber
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property licenseNumber (base name: "licenseNumber")', function() {
      // uncomment below and update the code to test the property licenseNumber
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property otherCharge (base name: "otherCharge")', function() {
      // uncomment below and update the code to test the property otherCharge
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property otherDescription (base name: "otherDescription")', function() {
      // uncomment below and update the code to test the property otherDescription
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property otherType (base name: "otherType")', function() {
      // uncomment below and update the code to test the property otherType
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property packingCosts (base name: "packingCosts")', function() {
      // uncomment below and update the code to test the property packingCosts
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property producerSpecification (base name: "producerSpecification")', function() {
      // uncomment below and update the code to test the property producerSpecification
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property reasonForExport (base name: "reasonForExport")', function() {
      // uncomment below and update the code to test the property reasonForExport
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property reasonForExportExplanation (base name: "reasonForExportExplanation")', function() {
      // uncomment below and update the code to test the property reasonForExportExplanation
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property sdrValue (base name: "sdrValue")', function() {
      // uncomment below and update the code to test the property sdrValue
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property shippingDocumentType (base name: "shippingDocumentType")', function() {
      // uncomment below and update the code to test the property shippingDocumentType
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property signatureContact (base name: "signatureContact")', function() {
      // uncomment below and update the code to test the property signatureContact
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

    it('should have the property termsOfSale (base name: "termsOfSale")', function() {
      // uncomment below and update the code to test the property termsOfSale
      //var instane = new ShippingApi.CustomsInfo();
      //expect(instance).to.be();
    });

  });

}));
