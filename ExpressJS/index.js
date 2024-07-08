const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser')

const connection = require('./src/config/connectDB')
connection()

const bookRouter = require('./src/routes/bookRouter')
const userRouter = require('./src/routes/userRouter')

app.use(express.json())
app.use(cookieParser())

app.use('/book', bookRouter)
app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})