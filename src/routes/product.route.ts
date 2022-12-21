import { Router } from 'express';

const productRoutes = Router();

import { Product } from "../models/product.model";
import {Category} from "../models/category.model"

import multer from 'multer';

const upload = multer();


export default productRoutes;