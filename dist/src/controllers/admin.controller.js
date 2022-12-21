"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const product_model_1 = require("../models/product.model");
const category_model_1 = require("../models/category.model");
class AdminController {
    static async showAddPage(req, res) {
        let category = await category_model_1.Category.find();
        res.render("admin/addProduct", { category: category });
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
        res.redirect("/admin/list");
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
        let product = await product_model_1.Product.findOneAndUpdate({ _id: id }, { $set: {
                image: req.file.originalname,
                name: req.body.name,
                amount: req.body.amount,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description
            }
        });
        res.redirect("/admin/list");
    }
    static async deleteProduct(req, res) {
        let id = req.params.id;
        await product_model_1.Product.findOneAndDelete({ _id: id });
        res.redirect("/admin/list");
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map