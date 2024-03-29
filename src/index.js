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


import ApiClient from './ApiClient';
import DepositWithdrawApi from './api/DepositWithdrawApi';
import OnboardingApi from './api/OnboardingApi';
import WalletServicesApi from './api/WalletServicesApi';


/**
* Integrate Neem Wallet APIs into your ecosystem to provide your customer the ability to create wallets, set up a financial PIN, ability to manage their wallets and have on request visibility over their balances..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Wallet = require('index'); // See note below*.
* var xxxSvc = new Wallet.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Wallet.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Wallet.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Wallet.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.3
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
    * The DepositWithdrawApi service constructor.
    * @property {module:api/DepositWithdrawApi}
    */
    DepositWithdrawApi,

    /**
    * The OnboardingApi service constructor.
    * @property {module:api/OnboardingApi}
    */
    OnboardingApi,

    /**
    * The WalletServicesApi service constructor.
    * @property {module:api/WalletServicesApi}
    */
    WalletServicesApi
};
