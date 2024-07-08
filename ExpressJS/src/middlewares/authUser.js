const db = require('../models/index')
const jwt = require('jsonwebtoken');

const authUser = async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await db.User.findByPk(decoded.id)
                req.user = user;
                next();
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(401).json({ message: "You are not authorized to access this resource"})
    }
}

const authIsAdmin = async (req, res, next) => {
    const { email } = req.user;
    const adminUser = await db.User.findOne({where: {email: email}});
    if(adminUser.role == 'admin'){
        next();
    }
}

module.exports = { authUser, authIsAdmin }