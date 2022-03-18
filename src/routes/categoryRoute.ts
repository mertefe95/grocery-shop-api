import {Router } from "express";
const categoryRoute = Router();
import categoryController from "../controllers/categoryController";

categoryRoute.get('/categories', categoryController.getCategories);

categoryRoute.get('/category/:id', categoryController.getCategory);

categoryRoute.post('/category-add', categoryController.addCategory);

categoryRoute.put('/category-edit', categoryController.editCategory)

categoryRoute.delete('/category-delete', categoryController.deleteCategory)



export default categoryRoute;