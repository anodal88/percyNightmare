const should = require('chai').should()
const size = require('../actions/size.action')
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')
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

    it('Endpoint', (done) => {
            nightmare
            .inject('js','node_modules/chai/chai.js')
            .inject('js','node_modules/chai-http/dist/chai-http.js')
            .evaluate(function(){
                chai.use(chaiHttp)
                return  chai.request("https://qa2-web.ncl.com")
                .post("/booking-quote/authUser")
                .send({ username: "bgesun", password: "ncl2011" })
            })
            .then((res)=>{
                //var cookiesRes = res.
                console.log(res.headers)
                done()
            })
            .catch(done)
    })

    // it('Authenticate user', function (done) {
    //     nightmare
    //         .click('a[title="Log in"]')
    //         .type('#userName', 'bgesun')
    //         .type('#password', 'ncl2011')
    //         .click('button[type="submit"]')
    //         .wait('a[aria-label="My Vacation"]')
    //         .then(()=>{
    //            return nightmare
    //            .click('.dropdown-menu a[title="My Account"]')
    //            .wait(1000)
    //            .use(percySnapshot('my-account', { widths: environment.widths }))

    //         })
    //         .then(function () {
    //             done()
    //         })
    //         .catch(done)
    // })

})
