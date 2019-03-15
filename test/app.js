const chai = require( 'chai' )
const chaiAsPromised = require( 'chai-as-promised' )
const { expect } = chai
chai.use( chaiAsPromised )

const data = require( `${__dirname}/demodata.json` )
const { post } = require( `${__dirname}/../app.js` )

describe( 'POSTer validation', f => {

	it( 'Rejects without a host', function() {
		return expect( post( undefined, '/', {} ) ).to.be.rejected
	} )

	it( 'Rejects without a url path', function() {
		return expect( post( 'https://', undefined, {} ) ).to.be.rejected
	} )

} )