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
    instance = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
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

  describe('ParcelProtectionCreateRequestShipmentInfoConsigneeInfo', function() {
    it('should create an instance of ParcelProtectionCreateRequestShipmentInfoConsigneeInfo', function() {
      // uncomment below and update the code to test ParcelProtectionCreateRequestShipmentInfoConsigneeInfo
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be.a(ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

    it('should have the property familyName (base name: "familyName")', function() {
      // uncomment below and update the code to test the property familyName
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

    it('should have the property givenName (base name: "givenName")', function() {
      // uncomment below and update the code to test the property givenName
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumbers (base name: "phoneNumbers")', function() {
      // uncomment below and update the code to test the property phoneNumbers
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo();
      //expect(instance).to.be();
    });

  });

}));