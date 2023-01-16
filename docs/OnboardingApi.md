# Wallet.OnboardingApi

All URIs are relative to *https://api.dev.neem.io/neem*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](OnboardingApi.md#createAccount) | **POST** /api/v1/wallets/account | Create Account
[**createMpin**](OnboardingApi.md#createMpin) | **POST** /api/v1/wallets/create-mpin/{walletId} | Create Mpin
[**login**](OnboardingApi.md#login) | **POST** /api/v1/wallets/login | Login



## createAccount

> Object createAccount(opts)

Create Account

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.OnboardingApi();
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemOTP': sfsdf=, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.createAccount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xNeemPartnerId** | **String**|  | [optional] 
 **xNeemOTP** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMpin

> Object createMpin(walletId, opts)

Create Mpin

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.OnboardingApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemID': eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.createMpin(walletId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**|  | 
 **xNeemPartnerId** | **String**|  | [optional] 
 **xNeemID** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## login

> Object login(opts)

Login

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.OnboardingApi();
let opts = {
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.login(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

