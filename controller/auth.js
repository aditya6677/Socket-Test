const jwt = require('jsonwebtoken');
const config = require('../config/config')();


const userLogin = (req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(!username || !password){
        res.status(401).json({
            status : false,
            message : 'Invalid Username/Password'
        });
        return;
    }

    let token = jwt.sign({username: username} , config.JWT_SECRET, {expiresIn: '24h'});
    res.status(200).json({
        status : true,
        message : 'Authentication Successful',
        token : token
    });
    return;
}

const userRegister = (req,res) => {
    let firstName = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    if(!username || !password || !email){
        res.status(401).json({
            status : false,
            message : 'Invalid Input'
        });
        return;
    }


    
} 

module.exports = {
    userLogin,
    userRegister
}