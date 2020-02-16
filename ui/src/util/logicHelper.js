
// this is an expensive operation, and would only include if 
// there was business value to search through every obj prop. 
// tried to reduce cost by using a map, but still a double loop. If the category could be narrowed down, performance would dramatically climb
export const filterSongs = (songs, searchTerm) => {
  const filteredSet = songs.filter(song => {
    let doesPass = false
    const keysOfSong = Object.keys(song) 
    for(let key of keysOfSong){
      // coerce to string for numeric values
      const stringVersionOfDataProperty = song[key].toString().toLowerCase()
      if(stringVersionOfDataProperty.includes(searchTerm.toLowerCase())){
        doesPass = true
        break
      }
    }
    return doesPass
  })
  return filteredSet
}