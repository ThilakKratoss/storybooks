const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send('hi its works');
})

const port = process.env.PORT || 4500;
app.listen(port,()=>{
    console.log('server started');
});
