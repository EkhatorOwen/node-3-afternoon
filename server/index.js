require('dotenv').config();
const express = require('express')
const app = express();
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const port = 3000;

const {checkForSession} = require('./middlewares/checkForSession');
const { read } = require('./controllers/swag_controllers');
const { login, register, signout, getUser } = require('./controllers/auth_controller');
const { add,remove,checkout } = require('./controllers/cart_controller');
const { search } = require('./controllers/search_controller')


app.use(cors());
app.use(json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkForSession)
app.use(express.static(`${__dirname}/build`))



app.get('/api/swag',read)
app.post('/api/login',login)
app.post('/api/register',register)
app.post('/api/signout',signout)
app.get('/api/user',getUser)
app.post('api/cart',add);
app.post('/api/cart/checkout',checkout)
app.delete('/api/cart',remove)
app.get('/api/search',search)




app.listen(port,()=>{console.log(`I am listening on port ${port}`)});
