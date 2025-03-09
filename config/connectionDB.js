const mongoose = require("mongoose")

const connectDB = async(req,res)=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("connected"))
    .catch(()=>process.exit(1))
}

module.exports = connectDB