"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const product_model_1 = require("../models/product.model");
const category_model_1 = require("../models/category.model");
const user_model_1 = require("../models/user.model");
class AdminController {
    static async showAdminPage(req, res) {
        let nameUser = req.decoded.name;
        console.log(nameUser);
        res.render("admin/indexAdmin", { nameUser: nameUser });
    }
    static async showAddPage(req, res) {
        let nameUser = req.decoded.name;
        let category = await category_model_1.Category.find();
        res.render("admin/addProduct", { category: category, nameUser: nameUser });
    }
    static async addProduct(req, res) {
        const product = new product_model_1.Product({
            image: req.file.originalname,
            name: req.body.name,
            amount: req.body.amount,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description
        });
        await product.save();
        res.redirect("/admin/list-product");
    }
    static async showList(req, res) {
        const products = await product_model_1.Product.find().populate('category');
        res.render("admin/productAdmin", { products: products });
    }
    static async showFormUpdate(req, res) {
        let id = req.params.id;
        let category = await category_model_1.Category.find();
        let product = await product_model_1.Product.find({ _id: id }).populate('category');
        res.render("admin/editProduct", { product: product, category: category });
    }
    static async updateProduct(req, res) {
        let id = req.params.id;
        await product_model_1.Product.findOneAndUpdate({ _id: id }, { $set: {
                image: req.file.originalname,
                name: req.body.name,
                amount: req.body.amount,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description
            }
        });
        res.redirect("/admin/list-product");
    }
    static async deleteProduct(req, res) {
        let id = req.params.id;
        await product_model_1.Product.findOneAndDelete({ _id: id });
        res.redirect("/admin/list-product");
    }
    static formAddUser(req, res) {
        res.render('admin/addClient');
    }
    static async addUser(req, res) {
        let user = new user_model_1.User({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        });
        await user.save();
        res.redirect('/admin/list-user');
    }
    static async listUser(req, res) {
        let user = await user_model_1.User.find();
        res.render('admin/client', { user: user });
    }
    static async formUpdateUser(req, res) {
        let id = req.params.id;
        let user = await user_model_1.User.find({ _id: id });
        res.render("admin/editClient", { user: user });
    }
    static async updateUser(req, res) {
        let id = req.params.id;
        await user_model_1.User.findOneAndUpdate({ _id: id }, { $set: {
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber
            }
        });
        res.redirect('/admin/list-user');
    }
    static async deleteUser(req, res) {
        let id = req.params.id;
        await user_model_1.User.findOneAndDelete({ _id: id });
        res.redirect('/admin/list-user');
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map