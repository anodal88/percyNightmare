const Nightmare = require('nightmare')
Nightmare.action('size', function(done) {
    this.evaluate_now(() => {
      const w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      const h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
      return {
        height: h,
        width: w
      }
    }, done)
  })