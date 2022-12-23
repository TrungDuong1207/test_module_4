import { Schema, model } from "mongoose";

const cartSchema = new Schema({
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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Cart = model("Cart", cartSchema);