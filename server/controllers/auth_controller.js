const users = require('../models/users');
let id = 1;

login=(req,res,next)=>{
const {username, password} = req.body;

//const user = users.find( user => user.username === username && user.password === password );
let user = users.find(element=>{ element.username ===username && element.password ===password })

if(user){
    req.session.user.username = username
    res.status(200).json(req.session.user)
    }
    res.status(500).json("Unauthorized")
}

register=(req,res,next)=>{

    const {username, password} = req.body;
    users.push({id, username,password})
    id++
    req.session.user.username = username;
    res.status(200).json(req.session.user)
}

signout=(req,res,next)=>{
    req.session.destroy();
    res.status(200).json(req.session)
}

getUser =(req,res,next)=>{
    res.status(200).json(req.session.user)

}


module.exports ={
    login,
    register,
    signout,
    getUser
}

