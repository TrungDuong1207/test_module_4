import { Router } from 'express';
import { AdminController } from "../controllers/admin.controller";
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '../../../../public/image/upload');
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


const adminRoutes = Router();


adminRoutes.get("/home", AdminController.showAdminPage);

adminRoutes.get("/add-product", AdminController.showAddPage);
adminRoutes.post("/add-product", upload.single('image'), AdminController.addProduct);
adminRoutes.get('/list-product', AdminController.showList);
adminRoutes.get('/update-product/:id', AdminController.showFormUpdate);
adminRoutes.post('/update-product/:id', upload.single('image'), AdminController.updateProduct)
adminRoutes.get('/delete-product/:id', AdminController.deleteProduct)

adminRoutes.get('/add-user', AdminController.formAddUser)
adminRoutes.post('/add-user', AdminController.addUser)
adminRoutes.get('/list-user', AdminController.listUser)
adminRoutes.get('/update-user/:id', AdminController.formUpdateUser)
adminRoutes.post('/update-user/:id', AdminController.updateUser)
adminRoutes.get('/delete-user/:id', AdminController.deleteUser)

adminRoutes.get('/search-product', AdminController.searchProduct)
adminRoutes.get('/w', AdminController.web)


export default adminRoutes;
