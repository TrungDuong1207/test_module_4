import { ErrorController } from "../controllers/error.controller";
import { Router } from 'express';

const errorRoutes = Router();

errorRoutes.get("/500", ErrorController.getErrorServer);

errorRoutes.get("/404", ErrorController.getErrorClient )

export default errorRoutes;