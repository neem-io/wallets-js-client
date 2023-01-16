/**
 * Wallet
 * Integrate Neem Wallet APIs into your ecosystem to provide your customer the ability to create wallets, set up a financial PIN, ability to manage their wallets and have on request visibility over their balances.
 *
 * The version of the OpenAPI document: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Wallet);
  }
}(this, function(expect, Wallet) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Wallet.DepositWithdrawApi();
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

  describe('DepositWithdrawApi', function() {
    describe('cashIn', function() {
      it('should call cashIn successfully', function(done) {
        //uncomment below and update the code to test cashIn
        //instance.cashIn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cashInInquiry', function() {
      it('should call cashInInquiry successfully', function(done) {
        //uncomment below and update the code to test cashInInquiry
        //instance.cashInInquiry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cashOut', function() {
      it('should call cashOut successfully', function(done) {
        //uncomment below and update the code to test cashOut
        //instance.cashOut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cashOutInquiry', function() {
      it('should call cashOutInquiry successfully', function(done) {
        //uncomment below and update the code to test cashOutInquiry
        //instance.cashOutInquiry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
