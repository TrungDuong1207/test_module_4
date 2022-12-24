"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_controller_1 = require("../controllers/error.controller");
const express_1 = require("express");
const errorRoutes = (0, express_1.Router)();
errorRoutes.get("/500", error_controller_1.ErrorController.getErrorServer);
errorRoutes.get("/404", error_controller_1.ErrorController.getErrorClient);
exports.default = errorRoutes;
//# sourceMappingURL=error.routes.js.map