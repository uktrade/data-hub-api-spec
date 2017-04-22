const yaml = require('js-yaml')
const fs   = require('fs');
const doc = yaml.safeLoad(fs.readFileSync('../../datahub.yml', 'UTF-8'))

const ref = doc.definitions.Company.properties.data.properties.relationships

const split = ref['$ref'].split('/')

console.log(doc[split[1]][split[2]])

const props = doc.definitions.Company.properties.data.properties.attributes.properties

const propKeys = Object.keys(props)

propKeys.forEach((k) => {
  if (props[k].type === 'string') {
    console.log(k, props[k].example)
  }
})