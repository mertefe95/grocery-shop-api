export {}


import knex from "../../knex/db-config";
import {Review} from "../interfaces/interfaces";
import productService from "../services/productService";
import handleResponse from "../utils/handleResponse"
import { Request, Response, NextFunction } from 'express';


const getProducts = async (req: Request, res: Response, next: NextFunction) => {
try {
  const products = await productService.getProducts();

  
  return handleResponse(res, products)
} catch (e) {  
  next(e)
  }
}

const getProduct = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const product = await productService.getProduct(id);
    return handleResponse(res, product)
  } catch (e) {
    next(e)
  }
}

const makeProduct =  async (req:Request, res:Response, next: NextFunction) => {
  try {
  const { subcategory_id, name } = req.body;
  
  await productService.makeProduct(subcategory_id, name);
  return handleResponse(res, { msg: "Product is created successfully." } )
  } catch (e) {
    next(e)
  }
}

const deleteProduct = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const id = req.params.id;
  
    await productService.deleteProduct(id);
    return handleResponse(res, { msg: "Product is deleted successfully." } )
  } catch (e) {
    next(e)
  }
}

const editProduct = async (req:Request, res:Response, next: NextFunction) => {
  try {
  const {id, name, subcategory_id} = req.body;

  await productService.editProduct(id, name, subcategory_id);

  return handleResponse(res, { msg: "Product is edited successfully." } )
  } catch (e) {
    next(e)
  }
}

const filterProducts = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { 
      sort, 
      most_seller,  
      most_subcategories, 
      most_expensive, 
      most_favorite_added,
      least_expensive, 
      least_seller, 
      least_sub_categories, 
      least_favorite_added, } = req.body; 
  
      await productService.filterProducts(
      sort, 
      most_seller,  
      most_subcategories, 
      most_expensive, 
      most_favorite_added,
      least_expensive, 
      least_seller, 
      least_sub_categories, 
      least_favorite_added);
  
     } catch (e) {
      next(e)
     } 

    }


export = {
  getProducts,
  getProduct,
  makeProduct,
  deleteProduct,
  editProduct,
  filterProducts

}