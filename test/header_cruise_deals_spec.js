const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')


const TEST_URL = environment.baseUrl
const pages = [
    '/cruise-deals',
    '/cruise-deals/choice',
    '/cruise-deals/sail-away-rates',
    '/latitudes-rewards-program/insider-offer'
]


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


    it('Go to Home Page', function (done) {
        nightmare
            // Load the app.
            .goto(TEST_URL)
            // Verify that our main app container exists.
            .exists('a[title*="Why norwegian"]')
            .then(function (exists) {
                exists.should.be.true
                done()
            })
            .catch(done)
    })

    it(pages[0], function (done) {
        nightmare
            // Load the app.
            .goto(TEST_URL+pages[0])
            .use(percySnapshot(this.test.fullTitle(), { widths: [300, 600, 1280] }))
            // Verify that our main app container exists.
            .exists('a[title*="Why norwegian"]')
            .then(function (exists) {
                exists.should.be.true
                done()
            })
            .catch(done)
    })

    it(pages[1], function (done) {
        nightmare
            // Load the app.
            .goto(TEST_URL+pages[1])
            .use(percySnapshot(this.test.fullTitle(), { widths: [300, 600, 1280] }))
            // Verify that our main app container exists.
            .exists('a[title*="Why norwegian"]')
            .then(function (exists) {
                exists.should.be.true
                done()
            })
            .catch(done)
    })

    it(pages[2], function (done) {
        nightmare
            // Load the app.
            .goto(TEST_URL+pages[1])
            .use(percySnapshot(this.test.fullTitle(), { widths: [300, 600, 1280] }))
            // Verify that our main app container exists.
            .exists('a[title*="Why norwegian"]')
            .then(function (exists) {
                exists.should.be.true
                done()
            })
            .catch(done)
    })

    it(pages[3], function (done) {
        nightmare
            // Load the app.
            .goto(TEST_URL+pages[1])
            .use(percySnapshot(this.test.fullTitle(), { widths: [300, 600, 1280] }))
            // Verify that our main app container exists.
            .exists('a[title*="Why norwegian"]')
            .then(function (exists) {
                exists.should.be.true
                done()
            })
            .catch(done)
    })

})
