const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')
const {authUser, authIsAdmin} = require('../middlewares/authUser')

router.post('/create-book', bookController.createBook)
router.get('/books', authUser, bookController.getAllBooks)

module.exports = router