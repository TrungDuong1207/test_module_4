import {Router} from "express";
import {BranchController} from "../controllers/branch.controller"

const branchRoute = Router();

branchRoute.get('/', BranchController.getAllBranch);
branchRoute.post('/add', BranchController.addBranch);
branchRoute.get('/:id', BranchController.getBranch);
branchRoute.put('/update/:id', BranchController.updateBranch);
branchRoute.delete('/delete/:id', BranchController.deleteBranch);

export default branchRoute