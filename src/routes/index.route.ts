
import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import {checkAuth}  from "../middlewares/auth";
import errorRoutes from "./error.routes";
import { checkPermission } from "../middlewares/permission";

import adminRoutes from "./admin.route";

function route(app) {
    app.use('/error', errorRoutes);
    
    app.use("/auth", authRoutes);

    app.use(checkAuth);

    app.use("/user", userRoutes);

    app.use(checkPermission);

    app.use('/admin', adminRoutes);

    

}

export default route;
