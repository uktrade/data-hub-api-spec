# Data Hub API Spec
Swagger files and test server for the Data Hub CRM project

- [Interactive Swagger-UI documentation](/docs)
- [Raw YAML API spec](/datahub.yml)

To Build
* `npm install && npm build`
* The output file - `datahub.yml` - is the full spec
* `npm generate-node` runs a local version of swagger-ui with mocked endpoints at http://localhost:8080
* `npm generate-client` makes a Python client for the API

Both the generate commands require a working Java installation

## Latest changes

### 16:48 21.04.2017

Added auto-generated documentation

### 15:13 21.04.2017
- "investment_type" - now object
- "invester_company" changed to "investor_company"
- referral_source_activity - added missing fields for website and marketing "referral_source_activity_website" & "referral_source_activity_marketing"
- changes URL pattern for sub-resources (value/requirements/team etc.) to be /investment/{investmentId}/{subresource}
- removed id fields on sub-resources
- remove POST on sub-resources
- "project_assurance" (in team endpoint) changed to project_assurance_advisor