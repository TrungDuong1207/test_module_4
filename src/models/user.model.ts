const mongoose = require('../config/connectDatabase')
const { Schema, model } =  mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        require : [true, "require must full"]
    },
    password: {
        type: String,
        require : [true, "require must full"]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }

})


const User = model('User', userSchema);


export { User };