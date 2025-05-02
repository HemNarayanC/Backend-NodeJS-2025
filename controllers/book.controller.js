const { books } = require("../database/connection.js");
exports.fetchBooks = async function (req, res) {
  //logic to fetch books from database
  const booksData = await books.findAll(); //equivalent to "select * from books"
  res.json({
    message: "Books fetched Successfully",
    data: booksData,
  });
};

exports.addBook = async function (req, res) {
  //logic to add book to database goes here...
  console.log(req.body);
  //   const bookName = req.body.bookName;
  //   const bookPrice = req.body.bookPrice;
  //   console.log(`${bookName}:${bookPrice}`);

  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  //   console.log(`${bookName} : ${bookPrice}`)

  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    await books.create({
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,
    });

    res.json({
      message: "Book added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding book to the database",
      error: error.message,
    });
  }
};

exports.deleteBook = function (req, res) {
  //logic to delete book
  res.json({
    message: "Book deleted Successfully",
  });
};

exports.editBook = function (req, res) {
  //logic to update book
  res.json({
    message: "Book updated Successfully",
  });
};

exports.fetchBookById = async function (req, res) {
  const id = req.params.id;
  const data = await books.findByPk(id);
  res.json({
    message: "Book by ID fetched successfully",
    data,
  });
};

// module.exports = {fetchBooks, addBook, deleteBook, editBook}
