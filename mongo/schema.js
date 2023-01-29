const mongoose = require("mongoose");
const validator = require('validator');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
          },
    phone:{
        type:Number,
        unique:true,
        required:true,
     }
});

const newdata = new mongoose.model('newdata',schema);
module.exports = newdata;