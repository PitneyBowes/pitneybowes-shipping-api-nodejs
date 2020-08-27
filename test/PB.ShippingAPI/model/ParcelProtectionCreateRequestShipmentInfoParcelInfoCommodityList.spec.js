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
    instance = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList();
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

  describe('ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList', function() {
    it('should create an instance of ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList', function() {
      // uncomment below and update the code to test ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList();
      //expect(instance).to.be.a(ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList);
    });

    it('should have the property categoryPath (base name: "categoryPath")', function() {
      // uncomment below and update the code to test the property categoryPath
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList();
      //expect(instance).to.be();
    });

    it('should have the property itemCode (base name: "itemCode")', function() {
      // uncomment below and update the code to test the property itemCode
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList();
      //expect(instance).to.be();
    });

  });

}));
