let router = require("express").Router();
let user = require("../models/users");

router.post("/", (req, res, next) => {
    let userBody = {
        name: req.body.name,
        age: +req.body.age,
        email: req.body.email
    };
    // console.log(userBody);
    user.create(userBody, (err, doc) => {
        if (err) {
            res.redirect("/users/new")
        }
        console.log(doc);
    });
});
router.get("/new", (req, res, next) => {
    res.render("createForm");
});
router.get("/", (req, res, next) => {
    user.find({}, function (err, doc) {
        res.send(doc);
        });
});

router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    user.find({_id: id}, (err, doc) => {
        res.render("singleUser", {user: doc[0]});
        console.log(doc);
    });
});

module.exports = router;