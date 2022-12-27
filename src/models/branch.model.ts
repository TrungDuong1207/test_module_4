import {model, Schema} from "mongoose";

const branchSchema =  new Schema({
    name: String
})
const Branch = model('Branch',branchSchema);
export {Branch}