import { Schema, model } from "mongoose";
import { productSchema } from "./product.model";

const orderSchema = new Schema({

    customer: {
        type: Schema.Types.ObjectId, ref: "User" 
    },

    products: {
        type: productSchema
    },

    amount: Number,

    price: {
        type: Number,
        require: [true, "require must full"]
    },

    category: { type: Schema.Types.ObjectId, ref: "Category" },

    image: String,

    description: String,


})



const Product = model('Product', productSchema);