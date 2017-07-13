# swagger_client.MetadataApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metadata_business_activity**](MetadataApi.md#metadata_business_activity) | **GET** /v3/metadata/business-activity | retrieves Business Activity metadata array
[**metadata_documentable_fields**](MetadataApi.md#metadata_documentable_fields) | **GET** /v3/metadata/documentable-fields | retrieves the list of fields which require documents


# **metadata_business_activity**
> BusinessActivities metadata_business_activity()

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
    api_response = api_instance.metadata_business_activity()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetadataApi->metadata_business_activity: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BusinessActivities**](BusinessActivities.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metadata_documentable_fields**
> DocumentableFields metadata_documentable_fields()

retrieves the list of fields which require documents

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
    # retrieves the list of fields which require documents
    api_response = api_instance.metadata_documentable_fields()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetadataApi->metadata_documentable_fields: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DocumentableFields**](DocumentableFields.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

