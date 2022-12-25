"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const product_model_1 = require("../models/product.model");
const category_model_1 = require("../models/category.model");
const user_model_1 = require("../models/user.model");
const cart_model_1 = require("../models/cart.model");
const order_model_1 = require("../models/order.model");
class UserController {
    static async showUserPage(req, res) {
        try {
            let category = await category_model_1.Category.find();
            let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
            let productsTrend = await product_model_1.Product.find().limit(7).skip(0);
            let productSearchMost = await product_model_1.Product.find().limit(4).skip(4);
            let productSale = await product_model_1.Product.find().limit(3).skip(6);
            let products = await product_model_1.Product.find();
            res.render("user/homeUser", {
                productsTrend: productsTrend,
                productSearchMost: productSearchMost,
                productSale: productSale,
                carts: cart,
                products: products,
                category: category,
                userName: req.decoded.name
            });
        }
        catch (err) {
            console.log(err);
            res.redirect('/error/500');
        }
    }
    static async showAboutPage(req, res) {
        let category = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/about', {
            carts: cart,
            userName: req.decoded.name,
            category: category,
        });
    }
    static async contact(req, res) {
        let category = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/contact', { carts: cart, userName: req.decoded.name, category: category });
    }
    static async showCartPage(req, res) {
        let category = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render("user/cart", { carts: cart, userName: req.decoded.name, category: category });
    }
    static async responseProductCart(req, res) {
        try {
            let products = await product_model_1.Product.findOne({
                _id: req.query.id
            }).populate('category');
            res.status(200).json(products);
        }
        catch (e) {
            res.json({
                'error': e.message
            });
        }
    }
    static async addCart(req, res) {
        try {
            let productCart = req.body.cart;
            let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id });
            if (!cart) {
                const newCart = new cart_model_1.Cart({
                    items: [],
                    user: req.decoded.user_id,
                });
                await newCart.save();
                cart = newCart;
            }
            let checkProductExist = true;
            for (let i = 0; i < cart.items.length; i++) {
                if (cart.items[i].product.toString() === productCart._id) {
                    cart.items[i].quantity++;
                    checkProductExist = false;
                    break;
                }
            }
            ;
            let productNew = {
                product: productCart._id,
                quantity: 1
            };
            if (checkProductExist) {
                cart.items.push(productNew);
            }
            ;
            await cart.save();
            res.status(200).json(cart);
        }
        catch (err) {
            console.log(err);
            res.redirect("/error/500");
        }
    }
    static async deleteProductCart(req, res) {
        try {
            let idProduct = req.params.id;
            let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id });
            cart.items.forEach((item, index) => {
                if (item.product.toString() == idProduct) {
                    cart.items.splice(index, 1);
                }
            });
            await cart.save();
            res.redirect('/user/cart');
        }
        catch (err) {
            console.log(err);
            res.redirect("/error/500");
        }
    }
    static async showListByCategory(req, res) {
        let id = req.params.id;
        console.log(id);
        let product = await product_model_1.Product.find({ category: id });
        console.log(product);
        let categorys = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/filterByCategory', {
            carts: cart,
            userName: req.decoded.name,
            category: categorys,
            product: product
        });
    }
    static async showProduct(req, res) {
        let id = req.params.id;
        let product = await product_model_1.Product.findOne({ _id: id });
        let category = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/product', {
            carts: cart,
            userName: req.decoded.name,
            category: category,
            product: product
        });
    }
    static async searchProduct(req, res) {
        try {
            let keyword = req.query.search;
            let product = await product_model_1.Product.find({ name: keyword });
            console.log(product);
            let category = await category_model_1.Category.find();
            let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
            res.render('user/search', {
                product: product,
                category: category,
                userName: req.decoded.name,
                carts: cart
            });
        }
        catch (e) {
            res.json({
                'error': e.message
            });
        }
    }
    static async showPageCheckOut(req, res) {
        let user = await user_model_1.User.findOne({ _id: req.decoded.user_id });
        let category = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render("user/checkout", { carts: cart, userName: req.decoded.name, category: category, user: user });
    }
    static async checkOut(req, res) {
        try {
            let customer = req.decoded.user_id;
            let items = [];
            let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id });
            cart.items.forEach(item => {
                items.push(item);
            });
            let address = req.body.address;
            let phone = req.body.phone;
            let note = req.body.note;
            let order = {
                customer: customer,
                items: items,
                address: address,
                phone: phone,
                note: note
            };
            await order_model_1.Order.create(order);
            await cart_model_1.Cart.deleteOne({ user: customer });
            res.redirect("/user/order");
        }
        catch (err) {
            console.log(err.message);
        }
    }
    static async showPageOrder(req, res) {
        let user = await user_model_1.User.findOne({ _id: req.decoded.user_id });
        let category = await category_model_1.Category.find();
        let cart = await cart_model_1.Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        let order = await order_model_1.Order.findOne({ customer: req.decoded.user_id }).populate("items.product");
        res.render("user/orderUser", { carts: cart, userName: req.decoded.name, category: category, user: user, order: order });
    }
    static async cancelOrder(req, res) {
        try {
            let id = req.params.id;
            await order_model_1.Order.findOneAndUpdate({ _id: id }, { status: "Đã hủy" });
            res.redirect("/user/order");
        }
        catch (err) {
            console.log(err);
            res.redirect("/error/500");
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map