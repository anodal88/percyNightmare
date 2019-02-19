const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')


const TEST_URL = environment.baseUrl



describe('Header / Explore', function () {
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


    it('Whats on board ', function (done) {
        nightmare
            .goto(TEST_URL)
            .then(function () {
                return nightmare
                    .click('nav a[href="/why-cruise-norwegian/whats-onboard"]')
                    .use(percySnapshot('why-cruise-norwegian/whats-onboard', { widths: environment.widths }))
            })
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Vacations', function (done) {
        nightmare
            .goto(TEST_URL)
            .then(function () {
                return nightmare
                    .click('nav a[href="/vacations"]')
                    .use(percySnapshot('header_vacations', { widths: environment.widths }))
            })
            .then(function () {
                done()
            })
            .catch(done)
    })




})
