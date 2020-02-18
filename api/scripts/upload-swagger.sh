#!/bin/sh

source .env.local

BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo Uploading Swagger file to S3. )$Color_Off"
printf "\n\n"
aws s3 cp \
  src/swagger/swagger.json \
  s3://$S3_BUCKET/swagger-api-template.json
