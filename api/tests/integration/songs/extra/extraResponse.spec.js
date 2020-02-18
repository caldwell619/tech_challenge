const isEqual = require('lodash.isequal')
const songs = require('@/songs/extra/lib/songs.json')
const { handler } = require('@/songs/extra')
const firstPageTestEvent = require('../../lib/firstPageTestEvent.json')
const secondPageTestEvent = require('../../lib/secondPageTestEvent.json')

const lengthOfTestSetSongs = songs.length
const validResponseCode = 200
const firstSong = songs[0]
const secondSong = songs[1]
const thirdSong = songs[2]
const fourthSong = songs[3]
const fifthSong = songs[4]
const firstFiveSongs = [firstSong, secondSong, thirdSong, fourthSong, fifthSong]

const sixthSong = songs[5]
const seventhSong = songs[6]
const eighthSong = songs[7]
const ninthSong = songs[8]
const tenthSong = songs[9]
const secondFiveSongs = [sixthSong, seventhSong, eighthSong, ninthSong, tenthSong]

describe('Response is valid', () => {
  test(`Response code is ${validResponseCode}`, async () => {
    const standardSongResponse = await handler(firstPageTestEvent)
    const doesResponseCodeMatch = standardSongResponse.statusCode === validResponseCode
    expect(doesResponseCodeMatch).toBe(true)
  })
  test(`Length of songs is ${lengthOfTestSetSongs}`, async () => {
    const standardSongResponse = await handler(firstPageTestEvent)
    const responseBody = JSON.parse(standardSongResponse.body)
    const targetNumberOfTotalSongs = responseBody.numberOfSongs
    const isLengthValid = targetNumberOfTotalSongs === lengthOfTestSetSongs
    expect(isLengthValid).toBe(true)
  }) 
})

describe('Pagination on the first page works correctly', () => {
  firstFiveSongs.forEach((testSong, index) => {
    test(`Test song at index ${index} matches captured`, async () => {
      const standardSongResponse = await handler(firstPageTestEvent)
      const responseBody = JSON.parse(standardSongResponse.body)
      const capturedFirstFiveSongs = responseBody.songs
      const targetSong = capturedFirstFiveSongs[index]
      const areSongsIdentical = isEqual(targetSong, testSong)
      expect(areSongsIdentical).toBe(true)
    })
  })
})

describe('Pagination on the second page works correctly', () => {
  secondFiveSongs.forEach((testSong, index) => {
    test(`Test song at index ${index} matches captured`, async () => {
      const standardSongResponse = await handler(secondPageTestEvent)
      const responseBody = JSON.parse(standardSongResponse.body)
      const capturedFirstFiveSongs = responseBody.songs
      const targetSong = capturedFirstFiveSongs[index]
      const areSongsIdentical = isEqual(targetSong, testSong)
      expect(areSongsIdentical).toBe(true)
    })
  })
})