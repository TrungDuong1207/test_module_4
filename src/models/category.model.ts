
import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: String,
    english: String
})

const Category = model('Category', categorySchema);

export {Category};
