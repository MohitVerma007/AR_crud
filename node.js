const express = require('express');
var app = express();
require('./mongo/mongoose');
const newdata = require('./mongo/schema');
const path = require('path');
const hbs = require('hbs');


app.set('view engine','hbs');

app.use(express.static('style'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.post('/',async (req,res)=>{
    try{
        console.log(req.body.name);
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;

        const user = new newdata({
            name,
            email,
            phone
        })

        user.save();
    res.render('index');

        
        console.log("saved");
    }catch(e){
        console.log(e);
    }

    
})

app.listen(8000);