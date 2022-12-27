import { EmployeeController } from "../controllers/employee.controller";
import { Router } from 'express';
const employeeRoutes = Router();

employeeRoutes.get('/', EmployeeController.getAllEmployee);
employeeRoutes.get('/add', EmployeeController.showAddPage);
employeeRoutes.post('/add', EmployeeController.addEmployee);
employeeRoutes.get('/:id', EmployeeController.getEmployee);
employeeRoutes.put('/update/:id', EmployeeController.updateEmployee);
employeeRoutes.delete('/delete/:id', EmployeeController.deleteEmployee);
employeeRoutes.get('/filter-branch',EmployeeController.filterBranch)


export default employeeRoutes;
