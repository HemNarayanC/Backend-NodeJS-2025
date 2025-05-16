let express = require("express");
const cors = require("cors");
const { fetchBooks, addBook, deleteBook, editBook } = require("./controllers/book.controller.js");

const bookRoute = require("./routes/bookRoute.js")

const app = express();

app.use(cors(
  {
    origin: "*", 
  }
)); //to allow cross-origin requests
app.use(express.json());


// require("./database/connection.js");
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

app.use("/api/books", bookRoute);

app.listen(5000, function () {
  console.log("server has started at port: 5000");
});
