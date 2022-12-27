import { Request, Response} from "express";
import { Branch } from "src/models/branch.model";
import {Employee} from "../models/employee.model";


export class EmployeeController {
    static async getAllEmployee (req: Request, res: Response){
        let employees = await Employee.find().populate('branch', 'name').sort({age: 1});
        res.render('employees/index', {employees: employees});
    }

    static async showAddPage (req, res){
        let branch = await Branch.find();
        res.render('employees/addEmployee', {data: branch});
    }

    static async addEmployee (req: Request, res: Response) {     
            let employee = req.body;
            employee = await Employee.create(employee);
            res.redirect('/employee');
    }

    static async deleteEmployee (req: Request, res: Response) {
        let id = req.params.id; 
            let employee = await Employee.findById(id);
            if (!employee) {
                res.redirect('/employee');
            } else {
                employee.delete();
                res.redirect('/employee');
            }
     
    }

    static async getEmployee (req: Request, res: Response) {
        let id = req.params.id;
            let employee = await Employee.findById(id).populate('branch', 'name');
            if (!employee) {
                res.status(404).json();
            } else {
                res.render('employees/employeeDetail', {data: employee} )
            }
      
    }

    static async showFormUpdate (req, res){
        let id = req.params.id;
        let employee = await Employee.findById(id).populate('branch', 'name');
        res.render('employees/addEmployee', {data: employee});
    }

    static async updateEmployee (req: Request, res: Response) {
        let id = req.params.id;
        let employee = await Employee.findById(id);
        if (!employee) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Employee.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            res.redirect('/employee');
        }
    }
    static async filterBranch (req, res){
        const branchId = req.query.branchId;
        let query = {};
        if (branchId !== 'All Rooms') {
            query = {
                branch: branchId
            }
        }
        const employees = await Employee.find(query).populate('branch');
        res.status(200).json(employees);
    }
}

