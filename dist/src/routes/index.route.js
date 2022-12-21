"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_route_1 = __importDefault(require("./site.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const admin_route_1 = __importDefault(require("./admin.route"));
function route(app) {
    app.use("/shop", site_route_1.default);
    app.use("/login", auth_route_1.default);
    app.use('/admin', admin_route_1.default);
}
exports.default = route;
//# sourceMappingURL=index.route.js.map