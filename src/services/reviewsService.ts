export {}


import knex from "../../knex/db-config";
import {Review} from "../interfaces/interfaces";

const getReviews = async () => {

   const reviews = await knex<Review>('reviews');

   return reviews

}

const getReview = async (id) => {

  if (!id) {
    throw new Error('Please provide a review id.')
  }
  
  await knex<Review>('reviews').where('id', id);
}

const makeReview =  async (user_id: number, title: string, text: string, rating: number, product_id: number) => {
  if (!title) {
    throw new Error('Please provide a review title.')
  }
    
  if (!text) {
    throw new Error('Please provide a review text.')
  }

  if (!product_id) {
    throw new Error('Please provide a product id.')
  }  


  await knex<Review>('reviews').insert({ user_id, title, text, product_id, rating: rating ? rating : 0, product_id });

}

const deleteReview = async (user_id: number, review_id: number) => {
  await knex<Review>('reviews').where({user_id: user_id, review_id: review_id}).del();
}

const editReview = async (user_id: number, product_id: number, review_id: number, text: string, title: string, rating: number) => {
  if (review_id) {
    throw new Error('Please provide a review id.')
  }

  if (!text) {
    throw new Error('Please provide a text.')
  }

  if (!title) {
    throw new Error('Please provide a title.')
  }

  if (!product_id) {
    throw new Error('Please provide a product id.')
  }


  
  await knex<Review>('reviews').where({product_id, id: review_id, user_id}).update({text, title, rating: rating ? rating : 0});
  
}

export = {
  getReviews,
  getReview,
  makeReview,
  deleteReview,
  editReview

}