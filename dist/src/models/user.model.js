"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name can't be blank"]
    },
    email: {
        type: String,
        required: [true, "Email can't be blank"]
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number can't be blank"]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    }
});
const User = model('User', userSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map