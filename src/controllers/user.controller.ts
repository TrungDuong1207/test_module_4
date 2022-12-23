import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {User} from "../models/user.model";
import { Cart } from "../models/cart.model";

export class UserController {

    static async showUserPage(req, res) {
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");
        let productsTrend = await Product.find().limit(7).skip(0);    
        let productSearchMost = await Product.find().limit(4).skip(4);
        let productSale = await Product.find().limit(3).skip(6);
        res.render("user/homeUser", {productsTrend: productsTrend, productSearchMost: productSearchMost, productSale: productSale, carts: cart, userName: req.decoded.name});
    }

    static async showAboutPage(req, res) {
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");
        res.render('user/about', {carts: cart, userName: req.decoded.name});
    }

    static async contact (req, res) {
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");
        res.render('user/contact', {carts: cart,userName: req.decoded.name})
    }


    static async showCartpage(req, res){
        let cart = await Cart.findOne({user: req.decoded.user_id}).populate("items.product");
        console.log(cart);
        res.render("user/cart", {carts: cart, userName: req.decoded.name});
    }

    
}