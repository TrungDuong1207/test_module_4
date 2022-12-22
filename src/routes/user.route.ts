import { UserController } from "../controllers/user.controller";
import { Router } from 'express';
const userRoutes = Router();


userRoutes.get("/home", UserController.showUserPage);

// userRoutes.post("/login", UserController.login);

export default userRoutes;
