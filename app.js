let express = require("express");
const app = express();

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

app.get("/books", function (req, res) {
  //logic to fetch books from database
  res.json({
    message: "Books fetched Successfully",
  });
});

app.post("/books", function (req, res) {
  //logic to add book to database goes here...
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
