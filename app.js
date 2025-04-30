
let express = require("express");
const app = express();

app.get("/", (req, res)=>{  //(in sequence request , response)
    res.send("Hello world!");
})

app.get("/api/user", function(req, res){
    res.send("This is route to user");
})


app.listen(5000, function(){
    console.log("server has started at port: 5000");
})