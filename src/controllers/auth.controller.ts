import { User } from "../models/user.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthController {
    static showFormLogin(req, res) {
        let error = req.flash().error || [];
        // console.log(error);
        res.render('login', { error: error });
    }

    static async login(req, res) {

        try {

            const user = await User.findOne({ email: req.body.email });

            if (user) {

                const comparePass = await bcrypt.compare(req.body.password, user.password);

                if (!comparePass) {

                    req.flash("error", "PASSWORD_NOT_VALID")
                    return res.redirect("/login");
                }

                let payload = {

                    user_id: user["id"],

                    username: user["email"],

                    role: user["role"]

                }

                const token = jwt.sign(payload, '123456789', {

                    expiresIn: 30 * 60 * 1000,

                });

                let options = {
                    maxAge: 1000 * 60 * 30, // would expire after 30 minutes
                    httpOnly: true, // The cookie only accessible by the web server
                }

                res.cookie('token', token, options);

                if(user.role === "admin"){
                    res.render("admin/dashboard");
                } else {
                    res.render("user/shop");
                }   

            } else {
                req.flash("error", "Sai tài khoản hoặc mật khẩu");
                res.redirect("/login");
            }

        } catch (err) {
            console.log(err);
            res.redirect("/login");
        }

    };

}
