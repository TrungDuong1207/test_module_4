
import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: String,
    age: Number,
    salary: Number,
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Branch'
    }
})
const Employee = model('Employee', employeeSchema)
export {Employee};