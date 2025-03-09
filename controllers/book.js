const Book = require("../models/book")
const multer = require("multer"); 
const path = require("path")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("./public/uploads"));
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.originalname
      cb(null, filename);
    }
  })
  
  const upload = multer({ storage: storage })


const getBooks=(req,res)=>{
    res.status(200).json({message:"hello"})
};

const addNewBook = async(req,res)=>{
    console.log(req.file)

    const {title,price,description,author} = req.body

    if(!title || !price || !author){
        return res.status(400).json({message:"All fields are requied"})
    }

    const book = await Book.find({title})
    if(book.length!=0){
        return res.render("addBook",{error:"Book already exist"})
    }

    const newBook = await Book.create({
        title,
        price,
        description,
        author,
        coverImage
    });

    res.redirect("/")

}


module.exports={getBooks ,addNewBook,upload};