import fs from 'fs'
import unsortedSongs from '../lib/unsortedSongs.json'
import sort from 'util/sortPrimitives'


const songProperties = Object.keys(unsortedSongs[0]);

const mapOfCorrectlyAscendingSortedObjects = {};
const mapOfCorrectlyDescendingSortedObjects = {};

songProperties.forEach(property => {
  const sortedSongs = sort(unsortedSongs, true, property);
  mapOfCorrectlyAscendingSortedObjects[property] = sortedSongs;
});


songProperties.forEach(property => {
  const sortedSongs = sort(unsortedSongs, false, property);
  mapOfCorrectlyDescendingSortedObjects[property] = sortedSongs;
});

describe('This is a seeder', () => {
  test('The purpose of this being here is to use babel', () => {
    // path is ran from root
    fs.writeFileSync("src/tests/lib/correctlySortedAscending.json", JSON.stringify(mapOfCorrectlyAscendingSortedObjects));
    fs.writeFileSync("src/tests/lib/correctlySortedDescending.json", JSON.stringify(mapOfCorrectlyDescendingSortedObjects));
    expect(1).toBe(1)
  })
})