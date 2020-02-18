import sort from "util/sortPrimitives"
import unsortedSongs from "../lib/unsortedSongs.json"
import correctlySortedSongs from "../lib/correctlySortedSongs.json"

const songProperties = Object.keys(unsortedSongs[0]);

describe("Primitive sorting", () => {
  test("Sanity test to compare 2 identical objects stringified", () => {
    const unsortedStringOne = JSON.stringify(unsortedSongs[0])
    const unsortedStringTwo = JSON.stringify(unsortedSongs[0])
    expect(unsortedStringOne).toBe(unsortedStringTwo)
  })
})

describe('Songs sorted in ascending order are correctly sorted', () => {
  songProperties.forEach(property => {
    test(`Property ${property} is sorted correctly`, () => {
      const sortedSongs = sort(unsortedSongs, true, property)
      const stringifiedSongs = JSON.stringify(sortedSongs)
      const correctlySortedSongsStringified = JSON.stringify(correctlySortedSongs[property])
      expect(stringifiedSongs).toBe(correctlySortedSongsStringified)
    })
  })
})

describe('Songs sorted in ascending order are correctly sorted', () => {
  songProperties.forEach(property => {
    test(`Property ${property} is sorted correctly`, () => {
      const sortedSongs = sort(unsortedSongs, true, property)
      const stringifiedSongs = JSON.stringify(sortedSongs)
      const correctlySortedSongsStringified = JSON.stringify(correctlySortedSongs[property])
      expect(stringifiedSongs).toBe(correctlySortedSongsStringified)
    })
  })
})
