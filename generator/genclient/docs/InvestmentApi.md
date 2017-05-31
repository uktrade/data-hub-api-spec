# swagger_client.InvestmentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_investment**](InvestmentApi.md#create_investment) | **POST** /v3/investment/project | adds the initial stage of an investment project
[**getinvestment**](InvestmentApi.md#getinvestment) | **GET** /v3/investment/{investmentId}/project | Returns an investment project from the Data Hub repository
[**getinvestmentrequirements**](InvestmentApi.md#getinvestmentrequirements) | **GET** /v3/investment/{investmentId}/requirements | Returns the Requirements information associated with a project @TODO document WHY
[**getinvestmentteam**](InvestmentApi.md#getinvestmentteam) | **GET** /v3/investment/{investmentId}/team | Returns the team information associated with a project
[**getinvestmentvalue**](InvestmentApi.md#getinvestmentvalue) | **GET** /v3/investment/{investmentId}/value | Returns the Value information associated with a project
[**getprojectsforcompany**](InvestmentApi.md#getprojectsforcompany) | **GET** /v3/investment/project | returns a summary of investment projects for a company
[**metadata_business_actibvity**](InvestmentApi.md#metadata_business_actibvity) | **GET** /v3/metadata/business_activity | retrieves Business Activity metadata array
[**patch_investment**](InvestmentApi.md#patch_investment) | **PATCH** /v3/investment/{investmentId}/project | updates an investment project object, from a partial JSON object
[**patch_investment_requirements**](InvestmentApi.md#patch_investment_requirements) | **PATCH** /v3/investment/{investmentId}/requirements | updates an investment requirements object, from a partial JSON object
[**patch_investment_team**](InvestmentApi.md#patch_investment_team) | **PATCH** /v3/investment/{investmentId}/team | updates an investment team object, from a partial JSON object
[**patch_investment_value**](InvestmentApi.md#patch_investment_value) | **PATCH** /v3/investment/{investmentId}/value | updates an investment project value object, from a partial JSON object


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

# **getinvestmentrequirements**
> InvestmentRequirements getinvestmentrequirements(investment_id)

Returns the Requirements information associated with a project @TODO document WHY

Passing in the UUID of an investment project returns the value associated with it 

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
    # Returns the Requirements information associated with a project @TODO document WHY
    api_response = api_instance.getinvestmentrequirements(investment_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->getinvestmentrequirements: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 

### Return type

[**InvestmentRequirements**](InvestmentRequirements.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getinvestmentteam**
> InvestmentTeam getinvestmentteam(investment_id)

Returns the team information associated with a project

Passing in the UUID of an investment project returns the team associated with it 

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
    # Returns the team information associated with a project
    api_response = api_instance.getinvestmentteam(investment_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->getinvestmentteam: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 

### Return type

[**InvestmentTeam**](InvestmentTeam.md)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getinvestmentvalue**
> InvestmentValue getinvestmentvalue(investment_id)

Returns the Value information associated with a project

Passing in the UUID of an investment project returns the value associated with it 

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
    # Returns the Value information associated with a project
    api_response = api_instance.getinvestmentvalue(investment_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->getinvestmentvalue: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 

### Return type

[**InvestmentValue**](InvestmentValue.md)

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
api_instance = swagger_client.InvestmentApi()

try: 
    # retrieves Business Activity metadata array
    api_response = api_instance.metadata_business_actibvity()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InvestmentApi->metadata_business_actibvity: %s\n" % e)
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

# **patch_investment_requirements**
> patch_investment_requirements(investment_id, investment)

updates an investment requirements object, from a partial JSON object

Patches an existing investment requirements object

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
investment = swagger_client.InvestmentRequirements() # InvestmentRequirements | Investment project requirements data to update

try: 
    # updates an investment requirements object, from a partial JSON object
    api_instance.patch_investment_requirements(investment_id, investment)
except ApiException as e:
    print("Exception when calling InvestmentApi->patch_investment_requirements: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 
 **investment** | [**InvestmentRequirements**](InvestmentRequirements.md)| Investment project requirements data to update | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_investment_team**
> patch_investment_team(investment_id, investment)

updates an investment team object, from a partial JSON object

Patches an existing investment team object

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
investment = swagger_client.InvestmentTeam() # InvestmentTeam | Investment project  data to update

try: 
    # updates an investment team object, from a partial JSON object
    api_instance.patch_investment_team(investment_id, investment)
except ApiException as e:
    print("Exception when calling InvestmentApi->patch_investment_team: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 
 **investment** | [**InvestmentTeam**](InvestmentTeam.md)| Investment project  data to update | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_investment_value**
> patch_investment_value(investment_id, investment)

updates an investment project value object, from a partial JSON object

Patches an existing investment project value object

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
investment = swagger_client.InvestmentValue() # InvestmentValue | Investment project value data to update

try: 
    # updates an investment project value object, from a partial JSON object
    api_instance.patch_investment_value(investment_id, investment)
except ApiException as e:
    print("Exception when calling InvestmentApi->patch_investment_value: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **investment_id** | **str**| UUID for a Data Hub investment project | 
 **investment** | [**InvestmentValue**](InvestmentValue.md)| Investment project value data to update | 

### Return type

void (empty response body)

### Authorization

[OauthSecurity](../README.md#OauthSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

