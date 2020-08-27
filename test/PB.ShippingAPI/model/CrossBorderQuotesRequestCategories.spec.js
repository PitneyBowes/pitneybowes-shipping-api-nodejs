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
    instance = new ShippingApi.CrossBorderQuotesRequestCategories();
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

  describe('CrossBorderQuotesRequestCategories', function() {
    it('should create an instance of CrossBorderQuotesRequestCategories', function() {
      // uncomment below and update the code to test CrossBorderQuotesRequestCategories
      //var instane = new ShippingApi.CrossBorderQuotesRequestCategories();
      //expect(instance).to.be.a(ShippingApi.CrossBorderQuotesRequestCategories);
    });

    it('should have the property categoryCode (base name: "categoryCode")', function() {
      // uncomment below and update the code to test the property categoryCode
      //var instane = new ShippingApi.CrossBorderQuotesRequestCategories();
      //expect(instance).to.be();
    });

    it('should have the property descriptions (base name: "descriptions")', function() {
      // uncomment below and update the code to test the property descriptions
      //var instane = new ShippingApi.CrossBorderQuotesRequestCategories();
      //expect(instance).to.be();
    });

    it('should have the property parentCategoryCode (base name: "parentCategoryCode")', function() {
      // uncomment below and update the code to test the property parentCategoryCode
      //var instane = new ShippingApi.CrossBorderQuotesRequestCategories();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ShippingApi.CrossBorderQuotesRequestCategories();
      //expect(instance).to.be();
    });

  });

}));