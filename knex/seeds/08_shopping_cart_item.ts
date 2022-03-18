exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('shopping_cart_item')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('shopping_cart_item').insert([
        {
          shopping_cart_id: 1,
          product_id: 2,
          quantity: 2, 
        },
        {
          shopping_cart_id: 2,
          product_id: 2,
          quantity: 2, 
        },
        {
          shopping_cart_id: 3,
          product_id: 3,
          quantity: 3, 
        },
        {
          shopping_cart_id: 4,
          product_id: 4,
          quantity: 4, 
        },
        {
          shopping_cart_id: 5,
          product_id: 5,
          quantity: 5, 
        },
        {
          shopping_cart_id: 6,
          product_id: 6,
          quantity: 6,
        },
        {
          shopping_cart_id: 7,
          product_id: 7,
          quantity: 7, 
        },
        {
          shopping_cart_id: 8,
          product_id: 8,
          quantity: 8, 
        },
        {
          shopping_cart_id: 9,
          product_id: 9,
          quantity: 9, 
        },
        {
          shopping_cart_id: 10,
          product_id: 10,
          quantity: 10, 
        },
      ]),
    );
};
