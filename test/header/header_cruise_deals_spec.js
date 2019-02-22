const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')



describe('Cruise Deals', function () {
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

    // it('Cruise-deals', function (done) {
    //     nightmare
    //         .click('nav a[href="/cruise-deals"]')
    //         .use(percySnapshot('cruise-deals', { widths: environment.widths }))
    //         .then(function () {
    //             done()
    //         })
    //         .catch(done)
    // })

    // it('Cruise-deals-choice', function (done) {
    //     nightmare
    //         .click('a[href*="/choice"]')
    //         .use(percySnapshot('cruise-deals-choice', { widths: environment.widths }))
    //         .then(function () {
    //             done()
    //         })
    //         .catch(done)
    // })

    it('Sail-away-rates', function (done) {
        nightmare

            .click('nav a[href*="/sail-away-rates"]')
            .use(percySnapshot('sail-away-rates', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Latitudes-rewards-program', function (done) {
        nightmare
            .click('nav a[href*="/insider-offer"]')
            .use(percySnapshot('atitudes-rewards-program-inside-offer', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
})
