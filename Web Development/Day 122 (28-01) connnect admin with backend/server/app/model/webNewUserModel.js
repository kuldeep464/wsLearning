const mongoose = require("mongoose");

let newUserSchema = new mongoose.Schema(
    {
        userFirstName: {
            type: String,
            required: true,
        },
        userLastName: {
            type: String,
        },
        userEmail: {
            type: String,
            unique: true,
            required: true
        },
        userPassword: {
            type: String,
            // required: true,
        },
        shopFor:{
            type:String,
            required:true
        }

    },
    {
        timestamps: true
    }
);

let newUserModel = mongoose.model('user', newUserSchema);

module.exports = { newUserModel }

