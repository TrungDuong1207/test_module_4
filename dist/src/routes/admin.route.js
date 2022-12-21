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
adminRoutes.get("/home", admin_controller_1.AdminController.showAdminPage);
adminRoutes.get("/add-product", admin_controller_1.AdminController.showAddPage);
adminRoutes.post("/add-product", upload.single('image'), admin_controller_1.AdminController.addProduct);
adminRoutes.get('/list', admin_controller_1.AdminController.showList);
adminRoutes.get('/update/:id', admin_controller_1.AdminController.showFormUpdate);
adminRoutes.post('/update/:id', upload.single('image'), admin_controller_1.AdminController.updateProduct);
adminRoutes.get('/delete/:id', admin_controller_1.AdminController.deleteProduct);
exports.default = adminRoutes;
//# sourceMappingURL=admin.route.js.map