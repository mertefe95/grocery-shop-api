import {Router } from "express";
const productRoute = Router();
import productController from "../controllers/productController";


productRoute.get('/', productController.getProducts);

productRoute.get('/:id', productController.getProduct);

productRoute.post('/add/:id', productController.makeProduct);

productRoute.put('/edit/:id', productController.editProduct);

productRoute.delete('/delete/:id', productController.deleteProduct)



export default productRoute;