const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')


const TEST_URL = environment.baseUrl



describe('Header / Help', function () {
    this.timeout('60s')

    let nightmare = null
    beforeEach(function () {
        // Create a new Nightmare instance for each test.
         nightmare = new Nightmare()
    })

    afterEach(function (done) {
        // end the Nightmare instance
        nightmare.end(done)
    })


    it('New to cruising', function (done) {
        nightmare
            .goto(TEST_URL)
            .then(function () {
                return nightmare
                    .click('nav a[href="/new-to-cruising"]')
                    .use(percySnapshot('new-to-cruising', { widths: environment.widths }))
            })
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Faqs', function (done) {
        nightmare
            .goto(TEST_URL)
            .then(function () {
                return nightmare
                    .click('nav a[href="/faq"]')
                    .use(percySnapshot('header_faq', { widths: environment.widths }))
            })
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Contact Us', function (done) {
        nightmare
            .goto(TEST_URL)
            .then(function () {
                return nightmare
                    .click('nav a[href="/about/contact-us"]')
                    .use(percySnapshot('header_contact-us', { widths: environment.widths }))
            })
            .then(function () {
                done()
            })
            .catch(done)
    })




})
