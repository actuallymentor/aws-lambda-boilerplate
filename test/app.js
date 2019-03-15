const chaiAsPromised = require( 'chai-as-promised' )
const { expect } = require( 'chai' )
const env = {
	host: process.env.sendyHosts
}

chai.use( chaiAsPromised )

const data = require( `${__dirname}/demodata.json` )
const app = require( `${__dirname}/../app.js` )

describe( 'Environment validation', f => {

	it( 'Rejects if X', function() {

		return Promise

	} )

} )