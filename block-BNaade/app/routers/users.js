let router = require("express").Router();
let user = require("../models/users");

router.post("/", (req, res, next) => {

    if (req.body.id) {
        console.log("It contains Id So update");
        user.updateOne({_id: req.body.id}, {
            name: req.body.name,
            age: +req.body.age,
            email: req.body.email
        }, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                console.log(doc);
            }
        });
    } else {
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
            console.log("hi",doc);
        });
    }

    
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
        res.send(doc);
        console.log(doc);
    });
});

router.get("/:id/edit", (req, res, next) => {
    user.find({_id: req.params.id}, (err, doc) => {
        console.log(doc);
        res.render("singleUser", {user: doc})
    })
});

module.exports = router;