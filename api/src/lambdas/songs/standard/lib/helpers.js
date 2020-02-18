exports.createHeaders = (corsUrl = '*') => ({
  'Access-Control-Allow-Origin': corsUrl,
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Cache-Control': 'no-store, no-cache',
  'Pragma': 'no-cache',
  'Strict-Transport-Security': 'max-age=31536000',
  'Content-Type': 'application/json'
})