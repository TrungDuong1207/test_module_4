"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const express_1 = require("express");
const authRoutes = (0, express_1.Router)();
authRoutes.get("/", auth_controller_1.AuthController.showFormLogin);
authRoutes.post("/", auth_controller_1.AuthController.login);
exports.default = authRoutes;
//# sourceMappingURL=auth.route.js.map