const db = require('../models/index')
const bcrypt = require('bcrypt');
const { generateToken, generateRefreshToken } = require('../config/jwtToken')

const createUser = (newUser) => {
    return new Promise( async (resolve, reject) => {
        const {name, email, password} = newUser;

        try{
            const checkUser = await db.User.findOne({where:{email: email}})
            if(checkUser){
                return resolve('Email da duoc su dung')
            }
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await db.User.create({
                name,
                email,
                password: hashPassword
            })
            if(user){
                resolve(user)
            }
        } catch(e){
            console.log(e)
            reject({message: 'Error', status: 400})
        }
    })
}

const loginUser = (user) => {
    return new Promise( async (resolve, reject) => {
        const {email, password} = user

        try{
            const checkUser = await db.User.findOne({where:{email: email}})
            if(!checkUser){
                return resolve('Email khong ton tai')
            }
            const comparePassword = await bcrypt.compare(password, checkUser.password)
            if(!comparePassword){
                return resolve('Mat khau khong dung')
            }
            const accessToken = generateToken(checkUser.id)
            const refreshToken = generateRefreshToken(checkUser.id)
            resolve({
                accessToken,
                refreshToken
            })
        } catch(e){
            console.log(e)
            reject({message: 'Error', status: 400})
        }
    })
}

module.exports = {
    createUser,
    loginUser
}