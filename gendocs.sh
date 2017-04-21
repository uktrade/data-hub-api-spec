#!/usr/bin/env bash

mkdir -p gendocs
cd gendocs
java -jar ../lib/swagger-codegen-cli-2.2.2.jar generate -l nodejs-server -i ../datahub.yml
npm install
node index.js