import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {User} from "../models/user.model";
import { Cart } from "../models/cart.model";

export class UserController {

    static async showUserPage(req, res) {
        let category = await Category.find()
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");

        let productsTrend = await Product.find().limit(7).skip(0);    
        let productSearchMost = await Product.find().limit(4).skip(4);
        let productSale = await Product.find().limit(3).skip(6);
        let products = await Product.find()

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

    static async showAboutPage(req, res) {
        let category = await Category.find()
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");
        res.render('user/about', {
            carts: cart,
            userName: req.decoded.name,
            category: category,
        });
    }

    static async contact (req, res) {
        let category = await Category.find()
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");
        res.render('user/contact', {carts: cart,userName: req.decoded.name, category: category})
    }


    static async showCartpage(req, res){
        let category = await Category.find()
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");

        res.render("user/cart", {carts: cart, userName: req.decoded.name, category: category});
    }

    static async showListByCategory (req, res){

        let id = req.params.id
        console.log(id)
        let product = await Product.find({category: id})
        console.log(product)
        let categorys = await Category.find()
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");

        res.render('user/filterByCategory', {carts: cart,
            userName: req.decoded.name,
            category: categorys,
            product: product

        })

    }


    
}