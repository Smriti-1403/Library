//for displaying the frontend page
const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("home")
});

router.get("/add/new",(req,res)=>{
    res.render("addBook")
});

module.exports=router