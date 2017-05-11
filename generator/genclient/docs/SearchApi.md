# swagger_client.SearchApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datahub_search**](SearchApi.md#datahub_search) | **GET** /search | Basic search endpoint for Data Hub
[**datahub_search_0**](SearchApi.md#datahub_search_0) | **POST** /search/company | Basic search endpoint for Data Hub
[**datahub_search_1**](SearchApi.md#datahub_search_1) | **POST** /search/contact | Basic search endpoint for Data Hub


# **datahub_search**
> AggregateSearchResults datahub_search(term, entity=entity)

Basic search endpoint for Data Hub

Top level search for datahub

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
api_instance = swagger_client.SearchApi()
term = 'term_example' # str | phrase to search for
entity = 'company' # str | which top level entity to search (optional) (default to company)

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search(term, entity=entity)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **str**| phrase to search for | 
 **entity** | **str**| which top level entity to search | [optional] [default to company]

### Return type

[**AggregateSearchResults**](AggregateSearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datahub_search_0**
> CompanySearchResults datahub_search_0(filter)

Basic search endpoint for Data Hub

Top level search for datahub

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
api_instance = swagger_client.SearchApi()
filter = swagger_client.CompanyFilteredSearch() # CompanyFilteredSearch | 

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search_0(filter)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**CompanyFilteredSearch**](CompanyFilteredSearch.md)|  | 

### Return type

[**CompanySearchResults**](CompanySearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datahub_search_1**
> ContactSearchResults datahub_search_1(filter)

Basic search endpoint for Data Hub

Top level search for datahub

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
api_instance = swagger_client.SearchApi()
filter = swagger_client.ContactFilteredSearch() # ContactFilteredSearch | 

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search_1(filter)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search_1: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**ContactFilteredSearch**](ContactFilteredSearch.md)|  | 

### Return type

[**ContactSearchResults**](ContactSearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

