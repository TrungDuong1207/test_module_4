import { AuthController } from "../controllers/auth.controller";
import { Router } from 'express';
const authRoutes = Router();


authRoutes.get("/login", AuthController.showFormLogin);

authRoutes.post("/login", AuthController.login);

authRoutes.get("/register", AuthController.showFormRegister);

authRoutes.post("/register", AuthController.register);




export default authRoutes;
