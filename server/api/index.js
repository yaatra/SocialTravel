const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./events'))
router.use('/categories', require('./categories'))
router.use('/destinations', require('./destinations'))
router.use('/yelp', require('./yelp'))
router.use('/news', require('./news'))
router.use('/weather', require('./weather'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
