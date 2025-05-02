const { fetchBooks, addBook, deleteBook, editBook, fetchBookById } = require("../controllers/book.controller")

const router = require("express").Router()

router.route("/")
.get(fetchBooks)
.post(addBook)

router.route("/:id")
.delete(deleteBook)
.patch(editBook)
.get(fetchBookById)
module.exports = router;