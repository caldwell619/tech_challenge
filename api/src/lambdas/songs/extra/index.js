const songsToSend = require('./lib/songs.json')
const { createHeaders, determineWhichSongsAreInPage } = require('./lib/helpers')

const corsURL = process.env.CORS_URL
const headers = createHeaders(corsURL)


exports.handler = async event => {
  const numberOfSongs = songsToSend.length
  const { numberOfItemsPerPage, currentPage } = event.queryStringParameters
  
  try {
    const songsToReturn = determineWhichSongsAreInPage(songsToSend, currentPage, numberOfItemsPerPage)
    const responseBody = {
      songs: songsToReturn,
      numberOfSongs
    }
    return {
      body: JSON.stringify(responseBody),
      headers,
      statusCode: 200
    }
  } catch(error){
    return {
      body: JSON.stringify(error),
      statusCode: error.statusCode || 500,
      headers
    }
  }
}