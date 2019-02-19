const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')


describe('Header / Why Cruise Norwegian', function () {
    this.timeout('40s')

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


    it('The free style experience', function (done) {
        nightmare

            .click('.header_navigation a[href="/why-cruise-norwegian"]')
            .use(percySnapshot('why-cruise-norwegian', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })
})
