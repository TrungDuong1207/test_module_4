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
        require: [true, "require must full"]
    },
    email: {
        type: String,
        require: [true, "require must full"]
    },
    password: {
        type: String,
        require: [true, "require must full"]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});
const User = model('User', userSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map