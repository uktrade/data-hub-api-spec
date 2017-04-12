const express = require('express')
const yaml = require('js-yaml')
const fs   = require('fs');
const doc = yaml.safeLoad(fs.readFileSync('datahub.yml', 'UTF-8'))
const nunjucks = require('nunjucks')



const app = express()
const router = express.Router()

app.set('view engine', 'html')
nunjucks.configure([`${__dirname}/src/views`], {
  autoescape: true,
  express: app,
  watch: true
})


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

console.log(doc)

function index(req, res) {
  res.render('index.html', {
    doc:doc,
    paths:Object.keys(doc.paths)
  })
}

router.get('/', index)

app.use(router)

app.listen(3000)