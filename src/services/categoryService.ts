export {}

import {Category} from "../interfaces/interfaces";

import knex from "../../knex/db-config";

const getCategories = async () => {
  const categories = await knex<Category>('category')

  return categories;

 }

 const getCategory = async (id: number) => {
  if (!id) {
    throw new Error('Please provide a category id.')
  }
  const category = await knex<Category>('category').where('id', id)

  return category;
 }

 const addCategory = async (name: string) => {
  if (!name) {
    throw new Error('Please provide a category id.')
  }

  const categoryExists = await knex<Category>('category').where('name', name).first();

  if (!categoryExists) {
    throw new Error('This category already exists.')
  }


}

 const deleteCategory = async (id: number) => {
   if (!id) {
     throw new Error('Please provide an category id.')
   }
    
   await knex('category').where('id', id).del()
 }
 
 const editCategory = async (id: number, newName:string) => {
     if (!id) {
      throw new Error('Please provide an category id.')
     }

     if (!newName) {
       throw new Error('Please provide a category name.')
     }

     const categoryExists = await knex<Category>('category').where('name', newName).whereNot('id', id).first();

     if (categoryExists) {
       throw new Error('This category name is used by another category.')
     }

     await knex('category').insert({name: newName});
 }

    const filterSubcategories = async (sort: string, 
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

          
   
      const subcategoriesFiltered = await knex<Category>('category as c')
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
    
    const filterCategories = async (sort: string, 
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

          
   
      const categoriesFiltered = await knex<Category>('category as c')
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

    
const getSubCategoriesOfCategory =  async (id: number) => {
   if (!id) {
     throw new Error('Please provide a category id.')
   }
 
   const subcategories = await knex<Category>('category as c').leftJoin('subcategory as sc', 'sc.category_id', 'c.id');
 
   return subcategories
 
 }
 
 const getAllProductsOfCategory =  async (id: number) => {
  if (!id) {
    throw new Error('Please provide a category id.')
  }

   const products = 
   await knex<Category>('category as c')
   .leftJoin('subcategory as sc', 'c.subcategory_id', 'sc.id')
   .leftJoin('product as p', 'p.subcategory_id', 'sc.id').where('c.id', id)
   
   return products
   
  }
   
 

 export = {
  getCategories,
  getCategory,
  addCategory,
  deleteCategory,
  editCategory,
  getAllProductsOfCategory,
  getSubCategoriesOfCategory,
  filterSubcategories,
  filterCategories
}