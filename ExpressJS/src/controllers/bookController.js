const bookService = require('../services/bookService')

const createBook = async (req, res) => {
    try{
        const {name, author, price} = req.body;
        if(!name || !author || !price){
            return res.status(400).json({
                status: 'Error',
                message: 'Missing required fields'
            })
        }
        const response = await bookService.createBook(req.body)
        res.status(200).json({
            status: 'Success',
            data: response
        })
    } catch(e){
        res.status(500).json({
            status: 'Error',
            message: e.message
        })
    }
}

const getAllBooks = async(req, res) => {
    try{
        const response = await bookService.getAllBooks()
        res.status(200).json({
            status: 'Success',
            data: response
        })
    } catch(e){
        res.status(500).json({
            status: 'Error',
            message: e.message
        })
    }
}

module.exports = {
    createBook,
    getAllBooks
}