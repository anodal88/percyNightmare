const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')



describe('Footer / The Norwegian Differene', function () {
    this.timeout('120s')

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

    it('Norwegian-edge', function (done) {
        nightmare

            .click('footer a[href*="/norwegian-edge"]')
            .use(percySnapshot('norwegian-edge', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('The-haven', function (done) {
        nightmare

            .click('footer a[href*="/the-haven"]')
            .use(percySnapshot('the-haven', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

   

})
