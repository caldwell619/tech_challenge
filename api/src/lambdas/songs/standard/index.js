const songsToSend = require('./lib/songs.json')
const { createHeaders } = require('./lib/helpers')

let corsURL = '*'
if(!process.env.AWS_SAM_LOCAL){
  corsURL = process.env.CORS_URL
} 

const headers = createHeaders(corsURL)

// standard response handler, just send the entire json array of songs

exports.handler = async () => {  
  try{ 
     return {
      body: JSON.stringify({songs: songsToSend}),
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