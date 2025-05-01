// columns: books, bookName, bookAuthor, bookGenre

const { Model } = require("sequelize");

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bookPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bookGenre: {
      type: DataTypes.STRING,
    },
});
console.log("first")

  return Book;
};

module.exports = bookModel;
