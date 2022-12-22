"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const express_1 = require("express");
const passport_middleware_1 = __importDefault(require("../middlewares/passport.middleware"));
const authRoutes = (0, express_1.Router)();
authRoutes.get("/login", auth_controller_1.AuthController.showFormLogin);
authRoutes.post("/login", auth_controller_1.AuthController.login);
authRoutes.get("/register", auth_controller_1.AuthController.showFormRegister);
authRoutes.post("/register", auth_controller_1.AuthController.register);
authRoutes.get("/facebook", passport_middleware_1.default.authenticate("facebook", { scope: ["email"] }));
authRoutes.get("/facebook/callback", passport_middleware_1.default.authenticate("facebook", {
    failureRedirect: "/auth/login",
    successRedirect: "/user/shop"
}));
exports.default = authRoutes;
//# sourceMappingURL=auth.route.js.map