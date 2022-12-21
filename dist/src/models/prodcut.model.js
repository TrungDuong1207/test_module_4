"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose = require('../config/connectDatabase');
const { Schema, model } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        require: [true, "require must full"]
    },
    price: {
        type: Number,
        require: [true, "require must full"]
    },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    image: String
});
const Product = model('Book', productSchema);
exports.Product = Product;
//# sourceMappingURL=prodcut.model.js.map