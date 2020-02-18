#!/bin/sh

source .env

Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo Running tests )$Color_Off"
printf "\n\n"

npm run test

if [ $? != 0 ]
then 
  exit 1
fi

printf "\n\n$BICyan$( echo Building for deployment.  )$Color_Off"
printf "\n\n"
npm run build

if [ $? == 0 ]
then
	printf "\n\n$BICyan$( echo Deploying to bucket: $S3_BUCET )$Color_Off"
	printf "\n\n"
	aws s3 sync \
		./build/ \
  	s3://$S3_BUCKET
else
	exit 1
fi

