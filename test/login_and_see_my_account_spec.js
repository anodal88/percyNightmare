const login = require('./actions/login.action')
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('./environments/environment')
var chai = require('chai');
var chaiHttp = require('chai-http');


chai.use(chaiHttp);


describe('See my account', function () {
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


    it('Authenticate user', (done) => {
        nightmare
            .login() //Authenticate the user and reload the page
            .then(() => {
                return nightmare
                    .click('.header a.linkItem[href*="my-account"]')
                    .wait(2000)
                    .use(percySnapshot('my-account', { widths: environment.widths }))
            })
            .then(() => {
                done()
            })
            .catch(done)
    })
})
