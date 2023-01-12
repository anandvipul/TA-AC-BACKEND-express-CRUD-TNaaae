let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");


mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/test", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to mongodb")
    }
});

let app = express();

let router = express.Router();

app.use(logger("dev"));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



app.use("/", require("./student/index.js"));
app.use("/students", require("./student/students"));

app.listen(3000, () => {
    console.log("The Server is up and Running at http://localhost:3000")
});