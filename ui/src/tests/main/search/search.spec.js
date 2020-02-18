import unsortedSongs from 'tests/lib/unsortedSongs.json'
import { filterSongs } from 'util/searchThroughObjects'

const searchTerm = 'Lost Ones'
const multiItemSearchTerm = 'Mi'
const emptyStringSearchTerm = ''
const correctEmptyStringSet = JSON.stringify(unsortedSongs)

const correctSearchedObject = JSON.stringify({
    "name": "Lost Ones",
    "songReleaseDate": "04/14/1900",
    "metricA": 90
})
const correctSearchedMultiItemObject = JSON.stringify([
  {
    "name": "Middle Child",
    "songReleaseDate": "10/30/2018",
    "metricA": 23
  },
  {
    "name": "Middle Child",
    "songReleaseDate": "03/30/2020",
    "metricA": 102
  }
])

const lengthOfOriginalSet = unsortedSongs.length
  
describe("Entering a complete search term returns the single object that fits the description", () => {
  test("The 1st index position is the correct object", () => {
    const filteredSongs = filterSongs(unsortedSongs, searchTerm)
    const targetSong = JSON.stringify(filteredSongs[0])
    expect(targetSong).toBe(correctSearchedObject);
  });
  test("The return set from the filter is only one object in length", () => {
    const filteredSongs = filterSongs(unsortedSongs, searchTerm)
    expect(filteredSongs.length).toBe(1);
  });
});

describe("Entering an incomplete search term returns 2 objects that fits the description", () => {
  test("The returned set contain the correct objects", () => {
    const filteredSongs = filterSongs(unsortedSongs, multiItemSearchTerm)
    const targetSongs = JSON.stringify(filteredSongs)
    expect(targetSongs).toBe(correctSearchedMultiItemObject);
  });
  test("The return set from the filter is 2 objects in length", () => {
    const filteredSongs = filterSongs(unsortedSongs, multiItemSearchTerm)
    expect(filteredSongs.length).toBe(2);
  });
});

describe("Entering an empty string returns the entire original set", () => {
  test("The returned set contain all original objects", () => {
    const filteredSongs = filterSongs(unsortedSongs, emptyStringSearchTerm)
    const targetSongs = JSON.stringify(filteredSongs)
    expect(targetSongs).toBe(correctEmptyStringSet);
  });
  test("The return set from the filter is the length of the original set", () => {
    const filteredSongs = filterSongs(unsortedSongs, emptyStringSearchTerm)
    expect(filteredSongs.length).toBe(lengthOfOriginalSet);
  });
});