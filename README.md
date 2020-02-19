# iHeart Media Coding Challenge

## Instructions

1. Take the included song data file, use an AWS SAM CLI and a node.js lambda function to serve the frontend with the data.
2. Do **not** use table elements (table, th, tr, td, ...).
3. Include any necessary CSS but it doesn't need to be pretty.
4. Allow the user to scroll vertically and horizontally through columns and rows that go off screen.
5. Allow the user to sort the order of the song rows by the column values.

## Brief Overview

This submission is 2 parts. The first is exactly what was asked for. It's frustrating to ask someone to do something, only to have them go off on some tangent and not accomplish what you asked. 

With that in mind, I did what was asked in the above instructions, and then another implementation with some extras.

## API

:white_check_mark: Node
:white_check_mark: Lambda
:white_check_mark: SAM ( with using the CLI )
:white_check_mark: Serving static JSON file

### Standard

The standard was to serve the songs over Lambda with Node. That is accomplished by including the provided songs in the lambda artifact, so it is mounted in the container during runtime.

For the result:
```sh
curl https://2jo47s7exc.execute-api.us-east-1.amazonaws.com/dev/songs
```

### Extra

Serving 172 songs at once may be required, it may not


## UI

[Live Demo](https://d1ma6phx3bdsds.cloudfront.net/)

