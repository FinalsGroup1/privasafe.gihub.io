const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userInformation = new Schema(
    {
        name:{
            type: String,
        },
        email:{
            type: String,
        },
        issue:{
            type: String,
        },
    },
    {
        collection: "finals",
    }
);
module.exports = mongoose.model('userInformation', userInformation);