const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')



describe('Footer / Events', function () {
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

    it('Footer-events', function (done) {
        nightmare

            .click('footer a[href*="events"]')
            .use(percySnapshot('footer-events', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
})
