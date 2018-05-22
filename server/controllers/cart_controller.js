const swag = require('../models/swag');

add=(res,req) =>{
  const  { id } = req.query;
  let { cart } = req.session.user;

  const index = swag.findIndex(element => element.id == id);

  if(index===-1){
      const selectedSwag = swag.find(element => element.id ==id)

      cart.push( selectedSwag )
      req.session.user.total += selectedSwag.price
  }
 res.status(200).json(req.session.user)
}

remove = (res, req) =>{
    const  { id } = req.query;
    const { cart } = req.session.user

    const selectedSwag = swag.find(element => element.id ==id)

    if( selectedSwag ) {
        const i = cart.findIndex(element => element.id==id)
        cart.splice(i,1);
        req.session.user.total-= selectedSwag.price
    }    
   res.status(200).json(req.session.user)
}

checkout = (res, req) =>{
    const { user } = req.session
    user.cart = [];
    user.total = 0;
    
    res.status(200).json(req.session.user)

}

module.exports ={
    add,
    remove,
    checkout
}