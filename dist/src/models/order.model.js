"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId, ref: "User"
    },
    items: [
        {
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    address: {
        type: String,
        required: [true, "address can't be blank"]
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "Đang xử lý",
        enum: ["Đang xử lý", "Đang giao", "Hoàn tất", "Đã hủy"]
    },
    note: String,
});
const Order = (0, mongoose_1.model)('Order', orderSchema);
exports.Order = Order;
//# sourceMappingURL=order.model.js.map