#!/usr/bin/env bash

mkdir -p gendocs
cd gendocs
java -jar ../lib/swagger-codegen-cli-2.2.2.jar generate -l nodejs-server -i ../datahub.yml -t ../src/nodejs-templates/
mkdir public
node ../markdown.js
npm install
cp ../src/public/style.css public/
cp ../datahub.yml public/
node index.js
