const swag = require('../models/swag');


search=(req,res,next)=>{
const { category } = req.query;

if(category){
    let filteredArray = swag.filter(element=> element.category===category)
    res.status(200).json(filteredArray);
}
res.status(200).json(swag);
}

module.exports={
    search
}