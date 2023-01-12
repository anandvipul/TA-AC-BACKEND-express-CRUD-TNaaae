let router = require("express").Router();
let Student = require("../models/student");

let formData = {};

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/", (req, res) => {
    // handle form reguest
    let formData = req.body;
    let inputStudent = new Student(formData);
    inputStudent.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.render("submitted");
        }
    });
    
    console.log(formData);
});

router.get("/:rollnumber", (req, res) => {
    let rollNumber = req.params.rollnumber;
    Student.find({rollNum: rollNumber}, function (err, doc) {
        console.log(doc);
        res.render("single", {doc: doc[0]});
    });
});


router.get("/", (req, res) => {
    //handle mongoose find query
    Student.find({}, function (err, doc) {
        res.render("allStudents", {docs: doc});
        console.log(doc[0]);
    });
    
    console.log("Serve find Query");
});

module.exports = router;