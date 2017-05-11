# swagger_client.MetadataApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metadata_business_actibvity**](MetadataApi.md#metadata_business_actibvity) | **GET** /v3/metadata/business_activity | retrieves Business Activity metadata array


# **metadata_business_actibvity**
> BusinessActivities metadata_business_actibvity()

retrieves Business Activity metadata array

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure OAuth2 access token for authorization: OauthSecurity
swagger_client.configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.MetadataApi()

try: 
    # retrieves Business Activity metadata array
    api_response = api_instance.metadata_business_actibvity()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetadataApi->metadata_business_actibvity: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BusinessActivities**](BusinessActivities.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

