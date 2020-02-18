const songs = require('@/songs/standard/lib/songs.json')
const { handler } = require('@/songs/standard')

const lengthOfTestSetSongs = songs.length
const validResponseCode = 200

describe('Response is valid', () => {
  test(`Response code is ${validResponseCode}`, async done => {
    expect.assertions(1)
    const standardSongResponse = await handler()
    const doesResponseCodeMatch = standardSongResponse.statusCode === validResponseCode
    expect(doesResponseCodeMatch).toBe(true)
    done()
  })
  test(`Response body length is length of test set: ${lengthOfTestSetSongs}`, async () => {
    const standardSongResponse = await handler()
    const responseBody = JSON.parse(standardSongResponse.body)
    const lengthOfResponseSongs = responseBody.songs.length
    const isLengthValid = lengthOfResponseSongs === lengthOfTestSetSongs
    expect(isLengthValid).toBe(true)
  })
})