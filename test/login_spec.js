const should = require('chai').should()
const size = require('../actions/size.action')
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')



describe('See my account', function () {
    this.timeout('120s')

    let nightmare = null
    beforeEach(function () {
        // Create a new Nightmare instance for each test.
        nightmare = new Nightmare({
            show:true,
            waitTimeout: 120000, switches: {
                'ignore-certificate-errors': true
            }
        })
        nightmare.goto(environment.baseUrl)
    })

    afterEach(function (done) {
        // end the Nightmare instance
        nightmare.end(done)
    })

    it('Authenticate user', function (done) {
        nightmare
            .click('a[title="Log in"]')
            .type('#userName', 'bgesun')
            .type('#password', 'ncl2011')
            .click('button[type="submit"]')
            .wait('a[aria-label="My Vacation"]')
            .then(()=>{
               return nightmare
               .click('.dropdown-menu a[title="My Account"]')
               .wait(1000)
               .use(percySnapshot('my-account', { widths: environment.widths }))

            })
            .then(function () {
                done()
            })
            .catch(done)
    })

})
