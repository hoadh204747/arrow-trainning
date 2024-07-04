const db = require('../models/index')

const createBook = async (newBook) => {
    return new Promise(async (resolve, reject) => {
        const {name, author, price} = newBook;
        try{
            const book = await db.Book.create({name, author, price})
            if(book){
                resolve(book)
            }
        } catch(e){
            reject(e)
        }
    })
}

const getAllBooks = async () => {
    return new Promise(async (resolve, reject) => {
        try{
            const books = await db.Book.findAll()
            resolve(books)
        } catch(e){
            reject(e)
        }
    })
}

module.exports = {
    createBook,
    getAllBooks
}