"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const product_model_1 = require("../models/product.model");
const cart_model_1 = require("../models/cart.model");
class UserController {
    static async showUserPage(req, res) {
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        let productsTrend = await product_model_1.Product.find().limit(7).skip(0);
        let productSearchMost = await product_model_1.Product.find().limit(4).skip(4);
        let productSale = await product_model_1.Product.find().limit(3).skip(6);
        res.render("user/homeUser", { productsTrend: productsTrend, productSearchMost: productSearchMost, productSale: productSale, carts: cart, userName: req.decoded.name });
    }
    static async showAboutPage(req, res) {
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/about', { carts: cart, userName: req.decoded.name });
    }
    static async contact(req, res) {
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/contact', { carts: cart, userName: req.decoded.name });
    }
    static async showCartpage(req, res) {
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        console.log(cart);
        res.render("user/cart", { carts: cart, userName: req.decoded.name });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map