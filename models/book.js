// defines the book schema , it defines what are the fields we require our the table

const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    coverImage:{
        type:String
    },
    price:{
        type:String,
        required:true
    }
},
{timestamps:true}
);

module.exports=mongoose.model("Book",bookSchema) // Book - collection name (table name) , bookSchema 