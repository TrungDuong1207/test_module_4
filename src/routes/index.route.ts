
import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import {checkAuth}  from "../middlewares/auth";
import errorRoutes from "./error.routes";

import adminRoutes from "./admin.route";

function route(app) {
    
    app.use("/auth", authRoutes);

    app.use(checkAuth);

    app.use("/user", userRoutes);

    app.use('/admin', adminRoutes);

    app.use('/error', errorRoutes);

}

export default route;