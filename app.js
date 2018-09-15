const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//load user model
require('./models/User');
//passport
require('./config/passport')(passport);


//load keys
const keys = require('./config/keys');

//load routes
const index = require('./routes/index');
const auth = require('./routes/auth');


//map global promises
mongoose.Promise = global.Promise;


//mongoose connect
mongoose.connect(keys.mongoURI,{
    useNewUrlParser:true
})
.then(()=>console.log('MOngo connected'))
.catch(err => console.log('error')); 

const app = express();

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use(cookieParser());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized: false
}));
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//set global users 
app.use((req,res,next)=>{
    res.locals.user = req.user || null;
    next();
});

//use auth
app.use('/',index);
app.use('/auth',auth);




const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server started');
});


//app.get('/',(req,res)=>{
  //  res.send('hi its works');
//});




