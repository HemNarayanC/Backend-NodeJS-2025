let express = require("express");
const { books } = require("./database/connection.js");
const app = express();
app.use(express.json());

require("./database/connection.js");
// app.get("/", (req, res)=>{  //(in sequence request , response)
//     // res.send("<h1>Hello world!</h1>");
//     // res.send("Hello world!");
//     res.json({
//         name: "Hem Narayan Chaudhary",
//         address: "Itahari"
//     })
// })

// app.get("/api/user", function(req, res){
//     res.send("This is route to user");
// })

// app.post("/api/register", function(req, res){
//     res.json({
//         name: "Registered Successfully"
//     })
// })

app.get("/books", async function (req, res) {
  //logic to fetch books from database
  const booksData = await books.findAll(); //equivalent to "select * from books"
  res.json({
    message: "Books fetched Successfully",
    data: booksData
  });
});

app.post("/books", async function(req, res) {
  //logic to add book to database goes here...
  console.log(req.body)
//   const bookName = req.body.bookName;
//   const bookPrice = req.body.bookPrice;
//   console.log(`${bookName}:${bookPrice}`);

  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
//   console.log(`${bookName} : ${bookPrice}`)
await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
})

  res.json({
    message: "Book added Successfully",
  });
});

app.delete("/books/:id", function (req, res) {
  //logic to delete book
  res.json({
    message: "Book deleted Successfully",
  });
});

app.patch("/books/:id", function (req, res) {
  //logic to update book
  res.json({
    message: "Book updated Successfully",
  });
});

app.listen(5000, function () {
  console.log("server has started at port: 5000");
});
