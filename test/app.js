// Set up chai
const chai = require( 'chai' )
const chaiAsPromised = require( 'chai-as-promised' )

// Config chai
chai.use( chaiAsPromised )
chai.should()

// App data etc
const data = require( `${__dirname}/demodata.json` )
const { post, multiHostPost } = require( `${__dirname}/../app.js` )

describe( 'POSTer validation', f => {

	it( 'Rejects without a host', function() {
		return post( undefined, '/', {} ).should.be.rejected
	} )

	it( 'Rejects without a url path', function() {
		return post( 'https://', undefined, {} ).should.be.rejected
	} )

} )

describe( 'Multihost POSTer validation', f => {

	it( 'Rejects without a host', function() {
		return post( undefined, '/', {} ).should.be.rejected
	} )

	it( 'Rejects without a url path', function() {
		return post( ['https://'], undefined, {} ).should.be.rejected
	} )

	it( 'Rejects with a non-array hosts parameter', function() {
		return post( 'https://', undefined, {} ).should.be.rejected
	} )

} )