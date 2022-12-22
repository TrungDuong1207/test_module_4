
import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import {checkAuth}  from "../middlewares/auth";

import adminRoutes from "./admin.route";

function route(app) {
    
    app.use("/auth", authRoutes);

    app.use(checkAuth);

    app.use("/user", userRoutes);

    app.use('/admin', adminRoutes);
    
    app.use((err, req, res, next) => {
        console.log(err.message)
        res.status(500).render('admin/error/500');
    })



}

export default route;