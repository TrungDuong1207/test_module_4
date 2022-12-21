import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

export class AdminController {
    static async showAdminPage(req, res) {
        res.render("admin/indexAdmin");
    }

    static async showAddPage(req, res) {
        let category = await Category.find()
        res.render("admin/addProduct", { category: category })
    }

    static async addProduct(req, res) {
        const product = new Product({
            image: req.file.originalname,
            name: req.body.name,
            amount: req.body.amount,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description
        })
        await product.save()
        res.redirect("/admin/list")
    }

    static async showList(req, res) {
        const products = await Product.find().populate('category');
        res.render("admin/productAdmin", { products: products })
    }

    static async showFormUpdate(req, res) {
        let id = req.params.id;
        let category = await Category.find();
        let product = await Product.find({ _id: id }).populate('category');
        res.render("admin/editProduct", { product: product, category: category })
    }

    static async updateProduct(req, res) {
        let id = req.params.id

        let product = await Product.findOneAndUpdate({ _id: id },
            {
                $set: {
                    image: req.file.originalname,
                    name: req.body.name,
                    amount: req.body.amount,
                    price: req.body.price,
                    category: req.body.category,
                    description: req.body.description
                }
            })
        res.redirect("/admin/list");
    }

    static async deleteProduct(req, res) {
        let id = req.params.id
        await Product.findOneAndDelete({ _id: id })
        res.redirect("/admin/list")
    }
}