let jwt = require('jsonwebtoken');
const config = require('../config/config')();

module.exports = (req,res,next) => {
    let token = req.headers['x-access-token'];
    if(!token){
        res.status(401).json({
            status : false,
            message : 'Unauthorized'
        });
        return;
    }
    jwt.verify(token,config.JWT_SECRET,(err,decoded)=>{
        if(err){
            res.status(401).json({
                status : false,
                message : 'Unauthorized && Invalid Token'
            });
            return;
        }else{
            req.user = decoded;
            next();
        }
    });
}