"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "require must full"]
    },
    price: {
        type: Number,
        require: [true, "require must full"]
    },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    image: String
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map