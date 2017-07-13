# swagger_client.CompanyApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_company**](CompanyApi.md#add_company) | **POST** /v3/company | adds a Data Hub company
[**archive_company**](CompanyApi.md#archive_company) | **POST** /v3/company/{company_id}/archive | Archives a company with a reason
[**getchcompany**](CompanyApi.md#getchcompany) | **GET** /v3/ch-company/{company_number} | Returns a Companies House company from the Data Hub repository
[**getcompany**](CompanyApi.md#getcompany) | **GET** /v3/company/{companyId} | Returns a company from the Data Hub repository
[**unarchive_company**](CompanyApi.md#unarchive_company) | **POST** /v3/company/{company_id}/unarchive | Unarchives a company
[**update_company**](CompanyApi.md#update_company) | **PATCH** /v3/company/{companyId} | updates a company


# **add_company**
> add_company(company)

adds a Data Hub company

Adds a Data Hub company from a Companies House company

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
api_instance = swagger_client.CompanyApi()
company = swagger_client.Company() # Company | Company to add

try: 
    # adds a Data Hub company
    api_instance.add_company(company)
except ApiException as e:
    print("Exception when calling CompanyApi->add_company: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Company**](Company.md)| Company to add | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archive_company**
> archive_company(company_id, body)

Archives a company with a reason

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
api_instance = swagger_client.CompanyApi()
company_id = 'company_id_example' # str | UUID of company
body = swagger_client.ArchiveReason() # ArchiveReason | 

try: 
    # Archives a company with a reason
    api_instance.archive_company(company_id, body)
except ApiException as e:
    print("Exception when calling CompanyApi->archive_company: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| UUID of company | 
 **body** | [**ArchiveReason**](ArchiveReason.md)|  | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getchcompany**
> CompaniesHouseCompany getchcompany(company_number)

Returns a Companies House company from the Data Hub repository

Passing in a Companies House company number returns a Data Hub Companies House company object 

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
api_instance = swagger_client.CompanyApi()
company_number = 'company_number_example' # str | Companies House number

try: 
    # Returns a Companies House company from the Data Hub repository
    api_response = api_instance.getchcompany(company_number)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CompanyApi->getchcompany: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_number** | **str**| Companies House number | 

### Return type

[**CompaniesHouseCompany**](CompaniesHouseCompany.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getcompany**
> Company getcompany(company_id)

Returns a company from the Data Hub repository

Passing in a company UUID returns a Data Hub company object 

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
api_instance = swagger_client.CompanyApi()
company_id = 'company_id_example' # str | UUID for a Data Hub company

try: 
    # Returns a company from the Data Hub repository
    api_response = api_instance.getcompany(company_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CompanyApi->getcompany: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| UUID for a Data Hub company | 

### Return type

[**Company**](Company.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unarchive_company**
> unarchive_company(company_id)

Unarchives a company

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
api_instance = swagger_client.CompanyApi()
company_id = 'company_id_example' # str | UUID of company

try: 
    # Unarchives a company
    api_instance.unarchive_company(company_id)
except ApiException as e:
    print("Exception when calling CompanyApi->unarchive_company: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| UUID of company | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_company**
> update_company(company_id, company, archived=archived)

updates a company

Updates an existing company, only changing fields specified in the request

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
api_instance = swagger_client.CompanyApi()
company_id = 'company_id_example' # str | UUID for a Data Hub company
company = swagger_client.Company() # Company | Company data to update
archived = true # bool | Update the company's status to Archived (optional)

try: 
    # updates a company
    api_instance.update_company(company_id, company, archived=archived)
except ApiException as e:
    print("Exception when calling CompanyApi->update_company: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_id** | **str**| UUID for a Data Hub company | 
 **company** | [**Company**](Company.md)| Company data to update | 
 **archived** | **bool**| Update the company&#39;s status to Archived | [optional] 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

