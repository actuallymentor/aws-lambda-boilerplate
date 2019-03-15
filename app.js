const https = require( 'https' )
const querystring = require( 'querystring' )

const post = ( host ='', url = '', data = {} ) => new Promise( ( resolve, reject ) => {

	// Set up request parameters
	const options = {
	  hostname: host,
	  port: 443,
	  path: url,
	  method: 'POST',
	  headers: {
	  	'Content-Type': 'application/x-www-form-urlencoded',
	  	'Content-Length': data.length
	  }
	}

	// Make the request, reject if status is not 200
	const request = https.request( options, response => response.statusCode != 200 && reject(  ) )

	// On error reject
	request.on( 'error', reject )

	// Send json data
	request.write( querystring.stringify( data ) )

	// End request
	request.end( resolve )

} )

const multiHostPost = ( hosts = [], path = '', data = {} ) => Promise.all( hosts.map( host => post( host, url, data ) ) )

exports.handler = f => f