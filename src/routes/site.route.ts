import {Router} from 'express';
import { SiteController } from '../controllers/site.controller';

const siteRoutes = Router();
siteRoutes.get("/", SiteController.getDashboard);

export default siteRoutes;
