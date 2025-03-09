const express = require("express")
const router = express.Router()
const {getBooks,addNewBook,upload} = require("../controllers/book")

router.get("/", getBooks);
router.post("/",upload.single('coverImage'),addNewBook);

module.exports = router