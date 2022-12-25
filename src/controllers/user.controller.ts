import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { User } from "../models/user.model";
import { Cart } from "../models/cart.model";
import { Order } from "../models/order.model";

export class UserController {

    static async showUserPage(req, res) {
        try{
            let category = await Category.find()
            let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
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
        } catch (err){
            console.log(err);
            res.redirect('/error/500');
            
        }
        
    }

    static async showAboutPage(req, res) {
        let category = await Category.find()
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/about', {
            carts: cart,
            userName: req.decoded.name,
            category: category,
        });
    }

    static async contact(req, res) {
        let category = await Category.find()
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/contact', { carts: cart, userName: req.decoded.name, category: category })
    }

    static async showCartPage(req, res) {
        let category = await Category.find();
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render("user/cart", { carts: cart, userName: req.decoded.name, category: category });
    }

    static async responseProductCart(req, res) {
        try {
            let products = await Product.findOne(
                {
                    _id: req.query.id
                }
            ).populate('category');
            res.status(200).json(products);
        } catch (e) {
            res.json({
                'error': e.message
            })
        }
    }

    static async addCart(req, res) {
        try {
            let productCart = req.body.cart;
            // console.log(productCart);
            // console.log(req.decoded);
            let cart = await Cart.findOne({ user: req.decoded.user_id });
            if (!cart) {
                const newCart = new Cart({
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
            };
            let productNew = {
                product: productCart._id,
                quantity: 1
            };
            if (checkProductExist) {
                cart.items.push(productNew);
            };

            await cart.save();

            res.status(200).json(cart);

        } catch (err) {
            console.log(err);
            res.redirect("/error/500");

        }
    }

    static async deleteProductCart(req, res) {
        try {
            let idProduct = req.params.id;
            let cart = await Cart.findOne({ user: req.decoded.user_id });
            cart.items.forEach((item, index) => {
                if (item.product.toString() == idProduct) {
                    cart.items.splice(index, 1);

                }
            })

            await cart.save();

            res.redirect('/user/cart');

        } catch (err) {
            console.log(err);
            res.redirect("/error/500");
        }
    }

    static async showListByCategory(req, res) {
        let id = req.params.id
        console.log(id)
        let product = await Product.find({ category: id })
        console.log(product)
        let categorys = await Category.find()
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/filterByCategory', {
            carts: cart,
            userName: req.decoded.name,
            category: categorys,
            product: product
        })
    }
    static async showProduct (req, res) {
        let id = req.params.id
        let product = await Product.findOne({_id: id})
        let category = await Category.find()
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render('user/product', {
            carts: cart,
            userName: req.decoded.name,
            category: category,
            product: product
        });
    }
    static async searchProduct (req, res) {
        try {
            let keyword = req.query.search
            let product = await Product.find({name: keyword})
            console.log(product)
            let category = await Category.find()
            let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
            res.render('user/search', {
                product: product,
                category: category,
                userName: req.decoded.name,
                carts: cart
            })
        }catch (e) {
            res.json({
                'error': e.message
            })
        }
    }

    static async showPageCheckOut(req, res) {
        let user = await User.findOne({_id: req.decoded.user_id});
        let category = await Category.find();
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        res.render("user/checkout", { carts: cart, userName: req.decoded.name, category: category, user: user });
    }

    static async checkOut(req, res){
        try {
            let customer =  req.decoded.user_id;
            let items = [];  
            let cart = await Cart.findOne({ user: req.decoded.user_id });
            
            cart.items.forEach(item =>{
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
            }
            await Order.create(order);            
            //delete cart
            await Cart.deleteOne({user: customer})
            
            res.redirect("/user/order");

        } catch (err) {
            console.log(err.message)
        }
    }

    static async showPageOrder(req, res){
        let user = await User.findOne({_id: req.decoded.user_id});
        let category = await Category.find();
        let cart = await Cart.findOne({ user: req.decoded.user_id }).populate("items.product");
        let order = await Order.findOne({customer: req.decoded.user_id}).populate("items.product");
        res.render("user/orderUser", {carts: cart, userName: req.decoded.name, category: category, user: user, order: order });
    }

    static async cancelOrder(req, res){
        try {
            let id = req.params.id;
            await Order.findOneAndUpdate({_id: id}, {status: "Đã hủy"});
            res.redirect("/user/order");
            
        } catch (err){
            console.log(err);
            res.redirect("/error/500");            
        }
    }
    
}
