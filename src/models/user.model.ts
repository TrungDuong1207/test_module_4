import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,

        required: [true, "Name can't be blank"]
    },

    email: {
        type: String,
        required: [true, "Email can't be blank"]
    },

    password: {
        type: String,
        required: [true, "Password can't be blank"]
    },

    phoneNumber: {
        type: String,
        required: [true, "Phone Number can't be blank"]
    },


    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }


})


const User = model('User', userSchema);


export { User };