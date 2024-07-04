const express = require('express')
const app = express()

const connection = require('./src/config/connectDB')
connection()

const bookRouter = require('./src/routes/bookRouter')

app.use(express.json())

app.use('/book', bookRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})