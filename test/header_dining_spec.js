const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')


const TEST_URL = environment.baseUrl



describe('Special Themed Pages', function () {
    this.timeout('40s')

    let nightmare = null
    beforeEach(function () {
        // Create a new Nightmare instance for each test.
        nightmare = new Nightmare()
    })

    afterEach(function (done) {
        // end the Nightmare instance
        nightmare.end(done)
    })


    it('Navigate to home page and click menu item', function (done) {
        nightmare
            .goto(TEST_URL)
            .then(function () {
                return nightmare
                    .click('.header_navigation a[href="/why-cruise-norwegian/cruise-dining"]')
                    .use(percySnapshot('header_cruise-dining' , { widths: environment.widths }))
            })
            .then(function () {
                done()
            })
            .catch(done)
    })




})
