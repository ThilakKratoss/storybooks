const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');


//passport
require('./config/passport')(passport);

//load routes
const auth = require('./routes/auth');

const app = express();
app.get('/',(req,res)=>{
    res.send('hi its works');
})

//use auth
app.use('/auth',auth);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server started');
});




