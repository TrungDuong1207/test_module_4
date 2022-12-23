import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
import {AuthController} from "../controllers/auth.controller";
const userRoutes = Router();


userRoutes.get("/home", UserController.showUserPage);

userRoutes.get('/about', UserController.showAboutPage)
userRoutes.get('/contact', UserController.contact)
userRoutes.get('/changePassword', UserController.changePasswordPage)
userRoutes.post('/changePassword', AuthController.changePassword)

userRoutes.get("/cart",UserController.showCartpage);

export default userRoutes;
