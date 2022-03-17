const express = require('express')
const router = express.Router()

// Controller
const UserController = require('../controller/user');
const ProductController = require('../controller/product');



// midleware
const authentication = require("../middleware/authentication")





router.post('/login', UserController.loginUser)
router.post('/register', UserController.registerUser)
router.get('/products', authentication, ProductController.getProduct)
router.post('/products', authentication, ProductController.addProduct)
router.get('/categories', authentication, ProductController.getCategories)
router.get('/bucket', authentication, ProductController.getBucket)
router.delete('/bucket/:id', authentication, ProductController.deleteBucket)
router.post('/bucket/add/:id', authentication, ProductController.addToBucket)
router.post('/bucket/buy', authentication, ProductController.buyProduct)





module.exports = router