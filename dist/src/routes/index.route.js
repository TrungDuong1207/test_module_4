"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_route_1 = __importDefault(require("./site.route"));
function route(app) {
    app.use("/admin/dashboard", site_route_1.default);
}
exports.default = route;
//# sourceMappingURL=index.route.js.map