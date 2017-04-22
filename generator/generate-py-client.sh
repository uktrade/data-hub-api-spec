#!/usr/bin/env bash

mkdir -p genclient
cd genclient
java -jar ../lib/swagger-codegen-cli-2.2.2.jar generate -l python -i ../datahub.yml