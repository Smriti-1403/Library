const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDB = require("./config/connectionDB")

const PORT = process.env.PORT  || 9001
connectDB()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",require("./routes/staticRouter"))
app.use("/book",require("./routes/book"))

app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})