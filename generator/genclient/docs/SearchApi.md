# swagger_client.SearchApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datahub_search**](SearchApi.md#datahub_search) | **GET** /search | Basic search endpoint for Data Hub
[**datahub_search_0**](SearchApi.md#datahub_search_0) | **POST** /search/company | Basic search endpoint for Data Hub
[**datahub_search_1**](SearchApi.md#datahub_search_1) | **POST** /search/contact | Basic search endpoint for Data Hub
[**datahub_search_2**](SearchApi.md#datahub_search_2) | **POST** /search/investment | Basic search endpoint for Data Hub


# **datahub_search**
> AggregateSearchResults datahub_search(term, entity=entity, sort=sort)

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
sort = 'sort_example' # str | sort field and direction (:asc|:desc) example: name:asc (optional)

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search(term, entity=entity, sort=sort)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **str**| phrase to search for | 
 **entity** | **str**| which top level entity to search | [optional] [default to company]
 **sort** | **str**| sort field and direction (:asc|:desc) example: name:asc | [optional] 

### Return type

[**AggregateSearchResults**](AggregateSearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datahub_search_0**
> CompanySearchResults datahub_search_0(filter, sort=sort)

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
sort = 'sort_example' # str | sort field and direction (:asc|:desc) example: name:asc (optional)

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search_0(filter, sort=sort)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**CompanyFilteredSearch**](CompanyFilteredSearch.md)|  | 
 **sort** | **str**| sort field and direction (:asc|:desc) example: name:asc | [optional] 

### Return type

[**CompanySearchResults**](CompanySearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datahub_search_1**
> ContactSearchResults datahub_search_1(filter, sort=sort)

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
sort = 'sort_example' # str | sort field and direction (:asc|:desc) example: name:asc (optional)

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search_1(filter, sort=sort)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search_1: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**ContactFilteredSearch**](ContactFilteredSearch.md)|  | 
 **sort** | **str**| sort field and direction (:asc|:desc) example: name:asc | [optional] 

### Return type

[**ContactSearchResults**](ContactSearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datahub_search_2**
> InvestmentSearchResults datahub_search_2(filter, sort=sort)

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
filter = swagger_client.InvestmentFilteredSearch() # InvestmentFilteredSearch | 
sort = 'sort_example' # str | sort field and direction (:asc|:desc) example: name:asc (optional)

try: 
    # Basic search endpoint for Data Hub
    api_response = api_instance.datahub_search_2(filter, sort=sort)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->datahub_search_2: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**InvestmentFilteredSearch**](InvestmentFilteredSearch.md)|  | 
 **sort** | **str**| sort field and direction (:asc|:desc) example: name:asc | [optional] 

### Return type

[**InvestmentSearchResults**](InvestmentSearchResults.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

