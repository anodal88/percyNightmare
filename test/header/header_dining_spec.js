const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')




describe('Dining', function () {
    this.timeout('120s')

    let nightmare = null
    beforeEach(function () {
        // Create a new Nightmare instance for each test.
        nightmare = new Nightmare()
        nightmare.goto(environment.baseUrl)
    })

    afterEach(function (done) {
        // end the Nightmare instance
        nightmare.end(done)
    })

    it('Navigate to home page and click menu item', function (done) {
        nightmare
            .click('a[href*="cruise-dining"]')
            .use(percySnapshot('header_cruise-dining', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    // it('Navigate to home page and click menu item', function (done) {
    //     nightmare
    //         .click('.header_navigation a[href="/why-cruise-norwegian/cruise-dining"]')
    //         .use(percySnapshot('header_cruise-dining', { widths: environment.widths }))

    //         .then(function () {
    //             done()
    //         })
    //         .catch(done)
    // })




})
