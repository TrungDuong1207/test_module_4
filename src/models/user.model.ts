import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, "require must full"]
    },
    email: {
        type: String,
        require: [true, "require must full"]
    },
    password: {
        type: String,
        require: [true, "require must full"]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }

})


const User = model('User', userSchema);


export { User };