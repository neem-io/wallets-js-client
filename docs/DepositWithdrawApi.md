# Wallet.DepositWithdrawApi

All URIs are relative to *https://api.dev.neem.io/neem*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cashIn**](DepositWithdrawApi.md#cashIn) | **POST** /api/v1/wallets/cash-in/{walletId} | Cash In
[**cashInInquiry**](DepositWithdrawApi.md#cashInInquiry) | **GET** /api/v1/wallets/cash-in/inquiry/{walletId} | Cash In Inquiry
[**cashOut**](DepositWithdrawApi.md#cashOut) | **POST** /api/v1/wallets/cash-out/{walletId} | Cash Out
[**cashOutInquiry**](DepositWithdrawApi.md#cashOutInquiry) | **GET** /api/v1/wallets/cash-out/inquiry/{walletId} | Cash Out Inquiry



## cashIn

> Object cashIn(walletId, opts)

Cash In

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.DepositWithdrawApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemID': eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.cashIn(walletId, opts, (error, data, response) => {
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


## cashInInquiry

> Object cashInInquiry(walletId, endToEndIdentification, amount, opts)

Cash In Inquiry

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.DepositWithdrawApi();
let walletId = "walletId_example"; // String | 
let endToEndIdentification = "endToEndIdentification_example"; // String | 
let amount = "amount_example"; // String | 
let opts = {
  'currency': "currency_example", // String | 
  'extendedProperties': [null] // [Object] | 
};
apiInstance.cashInInquiry(walletId, endToEndIdentification, amount, opts, (error, data, response) => {
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
 **endToEndIdentification** | **String**|  | 
 **amount** | **String**|  | 
 **currency** | **String**|  | [optional] 
 **extendedProperties** | [**[Object]**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cashOut

> Object cashOut(walletId, opts)

Cash Out

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.DepositWithdrawApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemNonce': 1234, // String | 
  'xNeemOTPCode': erfdcd345=, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.cashOut(walletId, opts, (error, data, response) => {
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
 **xNeemNonce** | **String**|  | [optional] 
 **xNeemOTPCode** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cashOutInquiry

> Object cashOutInquiry(walletId, endToEndIdentification, amount, opts)

Cash Out Inquiry

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.DepositWithdrawApi();
let walletId = "walletId_example"; // String | 
let endToEndIdentification = "endToEndIdentification_example"; // String | 
let amount = "amount_example"; // String | 
let opts = {
  'currency': "currency_example", // String | 
  'extendedProperties': [null] // [Object] | 
};
apiInstance.cashOutInquiry(walletId, endToEndIdentification, amount, opts, (error, data, response) => {
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
 **endToEndIdentification** | **String**|  | 
 **amount** | **String**|  | 
 **currency** | **String**|  | [optional] 
 **extendedProperties** | [**[Object]**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

