# swagger_client.InvestmentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_investment_document**](InvestmentApi.md#add_investment_document) | **POST** /v3/investment/{investmentId}/document | Tells the back end that a document has successfully uploaded and where to find it
[**add_investment_document_0**](InvestmentApi.md#add_investment_document_0) | **DELETE** /v3/investment/document/{documentId} | Tells the back end to forget a docuemtn associated with a project and a field
[**add_investment_team_member**](InvestmentApi.md#add_investment_team_member) | **POST** /v3/investment/{investmentId}/team-member | Adds a team member to an investment project
[**archive_investment**](InvestmentApi.md#archive_investment) | **POST** /v3/investment/{investmentId}/archive | Archives an investment project with a reason
[**create_investment**](InvestmentApi.md#create_investment) | **POST** /v3/investment | adds the initial stage of an investment project
[**get_investment_team_member**](InvestmentApi.md#get_investment_team_member) | **GET** /v3/investment/{investmentId}/team-member/{adviserId} | Gets a team member&#39;s role
[**getinvestment**](InvestmentApi.md#getinvestment) | **GET** /v3/investment/{investmentId} | Returns an investment project from the Data Hub repository
[**getprojectsforcompany**](InvestmentApi.md#getprojectsforcompany) | **GET** /v3/investment | returns a summary of investment projects for a company
[**metadata_business_activity**](InvestmentApi.md#metadata_business_activity) | **GET** /v3/metadata/business-activity | retrieves Business Activity metadata array
[**metadata_documentable_fields**](InvestmentApi.md#metadata_documentable_fields) | **GET** /v3/metadata/documentable-fields | retrieves the list of fields which require documents
[**patch_investment**](InvestmentApi.md#patch_investment) | **PATCH** /v3/investment/{investmentId} | updates an investment project object, from a partial JSON object
[**remove_all_investment_team_member**](InvestmentApi.md#remove_all_investment_team_member) | **DELETE** /v3/investment/{investmentId}/team-member | Removes all team members from an investment project
[**remove_investment_team_member**](InvestmentApi.md#remove_investment_team_member) | **DELETE** /v3/investment/{investmentId}/team-member/{adviserId} | Removes a team member from an investment project
[**unarchive_investment**](InvestmentApi.md#unarchive_investment) | **POST** /v3/investment/{investmentId}/unarchive | Unarchives an investment project
[**update_investment_team_member**](InvestmentApi.md#update_investment_team_member) | **PATCH** /v3/investment/{investmentId}/team-member/{adviserId} | Updates a team member role


# **add_investment_document**
> add_investment_document(investment_id, document)

Tells the back end that a document has successfully uploaded and where to find it

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project
document = swagger_client.Document() # Document | object that contains the document URL and which the id of which section it belongs to

try: 
    # Tells the back end that a document has successfully uploaded and where to find it
    api_instance.add_investment_document(investment_id, document)
except ApiException as e:
    print("Exception when calling InvestmentApi->add_investment_document: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 
 **document** | [**Document**](Document.md)| object that contains the document URL and which the id of which section it belongs to | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_investment_document_0**
> add_investment_document_0(document_id)

Tells the back end to forget a docuemtn associated with a project and a field

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
api_instance = swagger_client.InvestmentApi()
document_id = 'document_id_example' # str | id of the document to remove

try: 
    # Tells the back end to forget a docuemtn associated with a project and a field
    api_instance.add_investment_document_0(document_id)
except ApiException as e:
    print("Exception when calling InvestmentApi->add_investment_document_0: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **str**| id of the document to remove | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_investment_team_member**
> add_investment_team_member(investment_id, body)

Adds a team member to an investment project

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project
body = swagger_client.InvestmentTeamMember() # InvestmentTeamMember | 

try: 
    # Adds a team member to an investment project
    api_instance.add_investment_team_member(investment_id, body)
except ApiException as e:
    print("Exception when calling InvestmentApi->add_investment_team_member: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 
 **body** | [**InvestmentTeamMember**](InvestmentTeamMember.md)|  | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archive_investment**
> archive_investment(investment_id, body)

Archives an investment project with a reason

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project
body = swagger_client.ArchiveReason() # ArchiveReason | 

try: 
    # Archives an investment project with a reason
    api_instance.archive_investment(investment_id, body)
except ApiException as e:
    print("Exception when calling InvestmentApi->archive_investment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 
 **body** | [**ArchiveReason**](ArchiveReason.md)|  | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_investment**
> create_investment(investment_stage_one)

adds the initial stage of an investment project

Creates a new investment project within Data Hub

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
api_instance = swagger_client.InvestmentApi()
investment_stage_one = swagger_client.InvestmentProject() # InvestmentProject | Investment to create a skeleton for

try: 
    # adds the initial stage of an investment project
    api_instance.create_investment(investment_stage_one)
except ApiException as e:
    print("Exception when calling InvestmentApi->create_investment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_stage_one** | [**InvestmentProject**](InvestmentProject.md)| Investment to create a skeleton for | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_investment_team_member**
> InvestmentTeamMember get_investment_team_member(investment_id, adviser_id, body)

Gets a team member's role

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project
adviser_id = 'adviser_id_example' # str | UUID of adviser
body = swagger_client.InvestmentTeamMember() # InvestmentTeamMember | 

try: 
    # Gets a team member's role
    api_response = api_instance.get_investment_team_member(investment_id, adviser_id, body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->get_investment_team_member: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 
 **adviser_id** | **str**| UUID of adviser | 
 **body** | [**InvestmentTeamMember**](InvestmentTeamMember.md)|  | 

### Return type

[**InvestmentTeamMember**](InvestmentTeamMember.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getinvestment**
> InvestmentProject getinvestment(investment_id)

Returns an investment project from the Data Hub repository

Passing in a UUID returns a Data Hub investment object 

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID for a Data Hub investment project

try: 
    # Returns an investment project from the Data Hub repository
    api_response = api_instance.getinvestment(investment_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->getinvestment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 

### Return type

[**InvestmentProject**](InvestmentProject.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getprojectsforcompany**
> InvestmentProjectsList getprojectsforcompany(investor_company_id=investor_company_id, offset=offset, limit=limit)

returns a summary of investment projects for a company

Returns a summary list of investment projects per investor-company ID

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
api_instance = swagger_client.InvestmentApi()
investor_company_id = 'd290f1ee-6c54-4b01-90e6-d701748f0851' # str | UUID of a company with investment projects (optional) (default to d290f1ee-6c54-4b01-90e6-d701748f0851)
offset = 56 # int | pagination parameter (optional)
limit = 56 # int | pagination parameter (optional)

try: 
    # returns a summary of investment projects for a company
    api_response = api_instance.getprojectsforcompany(investor_company_id=investor_company_id, offset=offset, limit=limit)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->getprojectsforcompany: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investor_company_id** | **str**| UUID of a company with investment projects | [optional] [default to d290f1ee-6c54-4b01-90e6-d701748f0851]
 **offset** | **int**| pagination parameter | [optional] 
 **limit** | **int**| pagination parameter | [optional] 

### Return type

[**InvestmentProjectsList**](InvestmentProjectsList.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
api_instance = swagger_client.InvestmentApi()

try: 
    # retrieves Business Activity metadata array
    api_response = api_instance.metadata_business_activity()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->metadata_business_activity: %s\n" % e)
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
api_instance = swagger_client.InvestmentApi()

try: 
    # retrieves the list of fields which require documents
    api_response = api_instance.metadata_documentable_fields()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->metadata_documentable_fields: %s\n" % e)
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

# **patch_investment**
> patch_investment(investment_id, investment)

updates an investment project object, from a partial JSON object

Patches an existing investment project object

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID for a Data Hub investment project
investment = swagger_client.InvestmentProject() # InvestmentProject | Investment project  data to update

try: 
    # updates an investment project object, from a partial JSON object
    api_instance.patch_investment(investment_id, investment)
except ApiException as e:
    print("Exception when calling InvestmentApi->patch_investment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 
 **investment** | [**InvestmentProject**](InvestmentProject.md)| Investment project  data to update | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_all_investment_team_member**
> remove_all_investment_team_member(investment_id)

Removes all team members from an investment project

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project

try: 
    # Removes all team members from an investment project
    api_instance.remove_all_investment_team_member(investment_id)
except ApiException as e:
    print("Exception when calling InvestmentApi->remove_all_investment_team_member: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_investment_team_member**
> remove_investment_team_member(investment_id, adviser_id)

Removes a team member from an investment project

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project
adviser_id = 'adviser_id_example' # str | UUID of adviser

try: 
    # Removes a team member from an investment project
    api_instance.remove_investment_team_member(investment_id, adviser_id)
except ApiException as e:
    print("Exception when calling InvestmentApi->remove_investment_team_member: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 
 **adviser_id** | **str**| UUID of adviser | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unarchive_investment**
> unarchive_investment(investment_id)

Unarchives an investment project

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project

try: 
    # Unarchives an investment project
    api_instance.unarchive_investment(investment_id)
except ApiException as e:
    print("Exception when calling InvestmentApi->unarchive_investment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_investment_team_member**
> update_investment_team_member(investment_id, adviser_id, body)

Updates a team member role

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
api_instance = swagger_client.InvestmentApi()
investment_id = 'investment_id_example' # str | UUID of investment project
adviser_id = 'adviser_id_example' # str | UUID of adviser
body = swagger_client.InvestmentTeamMember() # InvestmentTeamMember | 

try: 
    # Updates a team member role
    api_instance.update_investment_team_member(investment_id, adviser_id, body)
except ApiException as e:
    print("Exception when calling InvestmentApi->update_investment_team_member: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID of investment project | 
 **adviser_id** | **str**| UUID of adviser | 
 **body** | [**InvestmentTeamMember**](InvestmentTeamMember.md)|  | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

