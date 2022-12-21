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

adminRoutes.get("/add-product", AdminController.showAddPage);

adminRoutes.post("/add-product", upload.single('image'), AdminController.addProduct);

adminRoutes.get('/list', AdminController.showList);

adminRoutes.get('/update/:id', AdminController.showFormUpdate);

adminRoutes.post('/update/:id', upload.single('image'), AdminController.updateProduct)

adminRoutes.get('/delete/:id', AdminController.deleteProduct)


export default adminRoutes;