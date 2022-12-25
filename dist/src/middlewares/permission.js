"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermission = void 0;
const checkPermission = (req, res, next) => {
    if (req.decoded.role === "admin") {
        return next();
    }
    else {
        res.redirect('/user/home');
    }
};
exports.checkPermission = checkPermission;
//# sourceMappingURL=permission.js.map