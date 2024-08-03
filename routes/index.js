const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')



router.use('/user', deviceRouter)


module.exports = router
