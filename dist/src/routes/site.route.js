"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const site_controller_1 = require("../controllers/site.controller");
const siteRoutes = (0, express_1.Router)();
siteRoutes.get("/", site_controller_1.SiteController.getDashboard);
exports.default = siteRoutes;
//# sourceMappingURL=site.route.js.map