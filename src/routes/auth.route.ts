import { AuthController } from "../controllers/auth.controller";
import { Router } from 'express';
import passport from "../middlewares/passport.middleware";
const authRoutes = Router();


authRoutes.get("/login", AuthController.showFormLogin);

authRoutes.post("/login", AuthController.login);

authRoutes.get("/register", AuthController.showFormRegister);

authRoutes.post("/register", AuthController.register);

authRoutes.get("/facebook", passport.authenticate("facebook", {scope : ["email"]}));

authRoutes.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        failureRedirect: "/auth/login",
        successRedirect: "/user/shop"
    }),
    
);

// authRoutes.get(
//     "/google",
//     passport.authenticate("google", {
//         scope: ["profile", "email"],
//     })
// );

// authRoutes.get(
//     "/google/callback",
//     passport.authenticate("google", {
//         failureRedirect: "/login",
//     }),
// );




export default authRoutes;
