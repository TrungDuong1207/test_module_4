"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorController = void 0;
class ErrorController {
    static getErrorServer(req, res) {
        return res.render('error/500');
    }
    static getErrorClient(req, res) {
        return res.render('error/404');
    }
}
exports.ErrorController = ErrorController;
//# sourceMappingURL=error.controller.js.map