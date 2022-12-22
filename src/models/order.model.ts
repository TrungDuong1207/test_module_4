import { Schema, model } from "mongoose";

const orderSchema = new Schema({

    customer: {
        type: Schema.Types.ObjectId, ref: "User"
    },

    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
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

})



const Order = model('Order', orderSchema);