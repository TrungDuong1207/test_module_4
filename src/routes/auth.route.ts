import { AuthController } from "../controllers/auth.controller";
import { Router } from 'express';
const authRoutes = Router();

authRoutes.get("/", AuthController.showFormLogin);

authRoutes.post("/", AuthController.login);

export default authRoutes;
