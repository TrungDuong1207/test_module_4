"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthController {
    static async showFormLogin(req, res) {
        let error = req.flash().error || [];
        res.render('login', { error: error });
    }
    static showFormRegister(req, res) {
        let error = req.flash().error || [];
        res.render('register', { error: error });
    }
    static async register(req, res) {
        try {
            const user = await user_model_1.User.findOne({ email: req.body.email });
            if (!user) {
                const passwordHash = await bcrypt_1.default.hash(req.body.password, 10);
                let userData = {
                    name: req.body.name,
                    email: req.body.email,
                    role: req.body.role,
                    password: passwordHash,
                    phoneNumber: req.body.phone
                };
                const newUser = await user_model_1.User.create(userData);
                res.redirect("/auth/login");
            }
            else {
                req.flash("error", "User already exists");
                res.redirect("/auth/register");
            }
        }
        catch (err) {
            res.redirect("/auth/register");
        }
    }
    static async login(req, res) {
        try {
            const user = await user_model_1.User.findOne({ email: req.body.email });
            if (user) {
                const comparePass = await bcrypt_1.default.compare(req.body.password, user.password);
                if (!comparePass) {
                    req.flash("error", "Sai mật khẩu!!!");
                    return res.redirect("/auth/login");
                }
                let payload = {
                    user_id: user["id"],
                    name: user["name"],
                    username: user["email"],
                    role: user["role"]
                };
                const token = jsonwebtoken_1.default.sign(payload, '123456789', {
                    expiresIn: 30 * 60 * 1000,
                });
                let options = {
                    maxAge: 1000 * 60 * 30,
                    httpOnly: true,
                };
                res.cookie('token', token, options);
                if (user.role === "admin") {
                    res.redirect("/admin/home");
                }
                else {
                    res.redirect("/user/home");
                }
            }
            else {
                req.flash("error", "Sai tài khoản hoặc mật khẩu");
                res.redirect("/auth/login");
            }
        }
        catch (err) {
            console.log(err);
            res.redirect("/auth/login");
        }
    }
    static changePasswordPage(req, res) {
        let error = req.flash().error || [];
        res.render('changePassword', { error: error });
    }
    static async changePassword(req, res) {
        try {
            const user = await user_model_1.User.findOne({ email: req.body.email });
            if (user) {
                const comparePass = await bcrypt_1.default.compare(req.body.password2, user.password);
                if (!comparePass) {
                    req.flash("error", "Sai Mật khẩu!!!");
                    res.redirect("/auth/changepassword");
                }
                else {
                    const passwordHash = await bcrypt_1.default.hash(req.body.passwordChange, 10);
                    await user_model_1.User.updateOne({ _id: user._id }, { password: passwordHash });
                    res.redirect("/auth/login");
                }
            }
            else {
                req.flash("error", "Không tìm thấy user");
                res.redirect("/auth/changepassword");
            }
        }
        catch (e) {
            console.log(e.message);
            res.redirect("/auth/changepassword");
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map