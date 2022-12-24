import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
const userRoutes = Router();

userRoutes.get("/home", UserController.showUserPage);
userRoutes.get('/product-category/:id', UserController.showListByCategory);

userRoutes.get('/about', UserController.showAboutPage)
userRoutes.get('/contact', UserController.contact)

userRoutes.get("/cart",UserController.showCartPage);
userRoutes.get("/cart-add", UserController.responseProductCart);
userRoutes.post("/cart-add", UserController.addCart);
userRoutes.get("/cart-delete/:id", UserController.deleteCart);

userRoutes.get("/order", UserController.showPageCheckOut)



export default userRoutes;
