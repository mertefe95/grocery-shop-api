export {}


import knex from "../../knex/db-config";
import {Product} from "../interfaces/interfaces";


const getProducts = async () => {

  const products = await knex<Product>('product as p')
  .leftJoin('subcategory as sc', 'sc.id', 'p.subcategory_id')
  .leftJoin('category as c', 'c.id', 'sc.category_id')
  .leftJoin('discount as dc', 'dc.product_id', 'p.id').orderBy('p.name', 'asc');

  
  return products;

}

const getProduct = async (id: number) => {
    if (!id) {
      throw new Error('Please provide an id.')
    }

  const product = await knex<Product>('product').where('id', id)

  return product;
}

const makeProduct =  async (subcategory_id: number, name:string) => {
  if (!subcategory_id) {
    throw new Error('Please provide a subcategory id.')
  }

  if (!name) {
    throw new Error('Please provide a name.')
  }

  await knex<Product>('product').insert({name: name, subcategory_id: subcategory_id});
}

const deleteProduct = async (id: number) => {
  if (!id) {
    throw new Error('Please provide an id.')
  }

  await knex<Product>('product').where('id', id).del()
}

const editProduct = async (id: number, name: string, subcategory_id: number) => {

  if (!id) {
    throw new Error('Please provide an id.')
  }

  if (!name) {
    throw new Error('Please provide a name.')
  }

  if (!subcategory_id) {
    throw new Error('Please provide a subcategory id.')
  }

  await knex<Product>('product').where('id', id).update({subcategory_id, name})
}


const filterProducts = async (sort: string, 
  most_seller?: boolean,  
  most_subcategories?: boolean, 
  most_expensive?: boolean, 
  most_favorite_added?: boolean,
  least_expensive?: boolean, 
  least_seller?: boolean, 
  least_sub_categories?: boolean, 
  least_favorite_added?: boolean) => {

      let subquery1;
      let subquery2;
      let subquery3;
      let subquery4;

      

  const productsFiltered = await knex<Category>('category as c')
  .leftJoin('subcategory as sc', 'sc.category_id', 'c.id')
  .leftJoin('product as p', 'p.subcategory_id', 'sc.id')
  .modify(function (queryBuilder) {
    if (most_seller == true) {
     
    }

    if (most_seller == false) {

    }

    if (most_subcategories == true) {


    }

    if (most_subcategories == false) {

      
    }

    if (most_expensive == true) {

    }

    if (most_expensive == false) {
      
    }

    
    if (most_favorite_added == true) {

    }

    if (most_favorite_added == false) {
      
    }

    if (least_expensive == true) {

    }

    if (least_expensive == false) {
      
    }

    if (least_seller == true) {

    }

    if (least_seller == false) {
      
    }

    
    if (least_sub_categories == true) {

    }

    if (least_sub_categories == false) {
      
    }

    if (least_favorite_added == true) {

    }

    if (least_favorite_added == false) {
      
    }

  })





}

export = {
  getProducts,
  getProduct,
  makeProduct,
  deleteProduct,
  editProduct,
  filterProducts

}