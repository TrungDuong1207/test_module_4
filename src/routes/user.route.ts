import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
const userRoutes = Router();


userRoutes.get("/home", UserController.showUserPage);
userRoutes.get('/about', UserController.showAboutPage)
userRoutes.get('/contact', UserController.contact)


export default userRoutes;
