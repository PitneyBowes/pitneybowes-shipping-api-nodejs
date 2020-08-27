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
    instance = new ShippingApi.TrackingResponse();
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

  describe('TrackingResponse', function() {
    it('should create an instance of TrackingResponse', function() {
      // uncomment below and update the code to test TrackingResponse
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be.a(ShippingApi.TrackingResponse);
    });

    it('should have the property packageCount (base name: "packageCount")', function() {
      // uncomment below and update the code to test the property packageCount
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updatedDate")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedTime (base name: "updatedTime")', function() {
      // uncomment below and update the code to test the property updatedTime
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDeliveryDate (base name: "estimatedDeliveryDate")', function() {
      // uncomment below and update the code to test the property estimatedDeliveryDate
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDeliveryTime (base name: "estimatedDeliveryTime")', function() {
      // uncomment below and update the code to test the property estimatedDeliveryTime
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property deliveryDate (base name: "deliveryDate")', function() {
      // uncomment below and update the code to test the property deliveryDate
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property deliveryTime (base name: "deliveryTime")', function() {
      // uncomment below and update the code to test the property deliveryTime
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property deliveryLocation (base name: "deliveryLocation")', function() {
      // uncomment below and update the code to test the property deliveryLocation
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property deliveryLocationDescription (base name: "deliveryLocationDescription")', function() {
      // uncomment below and update the code to test the property deliveryLocationDescription
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property signedBy (base name: "signedBy")', function() {
      // uncomment below and update the code to test the property signedBy
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property weightOUM (base name: "weightOUM")', function() {
      // uncomment below and update the code to test the property weightOUM
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property reattemptDate (base name: "reattemptDate")', function() {
      // uncomment below and update the code to test the property reattemptDate
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property reattemptTime (base name: "reattemptTime")', function() {
      // uncomment below and update the code to test the property reattemptTime
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property destinationAddress (base name: "destinationAddress")', function() {
      // uncomment below and update the code to test the property destinationAddress
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property senderAddress (base name: "senderAddress")', function() {
      // uncomment below and update the code to test the property senderAddress
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

    it('should have the property scanDetailsList (base name: "scanDetailsList")', function() {
      // uncomment below and update the code to test the property scanDetailsList
      //var instane = new ShippingApi.TrackingResponse();
      //expect(instance).to.be();
    });

  });

}));
