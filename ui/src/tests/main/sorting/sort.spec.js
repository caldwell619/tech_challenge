import sort from "util/sortPrimitives"
import unsortedSongs from "tests/lib/unsortedSongs.json"
import correctlySortedAscendingSongs from "tests/lib/correctlySortedAscending.json"
import correctlySortedDescendingSongs from "tests/lib/correctlySortedDescending.json"

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
    test(`Property "${property}" is sorted correctly`, () => {
      const sortedSongs = sort(unsortedSongs, true, property)
      const stringifiedSongs = JSON.stringify(sortedSongs)
      const correctlySortedSongsStringified = JSON.stringify(correctlySortedAscendingSongs[property])
      expect(stringifiedSongs).toBe(correctlySortedSongsStringified)
    })
  })
})

describe('Songs sorted in descending order are correctly sorted', () => {
  songProperties.forEach(property => {
    test(`Property "${property}" is sorted correctly`, () => {
      const sortedSongs = sort(unsortedSongs, false, property)
      const stringifiedSongs = JSON.stringify(sortedSongs)
      const correctlySortedSongsStringified = JSON.stringify(correctlySortedDescendingSongs[property])
      expect(stringifiedSongs).toBe(correctlySortedSongsStringified)
    })
  })
})
