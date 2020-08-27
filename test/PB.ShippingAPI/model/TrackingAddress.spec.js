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
    instance = new ShippingApi.TrackingAddress();
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

  describe('TrackingAddress', function() {
    it('should create an instance of TrackingAddress', function() {
      // uncomment below and update the code to test TrackingAddress
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be.a(ShippingApi.TrackingAddress);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "address2")', function() {
      // uncomment below and update the code to test the property address2
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property address3 (base name: "address3")', function() {
      // uncomment below and update the code to test the property address3
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property stateOrProvince (base name: "stateOrProvince")', function() {
      // uncomment below and update the code to test the property stateOrProvince
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new ShippingApi.TrackingAddress();
      //expect(instance).to.be();
    });

  });

}));
