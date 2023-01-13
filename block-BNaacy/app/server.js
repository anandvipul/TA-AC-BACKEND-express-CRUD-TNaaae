let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/bookstore");

let app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({extended: false}));
app.use(logger("dev"));

app.use("/", require(__dirname + "/routers/index"));
app.use("/users", require(__dirname + "/routers/users"));

app.get((req, res, next) => {
    res.render("404");
    next();
});

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(3000, () => {
    console.log("The Server is Up and Running at http://localhost:3000");
});