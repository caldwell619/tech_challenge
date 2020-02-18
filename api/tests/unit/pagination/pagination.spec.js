const isEqual = require('lodash.isequal')
const songs = require('@/songs/extra/lib/songs.json')
const { determineWhichSongsAreInPage } = require('@/songs/extra/lib/helpers')

// directly grabbing them by index to eliminate error
const firstSong = songs[0]
const secondSong = songs[1]
const thirdSong = songs[2]
const fourthSong = songs[3]
const fifthSong = songs[4]
const firstFiveSongs = [firstSong, secondSong, thirdSong, fourthSong, fifthSong]

const firstPageNumber = 1
const numberOfSongsPerPageFirstTest = 5

describe('Given a page number of 1, and number of songs per page of 5, the first 5 songs are returned', () => {
  const capturedFirstFiveSongs = determineWhichSongsAreInPage(songs, firstPageNumber, numberOfSongsPerPageFirstTest)
  firstFiveSongs.forEach((testSong, index) => {
    test(`Test song at index ${index} matches captured`, () => {
      const targetSong = capturedFirstFiveSongs[index]
      const areSongsIdentical = isEqual(targetSong, testSong)
      expect(areSongsIdentical).toBe(true)
    })
  })
})