#!/bin/sh

source .env.dev

Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo Deploying the latest artifact to the $STAGE bucket.. )$Color_Off"
printf "\n\n"

sam deploy \
  --template-file build/.$STAGE-iheart-challenge.yaml \
  --no-fail-on-empty-changeset \
  --stack-name $STAGE-iheart-challenge \
  --capabilities CAPABILITY_IAM  