
import { Schema, model } from "mongoose";

const productSchema = new Schema ({

    name: {
        type: String,
        require : [true, "Name can't be blank"]
    },

    amount: Number,

    price: {
        type : Number,
        require: [true, "Price can't be blank"]
    },

    category: { type:Schema.Types.ObjectId, ref: "Category" },

    image: String,

    description: String,


})



const Product = model('Product', productSchema);



export { Product, productSchema };