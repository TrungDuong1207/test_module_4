import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
import {AdminController} from "../controllers/admin.controller";
import adminRoutes from "./admin.route";
const userRoutes = Router();

userRoutes.get("/home", UserController.showUserPage);
userRoutes.get('/product-category/:id', UserController.showListByCategory);

userRoutes.get('/about', UserController.showAboutPage)
userRoutes.get('/contact', UserController.contact)

userRoutes.get("/cart",UserController.showCartPage);
userRoutes.get("/cart-add", UserController.responseProductCart);
userRoutes.post("/cart-add", UserController.addCart);
userRoutes.get("/cart-delete/:id", UserController.deleteProductCart);

userRoutes.get("/order", UserController.showPageCheckOut);
userRoutes.post("/order", UserController.checkOut)

userRoutes.get('/product-category/:id', UserController.showListByCategory);
userRoutes.get('/product/:id', UserController.showProduct);
userRoutes.get('/search-product', UserController.searchProduct)
export default userRoutes;
