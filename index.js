const express = require('express')
const yaml = require('js-yaml')
const fs   = require('fs');
const doc = yaml.safeLoad(fs.readFileSync('datahub.yml', 'UTF-8'))

const app = express()
const router = express.Router()

function bouncer(req, res) {
  console.log(req.url)
  res.json({path:true, reqvar:req.params, a:1})
}

const keys = Object.keys(doc.paths)

keys.forEach((key) => {
  const escapeFormatPath = key.replace("{", ":").replace("}", "")
  const k2 = Object.keys(doc.paths[key])
  k2.forEach((k3) => {
    router[k3](doc.basePath + escapeFormatPath, bouncer)
  })
})

app.use(router)

app.listen(3000)