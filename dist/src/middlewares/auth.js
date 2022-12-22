"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuth = async (req, res, next) => {
    try {
        let tokenUser = req.cookies.token;
        if (tokenUser) {
            jsonwebtoken_1.default.verify(tokenUser, "123456789", (err, decoded) => {
                if (err) {
                    console.log(err);
                    return res.render("login");
                }
                else {
                    req.decoded = decoded;
                    return next();
                }
            });
        }
        else {
            return res.redirect("/auth/login");
        }
    }
    catch (err) {
        console.log(err);
        return res.redirect("/auth/login");
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=auth.js.map