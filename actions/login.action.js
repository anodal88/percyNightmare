const Nightmare = require('nightmare')
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { environment } = require('../environment')
var app = environment.baseUrl
Nightmare.action('login', function (done) {
    chai.request(app)
        .post(environment.authPath)
        .send(environment.creadentials)
        .end(function (err, res) {
            console.log("STATUS:",res.status)
            expect(res.status).to.equal("200");
        });
    done()
});