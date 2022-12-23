"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const product_model_1 = require("../models/product.model");
class UserController {
    static async showUserPage(req, res) {
        let productsTrend = await product_model_1.Product.find().limit(7).skip(0);
        let productSearchMost = product_model_1.Product.find().limit(4).skip(4);
        res.render("user/homeUser", {
            productsTrend: productsTrend,
            productSearchMost: productSearchMost,
        });
    }
    static showAboutPage(req, res) {
        res.render('user/about');
    }
    static contact(req, res) {
        res.render('user/contact');
    }
    static changePasswordPage(req, res) {
        res.render('user/changePassword');
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map