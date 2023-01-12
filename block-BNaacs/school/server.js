let express = require("express");
let ejs = require("ejs");

let app = express();


app.set("view engine", "ejs")
app.set("views", __dirname + "/views");













app.listen(3000, () => {
    console.log("The Server is up and running at http://localhost:3000");
});