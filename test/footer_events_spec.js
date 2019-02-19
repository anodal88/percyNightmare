const should = require('chai').should()
const size = require('../actions/size.action')
const login = require('../actions/login.action')
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')


const TEST_URL = environment.baseUrl





describe('Footer Events', function () {
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


    it('Go to Home Page and printing size', function (done) {
        nightmare
            // Load the app.
            .goto(TEST_URL)
            .login()
            .use(percySnapshot("XXXXXXXXXXX", { widths: [300, 600, 1280] }))
            .catch(done)
    })

    // it('Go to Home Page', function (done) {
    //     nightmare
    //         // Load the app.
    //         .goto(TEST_URL)
    //         // Verify that our main app container exists.
    //         .exists('a[title*="Why norwegian"]')
    //         .then(function (exists) {
    //             exists.should.be.true
    //             done()
    //         })
    //         .catch(done)
    // })

    // it("/events", function (done) {
    //     nightmare
    //         // Load the app.
    //         .goto(TEST_URL+"/events")
    //         .use(percySnapshot(this.test.fullTitle(), { widths: [300, 600, 1280] }))
    //         // Verify that our main app container exists.
    //         .exists('a[title*="Why norwegian"]')
    //         .then(function (exists) {
    //             exists.should.be.true
    //             done()
    //         })
    //         .catch(done)
    // })


})
