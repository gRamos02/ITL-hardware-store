const { Router }= require('express')
const router = Router();
const products = require('./products.routes')

router.use('/products', products)

module.exports = router;