let {Schema, model} = require("mongoose");

let user = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String}
}, {timestamps: true});

let User = model("User", user);

module.exports = User;