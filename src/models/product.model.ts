
import { Schema, model } from "mongoose";

const productSchema = new Schema ({

    name: {
        type: String,
        require : [true, "require must full"]
    },

    amount: Number,

    price: {
        type : Number,
        require: [true, "require must full"]
    },

    category: { type:Schema.Types.ObjectId, ref: "Category" },

    image: String,

    description: String,

})



const Product = model('Product', productSchema);



export { Product };