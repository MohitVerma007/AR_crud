const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:test12@cluster0.c2wxo4y.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected......');
}).catch((e)=>{
    console.log('not connected......');
})

module.exports = mongoose;