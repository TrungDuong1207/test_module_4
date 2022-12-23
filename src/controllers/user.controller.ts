import {Product} from "../models/product.model";
import {Category} from "../models/category.model";
import {User} from "../models/user.model";

export class UserController {
    static async showUserPage(req, res) {
        let productsTrend = await Product.find().limit(7).skip(0);    
        let productSearchMost = Product.find().limit(4).skip(4);
        res.render("user/homeUser", {productsTrend: productsTrend, productSearchMost: productSearchMost});
    }

    static showAboutPage(req, res) {
        res.render('user/about')
    }

    static contact (req, res) {
        res.render('user/contact')
    }

    static showCartpage(req, res){
        res.render
    }
}