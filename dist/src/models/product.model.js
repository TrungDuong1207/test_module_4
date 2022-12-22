"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "Name can't be blank"]
    },
    amount: Number,
    price: {
        type: Number,
        require: [true, "Price can't be blank"]
    },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    image: String,
    description: String,
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map