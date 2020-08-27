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
    instance = new ShippingApi.ParcelDimension();
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

  describe('ParcelDimension', function() {
    it('should create an instance of ParcelDimension', function() {
      // uncomment below and update the code to test ParcelDimension
      //var instane = new ShippingApi.ParcelDimension();
      //expect(instance).to.be.a(ShippingApi.ParcelDimension);
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instane = new ShippingApi.ParcelDimension();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new ShippingApi.ParcelDimension();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instane = new ShippingApi.ParcelDimension();
      //expect(instance).to.be();
    });

    it('should have the property unitOfMeasurement (base name: "unitOfMeasurement")', function() {
      // uncomment below and update the code to test the property unitOfMeasurement
      //var instane = new ShippingApi.ParcelDimension();
      //expect(instance).to.be();
    });

    it('should have the property irregularParcelGirth (base name: "irregularParcelGirth")', function() {
      // uncomment below and update the code to test the property irregularParcelGirth
      //var instane = new ShippingApi.ParcelDimension();
      //expect(instance).to.be();
    });

  });

}));
