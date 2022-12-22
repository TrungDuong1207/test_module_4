import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {User} from "../models/user.model";

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
        res.redirect("/admin/list-product")
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
        await Product.findOneAndUpdate({_id: id},
            {$set: {
                    image:  req.file.originalname,
                    name: req.body.name,
                    amount: req.body.amount,
                    price: req.body.price,
                    category: req.body.category,
                    description: req.body.description
            }
        })
        res.redirect("/admin/list-product");
    }

    static async deleteProduct(req, res) {
        let id = req.params.id
        await Product.findOneAndDelete({_id: id})
        res.redirect("/admin/list-product")
    }

    static formAddUser (req, res) {
        res.render('admin/addClient')
    }

    static async addUser (req, res) {
        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        })
        await user.save()
        res.redirect('/admin/list-user')
    }

    static async listUser (req, res) {
        let user = await User.find()
        res.render('admin/client', {user: user})
    }

    static async formUpdateUser (req, res) {
        let id = req.params.id
        let user = await User.find({_id: id});
        console.log(id)
        res.render("admin/editClient", {user: user})
    }

    static async updateUser (req, res) {
        let id = req.params.id
        await User.findOneAndUpdate({_id:id},
            {$set: {
                    name: req.body.name,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber
                }
            })
        res.redirect('/admin/list-user')
    }

    static async deleteUser (req, res) {
        let id = req.params.id
        await User.findOneAndDelete({_id :id})
        res.redirect('/admin/list-user')
    }
}