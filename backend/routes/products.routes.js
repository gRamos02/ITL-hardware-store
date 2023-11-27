const { Router } = require('express')

const routes = Router();

routes.get('/', (req, res) => {
    console.log("PRODUCTOS");
    res.json({message: "products"}) 
})


module.exports = routes;