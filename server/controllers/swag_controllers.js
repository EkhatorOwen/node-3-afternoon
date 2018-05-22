const swag = require('../models/swag');

read=(req,res,next)=>{

 res.status(200).json(swag)

}

module.exports={
    read
}