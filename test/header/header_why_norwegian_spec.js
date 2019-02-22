const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')


const TEST_URL = environment.baseUrl



describe('Header / Why Norwegian', function () {
    this.timeout('60s')

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


    it('Cruise-packages-and-hotels', function (done) {
        nightmare
            .click('nav a[href="/why-cruise-norwegian/cruise-packages-and-hotels"]')
            .use(percySnapshot('cruise-packages-and-hotels', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Cruise-accommodations', function (done) {
        nightmare

            .click('a[href*="cruise-accommodations"]')
            .use(percySnapshot('cruise-accommodations', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Cruise-entertainment', function (done) {
        nightmare

            .click('a[href*="cruise-entertainment"]')
            .use(percySnapshot('cruise-entertainment', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Family-cruises', function (done) {
        nightmare

            .click('a[href*="family-cruises"]')
            .use(percySnapshot('family-cruises', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Latitudes-rewards-program', function (done) {
        nightmare

            .click('nav a[href="/latitudes-rewards-program"]')
            .use(percySnapshot('latitudes-rewards-program', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
})
