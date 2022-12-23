import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

export const Cart = model("cart", cartSchema);