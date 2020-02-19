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
curl https://68trsee7nd.execute-api.us-east-1.amazonaws.com/dev/songs
```
or

[Take the browser route](https://68trsee7nd.execute-api.us-east-1.amazonaws.com/dev/songs)

### Extra

Serving 172 songs at once may be required, it may not. The second option allows pagination, and show part of the data at each time with ability to show all.

#### Query String Params

| Parameter | Type | Description |
| :---: | --- | --- |
| `numberOfItemsPerPage` | `Number` | Number of results that will be returned |
| `currentPage` | `Number` | The starting position |

#### Response

```json
{
  "songs": [
    {
      ...
    },
    {
      ...
    }
  ],
  "numberOfSongs": 172
}
```

### Tests

There are both unit and integration tests.

The unit tests are for pagination, ensuring that the correct values are returned for the 1st and 2nd page.

The integration tests call both lambdas, and expect their `statusCodes` to be `200`. 

The `extra/` integration test, tests pagination.

## UI

[Live Demo](https://d1ma6phx3bdsds.cloudfront.net/)

:white_check_mark: React

:white_check_mark: **No** table elements

:white_check_mark: Scrolls vertically

:white_check_mark: Scrolls horizontally

:white_check_mark: Columns sort in ascending order

:white_check_mark: Columns sort in descending order

### Standard

[This page](https://d1ma6phx3bdsds.cloudfront.net/songs) is the straightforward implementation. A table, with no table elements, just styles. It allows for sorting in descending and ascending order, and shows the number of results.

### Extras

[This page](https://d1ma6phx3bdsds.cloudfront.net/extra/songs) has pagination, as well as searching. The searching runs on type, which is manageable due to the small number of items on being re-rendered.

Searching and sorting can be enabled / disabled via props. They extend the functionality of the table, but are loosely coupled to not be dependent on it.

Pagination is done server side, and is almost instantaneous. 

### Tests

The tests here are unit tests on the sorting and searching features. A small number of easily identifiable song objects act as the control group. 

`npm run seed-test-values` will write to a JSON file that is the test's control file. In order to ensure the validity of the test file, it needs to be visually inspected. This is why it's a short list, and can be easily verified.

`npm run test` will execute the main tests

