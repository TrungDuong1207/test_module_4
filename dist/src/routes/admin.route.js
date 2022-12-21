"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '../../../../public/image/upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const adminRoutes = (0, express_1.Router)();
adminRoutes.get("/add-product", admin_controller_1.AdminController.showAddPage);
adminRoutes.post("/add-product", upload.single('image'), admin_controller_1.AdminController.addProduct);
adminRoutes.get('/list-product', admin_controller_1.AdminController.showList);
adminRoutes.get('/update-product/:id', admin_controller_1.AdminController.showFormUpdate);
adminRoutes.post('/update-product/:id', upload.single('image'), admin_controller_1.AdminController.updateProduct);
adminRoutes.get('/delete-product/:id', admin_controller_1.AdminController.deleteProduct);
adminRoutes.get('/add-user', admin_controller_1.AdminController.formAddUser);
adminRoutes.post('/add-user', admin_controller_1.AdminController.addUser);
adminRoutes.get('/list-user', admin_controller_1.AdminController.listUser);
adminRoutes.get('/update-user/:id', admin_controller_1.AdminController.formUpdateUser);
adminRoutes.post('/update-user/:id', admin_controller_1.AdminController.updateUser);
adminRoutes.get('/delete-user/:id', admin_controller_1.AdminController.deleteUser);
exports.default = adminRoutes;
//# sourceMappingURL=admin.route.js.map