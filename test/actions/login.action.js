const Nightmare = require('nightmare')
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp)
const { environment } = require('../environments/environment')

/**
 * Authenticate the user and navigate to the home page to reload the auth cookies
 */
Nightmare.action('login', async function (done) {

  const response = await chai.request.agent(environment.baseUrl)
    .post(environment.authPath)
    .send(environment.creadentials)
  chai.expect(response).to.have.status(200);
  let responseCookies = (response.header['set-cookie'] || [])
    .map((cookie) => cookie.split(';'))
    .filter(arr => arr.length > 0)
    .map(ca => {
      let parts = ca[0].split('=')
      return {
        name: parts[0],
        value: parts[1]
      }
    })
  await this.cookies.set(responseCookies)
  this.goto(environment.baseUrl)
  done()
})
