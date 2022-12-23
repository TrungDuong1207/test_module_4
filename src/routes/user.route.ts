import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
import {AuthController} from "../controllers/auth.controller";
const userRoutes = Router();


userRoutes.get("/home", UserController.showUserPage);

userRoutes.get('/about', UserController.showAboutPage)
userRoutes.get('/contact', UserController.contact)
userRoutes.get('/change-password', UserController.changePasswordPage)
userRoutes.post('/change-password', AuthController.changePassword)

userRoutes.get("/cart",UserController.showCartpage);


export default userRoutes;
