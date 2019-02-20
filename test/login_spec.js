const should = require('chai').should()
const size = require('../actions/size.action')
const login = require('../actions/login.action')
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')
const { environment } = require('../environment')



describe('See my account', function () {
    this.timeout('120s')

    let nightmare = null
    beforeEach(function () {
        // Create a new Nightmare instance for each test.
         nightmare = new Nightmare({waitTimeout:120000})
        nightmare.goto(environment.baseUrl)
    })

    afterEach(function (done) {
        // end the Nightmare instance
        nightmare.end(done)
    })

    // it("test",function(done){
    //     nightmare
    //     .login()
       
    //     .then(()=>{
    //         return nightmare.use(percySnapshot('logged', { widths: environment.widths }))
    //     })
    //     .then(()=>{
    //         done()
    //     })
    //     .catch(done)
    // })
    it('Authenticate user', function (done) {
        nightmare
            .click('a[title="Log in"]')
            .type('#userName', 'bgesun')
            .type('#password', 'ncl2011')
            .click('button[type="submit"]')
            .wait('li[data-js="logged-in"]')
            .then(()=>{
               return nightmare
               .click('a[data-js="logged-in-view-account"]')
               .use(percySnapshot('my-account', { widths: environment.widths }))

            })
            .then(function () {
                done()
            })
            .catch(done)
    })

})
