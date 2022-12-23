"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/home", user_controller_1.UserController.showUserPage);
userRoutes.get('/about', user_controller_1.UserController.showAboutPage);
userRoutes.get('/contact', user_controller_1.UserController.contact);
userRoutes.get("/cart", user_controller_1.UserController.showCartpage);
exports.default = userRoutes;
//# sourceMappingURL=user.route.js.map