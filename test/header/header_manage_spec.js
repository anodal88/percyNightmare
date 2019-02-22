const should = require('chai').should()
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environments/environment')


const TEST_URL = environment.baseUrl



describe('Header / Manage', function () {
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


    it('Prepare-for-your-cruise', function (done) {
        nightmare

            .click('nav a[href="/freestyle-cruise/prepare-for-your-cruise"]')
            .use(percySnapshot('prepare-for-your-cruise', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Getting-to-the-pier', function (done) {
        nightmare

            .click('nav a[href="/freestyle-cruise/getting-to-the-pier"]')
            .use(percySnapshot('getting-to-the-pier', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Cruise-travel-documents', function (done) {
        nightmare

            .click('nav a[href="/freestyle-cruise/cruise-travel-documents"]')
            .use(percySnapshot('cruise-travel-documents', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Booksafe', function (done) {
        nightmare

            .click('nav a[href="/freestyle-cruise/booksafe"]')
            .use(percySnapshot('booksafe', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Solo-cruising', function (done) {
        nightmare

            .click('nav a[href="/freestyle-cruise/solo-cruising"]')
            .use(percySnapshot('solo-cruising', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })

    it('Onboard-packages', function (done) {
        nightmare

            .click('nav a[href="/onboard-packages"]')
            .use(percySnapshot('onboard-packages', { widths: environment.widths }))
            .then(function () {
                done()
            })
            .catch(done)
    })



})
