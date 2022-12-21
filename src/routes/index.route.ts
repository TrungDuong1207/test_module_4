import siteRoutes from "./site.route";
import authRoutes from "./auth.route";
import {checkAuth}  from "../middlewares/auth";
import adminRoutes from "./admin.route";

function route(app) {
    app.use("/shop",siteRoutes)
    
    app.use("/login", authRoutes);

    // app.use(checkAuth);

    app.use('/admin', adminRoutes);
    
    // app.use("/admin/dashboard", );

    // app.use((err, req, res, next) => {
    //     console.log(err.message)
    //     res.status(500).render('admin/errors/500')
    // })
}

export default route;