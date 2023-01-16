# Wallet.WalletServicesApi

All URIs are relative to *https://api.dev.neem.io/neem*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountLookup**](WalletServicesApi.md#accountLookup) | **GET** /api/v1/wallets/account/{walletId} | Account Lookup
[**accountUpgrade**](WalletServicesApi.md#accountUpgrade) | **POST** /api/v1/wallets/upgrade/{walletId} | Account Upgrade
[**apiV1WalletsValidateOtpPost**](WalletServicesApi.md#apiV1WalletsValidateOtpPost) | **POST** /api/v1/wallets/validate-otp | Validate OTP
[**balanceInquiry**](WalletServicesApi.md#balanceInquiry) | **GET** /api/v1/wallets/balance/{walletId} | Balance Inquiry
[**changeMpin**](WalletServicesApi.md#changeMpin) | **POST** /api/v1/wallets/change-mpin/{walletId} | Change MPIN
[**initiateOtp**](WalletServicesApi.md#initiateOtp) | **POST** /api/v1/wallets/initiate-otp | Initiate OTP
[**transactionHistory**](WalletServicesApi.md#transactionHistory) | **GET** /api/v1/wallets/transaction-history/{walletId} | Transaction History



## accountLookup

> Object accountLookup(walletId, endToEndIdentification, schemeName, xNeemCNIC, opts)

Account Lookup

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let walletId = "walletId_example"; // String | 
let endToEndIdentification = "endToEndIdentification_example"; // String | 
let schemeName = "schemeName_example"; // String | 
let xNeemCNIC = "xNeemCNIC_example"; // String | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'contentType': application/json // String | 
};
apiInstance.accountLookup(walletId, endToEndIdentification, schemeName, xNeemCNIC, opts, (error, data, response) => {
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
 **schemeName** | **String**|  | 
 **xNeemCNIC** | **String**|  | 
 **xNeemPartnerId** | **String**|  | [optional] 
 **contentType** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountUpgrade

> Object accountUpgrade(walletId, opts)

Account Upgrade

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemID': eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.accountUpgrade(walletId, opts, (error, data, response) => {
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


## apiV1WalletsValidateOtpPost

> Object apiV1WalletsValidateOtpPost(opts)

Validate OTP

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.apiV1WalletsValidateOtpPost(opts, (error, data, response) => {
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
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## balanceInquiry

> Object balanceInquiry(walletId, opts)

Balance Inquiry

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let walletId = 56; // Number | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemID': eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c, // String | 
  'endToEndIdentification': 56, // Number | 
  'schemeName': "schemeName_example", // String | 
  'extendedProperties': [null] // [Object] | 
};
apiInstance.balanceInquiry(walletId, opts, (error, data, response) => {
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
 **walletId** | **Number**|  | 
 **xNeemPartnerId** | **String**|  | [optional] 
 **xNeemID** | **String**|  | [optional] 
 **endToEndIdentification** | **Number**|  | [optional] 
 **schemeName** | **String**|  | [optional] 
 **extendedProperties** | [**[Object]**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## changeMpin

> Object changeMpin(walletId, opts)

Change MPIN

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemID': eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c, // String | 
  'xNeemOTP': erfdcd345=, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.changeMpin(walletId, opts, (error, data, response) => {
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


## initiateOtp

> Object initiateOtp(opts)

Initiate OTP

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'contentType': application/json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.initiateOtp(opts, (error, data, response) => {
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
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transactionHistory

> Object transactionHistory(walletId, opts)

Transaction History

### Example

```javascript
import Wallet from 'wallet';
let defaultClient = Wallet.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Wallet.WalletServicesApi();
let walletId = 56; // Number | 
let opts = {
  'xNeemPartnerId': 1234, // String | 
  'xNeemID': eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c, // String | 
  'endToEndIdentification': 56, // Number | 
  'schemeName': 56, // Number | 
  'fromDate': "fromDate_example", // String | 
  'toDate': "toDate_example", // String | 
  'extendedProperties': [null] // [Object] | 
};
apiInstance.transactionHistory(walletId, opts, (error, data, response) => {
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
 **walletId** | **Number**|  | 
 **xNeemPartnerId** | **String**|  | [optional] 
 **xNeemID** | **String**|  | [optional] 
 **endToEndIdentification** | **Number**|  | [optional] 
 **schemeName** | **Number**|  | [optional] 
 **fromDate** | **String**|  | [optional] 
 **toDate** | **String**|  | [optional] 
 **extendedProperties** | [**[Object]**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

