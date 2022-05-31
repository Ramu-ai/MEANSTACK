//creating schema
const mongoose = require('mongoose')
const schema = mongoose.Schema;
let book = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
    },
{
    collection:'book'
    
})
//need to export module.....
module.exports=mongoose.model('book',book)
