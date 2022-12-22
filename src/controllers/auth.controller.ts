import { User } from "../models/user.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthController {
    static showFormLogin(req, res) {
        let error = req.flash().error || [];
        // console.log(error);
        res.render('login', { error: error });
    }

    static showFormRegister(req, res) {
        let error = req.flash().error || [];
        // console.log(error);
        res.render('register', { error: error });
    }

    static async register(req, res) {
        try {

            const user = await User.findOne({ email: req.body.email });

            // console.log(user);

            if (!user) {

                const passwordHash = await bcrypt.hash(req.body.password, 10);

                let userData = {

                    name: req.body.name,

                    email: req.body.email,

                    role: req.body.role,

                    password: passwordHash,

                    phoneNumber: req.body.phone

                }

                const newUser = await User.create(userData);

                res.redirect("/auth/login");

            } else {
                req.flash("error", "User already exists");
                res.redirect("/auth/register");
            }

        } catch (err) {
            res.redirect("/auth/register");

        }
    }

    static async login(req, res) {

        try {

            const user = await User.findOne({ email: req.body.email });

            if (user) {

                const comparePass = await bcrypt.compare(req.body.password, user.password);

                if (!comparePass) {

                    req.flash("error", "PASSWORD_NOT_VALID");
                    return res.redirect("/auth/login");

                }
                
                let payload = {

                    user_id: user["id"],

                    name: user["name"],

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
                
                
                if (user.role === "admin") {
                    res.redirect("/admin/home");
                } else {
                    res.redirect("/user/home");
                }

            } else {
                req.flash("error", "Sai tài khoản hoặc mật khẩu");
                res.redirect("/auth/login");

            }

        } catch (err) {
            console.log(err);

            res.redirect("/auth/login");
        }

    };

    // static async loginFacebook(req, res, next) {
    //     let data = {
    //       name: req.user.displayName,
    //       email: req.user.id + "@gmail.com",
    //       passport: Math.random(),
    //     };
    //     const accessToken = await Token.signAccessToken(data);
    //     res.cookie("login", accessToken, {
    //       maxAge: 1000 * 60 * 60 * 24,
    //       httpOnly: true,
    //     });
    //     res.redirect("/home");
    //   }

    // static async loginGoogle(req, res, next) {
    //     try {
    //           let data = {
    //             name: req.user.displayName,
    //             email: req.user.emails[0].value,
    //             passport: Math.random(),
    //           };
    //           const accessToken = await Token.signAccessToken(data);
    //           res.cookie("login", accessToken, {
    //             maxAge: 1000 * 60 * 60 * 24,
    //             httpOnly: true,
    //           });
    //           res.redirect("/home");
    //     } catch (err) {
    //       next(err);
    //     }
    //   }

}
