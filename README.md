# Data Hub CRM API Spec
Swagger files and test server for the Data Hub CRM project

- [Interactive Swagger-UI documentation](/docs)
- [Raw YAML API spec](/datahub.yml)

To Build
* `npm run makeyaml && npm run generate-node && npm start`
* The output file - `datahub.yml` - is the full spec
* `npm generate-client` makes a Python client for the API
* To push updates to Heroku you need to commit the generated files (in /gendocs & /public) - don't edit these directly

Both the generate commands require a working Java installation

## Data Hub API rules

### Verbs

**GET** retrieves entities. Requests in the form /endpoint/{uuid} will retrieve one entity; requests in the form /endpoint?{filter}={filtervalue} will return an array. All GET requests *SHOULD* be idempotent. GET requests do not get a body, no matter what Elasticsearch says

**POST** creates a *new* entity each time it is called. Therefore POSTs are non-idempotent. Servers *MAY* apply duplicate checking to see if they are being asked to create a copy of an already existing entity, in which case they *MAY* regard this as a validation error and return an appropriate error code, and clients should handle this error case, but it will not always bne present.

**PUT** creates an entity, or updates it if it already exists. PUTs should always be associated with an id of some sort to allow the server to know what entity it is talking to. Generally if an entity is PUT into an endpoint, and some entity fields are missing, the server *SHOULD* regard these as instructions to null the field in its internal representation, however there is one major exception to this rule: PUTs used to add further data to a large object.

PUTs are also used in Data Hub in the case where a very large representation of an entity is split across multiple endpoints, In the Investment family of calls, the Investment Project is large and its creation is split across multiple screens. Therefore there are no POST requests available for endpoints after the main Investment Project is created. Adding User Requirements and Value data is done with PUTs to the main object. So far, all operations that require PUT to operate in this way have a distinctive path pattern: /thing/id/subthing

**PATCH** allows the client to send a partial representation of the entity it wants to modify. In this case the server *MUST* leave any missing fields as they are in its handling of the entity.

**DELETE** will delete an entity, but we have no endpoints that implement this yet.

### Paths

Paths are in the form /{object}/{id}/{suboperation} where object is the main entity model being manipulated - eg company or investment, id (if present) is the database key of a particular entity, and suboperation describes some additional step ina  process.

Generally endpoints returning an array will have a plural as the object. All requests to /metadata get an array as well (data is technically plural, so we're not really breaking the rules here.)

### Objects

Data Hub objects passed over the API are serialisations of JavaScript and Python objects in JSON. Values must always be coerced to their JSON equivalent: e.g., Python's `True` becomes `true`

Objects will generally expand to one nesting deep: the principle is that the Front End should do as little work as possible to populate values on screen, within reason. The reason for that reason: Data Hub objects can be very big, with dozens of fields and fkey relationships. Therefore, we may send a simple version of an object in some cases and the FE may need to issue a secondary call to inflate that object. An investment project involves three companies so to avoid bloating out the responses we send a metadata-like slim company object containing just the company's ID and it's registered name.


### Exclusion filters

The Company search API introduces an exclusion filter. Anything in the exclusion field is a negation of the search term. This provides for us to simply search for non-UK companies matching a particular critera (this is important for the Investment Project flow, among other things).

A UK-excluding search would look like this:

```
POST /search/company

{
    "name": "Marriott",
    "exclusions": {
        "trading_address_country": "d290f1ee-6c54-4b01-90e6-d701748f0851"
    }
}

```

(assuming that's the UUID for the UK)
