exports.createHeaders = (corsUrl = '*') => ({
  'Access-Control-Allow-Origin': corsUrl,
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Cache-Control': 'no-store, no-cache',
  'Pragma': 'no-cache',
  'Strict-Transport-Security': 'max-age=31536000',
  'Content-Type': 'application/json'
})

exports.determineWhichSongsAreInPage = (songs, currentPage, numberOfItemsPerPage) => {
  let startingIndex
  if(parseInt(currentPage) === 1){
    startingIndex = 0
  } else {
    startingIndex = (parseInt(currentPage) -1 ) * parseInt(numberOfItemsPerPage)
  }
  const capturedSongs = [...songs].splice(startingIndex, numberOfItemsPerPage)
  return capturedSongs
}

