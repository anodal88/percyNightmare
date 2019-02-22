const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')




describe('Footer / Special Themed Pages', function () {
    this.timeout('90s')

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

    it('Casino-cruise', function (done) {
        nightmare

            .click('footer a[href*="/casino-cruise"]')
            .use(percySnapshot('casino-cruise', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })


    it('Theme-cruises', function (done) {
        nightmare

            .click('footer a[href*="/theme-cruises"]')
            .use(percySnapshot('theme-cruises', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
})
