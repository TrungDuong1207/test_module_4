
import employeeRoutes from "./employee.route";

import branchRoute from "./branch.route";

function route(app) {
   
    app.use('/employee', employeeRoutes);

    app.use('/branches', branchRoute);

}

export default route;
