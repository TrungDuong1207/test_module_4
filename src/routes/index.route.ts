import siteRoutes from "./site.route";
function route(app) {
    app.use("/admin/dashboard", siteRoutes);
}

export default route;