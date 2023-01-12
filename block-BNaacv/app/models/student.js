let mongoose = require("mongoose");


let Schema = mongoose.Schema;

let student = new Schema({
    name: {type: String, required: true, minlength: 5},
    class: {type: Number, required: true},
    rollNum: {type: Number, required: true},
    subjects: {type: [String]}
}, {timestamps: true});

let Student = mongoose.model("Student",student);
module.exports = Student;


