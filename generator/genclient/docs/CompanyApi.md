# swagger_client.CompanyApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_company**](CompanyApi.md#add_company) | **POST** /company | adds a Data Hub company
[**getchcompany**](CompanyApi.md#getchcompany) | **GET** /ch_company/{company_number} | Returns a Companies House company from the Data Hub repository
[**getcompany**](CompanyApi.md#getcompany) | **GET** /company/{companyId} | Returns a company from the Data Hub repository
[**update_company**](CompanyApi.md#update_company) | **PUT** /company/{companyId} | updates a company, creating a new one if not found


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

# **update_company**
> update_company(company_id, company, archived=archived)

updates a company, creating a new one if not found

Updates an existing company

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
    # updates a company, creating a new one if not found
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

