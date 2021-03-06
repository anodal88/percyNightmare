const { environment } = require('../environments/environment')
const Nightmare = require('nightmare')
const { percySnapshot } = require('@percy/nightmare')



describe('Footer / Our Company', function () {
  this.timeout('90s')

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

  it('About', function (done) {
    nightmare
        .click('footer a[href="/about"]')
        .use(percySnapshot('about', { widths: environment.widths }))
        .then(function () {
            done()
        })
        .catch(done)
})


it('Security-information', function (done) {
  nightmare
      .click('footer a[href="/about/security-information"]')
      .use(percySnapshot('security-information', { widths: environment.widths }))
      .then(function () {
          done()
      })
      .catch(done)
})

it('Environmental-commitment', function (done) {
  nightmare
      .click('footer a[href="/about/environmental-commitment"]')
      .use(percySnapshot('environmental-commitment', { widths: environment.widths }))
      .then(function () {
          done()
      })
      .catch(done)
})

it('Media-center', function (done) {
  nightmare
      .click('footer a[href="/media-center"]')
      .use(percySnapshot('media-center', { widths: environment.widths }))
      .then(function () {
          done()
      })
      .catch(done)
})

it('Partners', function (done) {
  nightmare
      .click('footer a[href="/partners"]')
      .use(percySnapshot('partners', { widths: environment.widths }))
      .then(function () {
          done()
      })
      .catch(done)
})

it('International-offices', function (done) {
  nightmare
      .click('footer a[href="/international-offices"]')
      .use(percySnapshot('international-offices', { widths: environment.widths }))
      .then(function () {
          done()
      })
      .catch(done)
})


it('Agent-locator', function (done) {
  nightmare
      .click('footer a[href="/agent-locator"]')
      .use(percySnapshot('agent-locator', { widths: environment.widths }))
      .then(function () {
          done()
      })
      .catch(done)
})
 
  // it('With no todos, hides main section and footer', function (done) {
  //   nightmare
  //     .goto(TEST_URL)
  //     .visible('.main')
  //     .then(function (mainVisible) {
  //       mainVisible.should.be.false
  //       return nightmare.visible('.footer')
  //     })
  //     .then(function (footerVisible) {
  //       footerVisible.should.be.false
  //       done()
  //     })
  //     .catch(done)
  // })

  // it('Accepts a new todo', function (done) {
  //   nightmare
  //     .goto(TEST_URL)
  //     .evaluate(function () {
  //       return document.querySelectorAll('.todo-list li').length
  //     })
  //     .then(function (todoListLength) {
  //       // We start with an empty to-do list.
  //       todoListLength.should.eq(0)

  //       // Add a new to-do item.
  //       return nightmare.type('.new-todo', 'New fancy todo')
  //         .wait('.todo-list li')
  //         .use(percySnapshot('Accepts a new todo'))
  //         .evaluate(function () {
  //           return document.querySelectorAll('.todo-list li').length
  //         })
  //     })
  //     .then(function (todoListLength) {
  //       // Our to-do list should contain 1 element.
  //       todoListLength.should.eq(1)
  //       done()
  //     })
  //     .catch(done)
  // })

  // it('Lets you check off a todo', function (done) {
  //   nightmare
  //     .goto(TEST_URL)
  //     .type('.new-todo', 'A thing to accomplish')
  //     .evaluate(function () {
  //       return document.querySelector('.todo-count').textContent
  //     })
  //     .then(function (itemCountText) {
  //       itemCountText.should.eq('1 item left')

  //       return nightmare
  //         .click('input.toggle')
  //         .use(percySnapshot('Checked-off todo', {widths: [300, 600, 1000]}))
  //         .evaluate(function () {
  //           return document.querySelector('.todo-count').textContent
  //         })
  //     })
  //     .then(function (itemCountText) {
  //       itemCountText.should.eq('0 items left')
  //       done()
  //     })
  //     .catch(done)
  // })
})
