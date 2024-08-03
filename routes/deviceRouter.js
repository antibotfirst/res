const Router = require('express')

const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


// router.get('/',checkRole('ADMIN'), deviceController.create)




router.post('/auth0', deviceController.auth0)
router.post('/auth', deviceController.auth)
router.post('/reg', deviceController.reg)


router.post('/setcatalog', deviceController.setcatalog)

router.post('/createbasketitem', deviceController.createbasketitem)
router.post('/checkbasket', deviceController.checkBasket)
router.post('/get_any_Item', deviceController.get_any_Item)
router.post('/getCategoriaAll', deviceController.getCategoriaAll)
router.post('/getCategoriaOne', deviceController.getCategoriaOne)
router.get('/getItemOne/:id', deviceController.getItemOne)
router.post('/getBasketItemAll', deviceController.getBasketItemAll)
router.put('/updateOneBasketItemPlus', deviceController.updateOneBasketItemPlus)
router.put('/updateOneBasketItemMinus', deviceController.updateOneBasketItemMinus)
router.post('/createBasketItem', deviceController.createBasketItem)
router.delete('/deleteBasketItem/:id', deviceController.deleteBasketItem)

// router.post('/getCategoriaOne1', deviceController.getCategoriaOne1)



router.post('/getLove', deviceController.getLove)
router.post('/createLove', deviceController.createLove)
router.post('/deleteLove', deviceController.deleteLove)
router.post('/gellove_', deviceController.gellove_)

router.post('/createOrder', deviceController.createOrder)
router.post('/getOrder', deviceController.getOrder)



// router.post('/getSchetchiki', deviceController.getSchetchiki)

// router.post('/getSchetchik_data', deviceController.getSchetchik_data)
// router.post('/getSchetchik_data_one', deviceController.getSchetchik_data_one)


// router.post('/createSchetchiki', deviceController.createSchetchiki)





// router.post('/createSchetchiki_by_data', deviceController.createSchetchiki_by_data)

module.exports = router