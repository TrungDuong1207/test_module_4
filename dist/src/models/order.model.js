"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
const orderSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId, ref: "User"
    },
    products: {
        type: product_model_1.productSchema
    },
    amount: Number,
    price: {
        type: Number,
        require: [true, "require must full"]
    },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    image: String,
    description: String,
});
const Product = (0, mongoose_1.model)('Product', product_model_1.productSchema);
//# sourceMappingURL=order.model.js.map