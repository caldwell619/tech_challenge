const songsToSend = require('./lib/songs.json')
const { createHeaders } = require('./lib/helpers')

const corsURL = process.env.CORS_URL
const headers = createHeaders(corsURL)


exports.handler = async () => {
  try {
    return {
      body: JSON.stringify(songsToSend),
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