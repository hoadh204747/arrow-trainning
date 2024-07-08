const userService = require('../services/userService')
const { generateToken } = require('../config/jwtToken')
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try{
        const {name, email, password} = req.body
        const user = await userService.createUser({name, email, password})
        res.status(200).json({
            message: 'User created successfully',
            data: user
        })
    } catch(e){
        res.status(400).json({
            message: e.message
        })
    }
}

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body
        const response = await userService.loginUser({email, password})
        res.cookie('refreshToken', response.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        })
        return res.status(200).json({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
        })
    } catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const refreshToken = async (req, res) => {
    const token = req.cookies.refreshToken
    if (!token) {
        return res.status(401).json("You are not authenticated!")
    }
    jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        err && console.log(err)
        const accessToken = await generateToken(user.id);
        res.json({
            accessToken: accessToken
        })
    })
}

module.exports = {
    createUser,
    loginUser,
    refreshToken
}