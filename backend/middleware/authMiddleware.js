const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {

    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from bearer above
            // Bearer JSHSSJSKSSH -> split('') => ['beaer' 'tojeje']
            token = req.headers.authorization.split(' ')[1] // gives just the token 

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //GET user from the token using the user id from the token payload
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }