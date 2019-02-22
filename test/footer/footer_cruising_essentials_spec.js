const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')


describe('Footer / Cruising Essentials', function () {
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


    it('Accessible-cruising', function (done) {
        nightmare

            .click('footer a[href*="/accessible-cruising"]')
            .use(percySnapshot('accessible-cruising', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
  

    it('Downloads-overview', function (done) {
        nightmare

            .click('footer a[href*="/downloads/overview"]')
            .use(percySnapshot('downloads-overview', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
})
