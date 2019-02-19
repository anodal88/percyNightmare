const Nightmare = require('nightmare')
const { environment } = require('../environment')

Nightmare.action('login', function (done) {
    this.evaluate_now(function () {
       return $.ajax({
            url: 'https://qa3-web.ncl.com/booking-quote/authUser',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({ username: "bgesun", password: "ncl2011" }),
            async: false
        })
    }, done)
  
})



