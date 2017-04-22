#!/usr/bin/env bash

java -jar ./lib/swagger-codegen-cli-2.2.2.jar generate -l nodejs-server -i datahub.yml -t src/nodejs-templates/ -o ../gendocs
mkdir ../gendocs/public
node markdown.js
cp src/public/style.css ../public/
cp ../datahub.yml ../public/
