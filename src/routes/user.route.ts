import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
import {AdminController} from "../controllers/admin.controller";
import adminRoutes from "./admin.route";
const userRoutes = Router();

userRoutes.get("/home", UserController.showUserPage);

userRoutes.get('/about', UserController.showAboutPage)
userRoutes.get('/contact', UserController.contact)

userRoutes.get("/cart",UserController.showCartPage);
userRoutes.get("/cart-add", UserController.showAddCart);
userRoutes.post("/cart-add", UserController.addCart);
userRoutes.get("/cart-delete/:id", UserController.deleteCart);

userRoutes.get('/product-category/:id', UserController.showListByCategory)
userRoutes.get('/product/:id', UserController.showProduct)

userRoutes.get('/search-product', UserController.searchProduct)
export default userRoutes;
