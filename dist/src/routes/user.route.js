"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/home", user_controller_1.UserController.showUserPage);
userRoutes.get('/product-category/:id', user_controller_1.UserController.showListByCategory);
userRoutes.get('/about', user_controller_1.UserController.showAboutPage);
userRoutes.get('/contact', user_controller_1.UserController.contact);
userRoutes.get("/cart", user_controller_1.UserController.showCartPage);
userRoutes.get("/cart-add", user_controller_1.UserController.responseProductCart);
userRoutes.post("/cart-add", user_controller_1.UserController.addCart);
userRoutes.get("/cart-delete/:id", user_controller_1.UserController.deleteCart);
userRoutes.get("/order", user_controller_1.UserController.showPageCheckOut);
exports.default = userRoutes;
//# sourceMappingURL=user.route.js.map