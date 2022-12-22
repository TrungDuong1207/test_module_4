"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    adress: String,
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
    totalMoney: Number,
});
const Order = (0, mongoose_1.model)('Order', orderSchema);
//# sourceMappingURL=order.model.js.map