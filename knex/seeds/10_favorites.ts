exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('favorites')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('favorites').insert([
        {
          user_id: 1,
          product_id: 1,
          category_id: 1,
          subcategory_id: 1,
        },
        {
          user_id: 2,
          product_id: 2,
          category_id: 2,
          subcategory_id: 2,
        },
        {
          user_id: 3,
          product_id: 3,
          category_id: 3,
          subcategory_id: 3,
        },
        {
          user_id: 4,
          product_id: 4,
          category_id: 4,
          subcategory_id: 4,
        },
        {
          user_id: 5,
          product_id: 5,
          category_id: 5,
          subcategory_id: 5,
        },
        {
          user_id: 6,
          product_id: 6,
          category_id: 6,
          subcategory_id: 6,
        },
        {
          user_id: 7,
          product_id: 7,
          category_id: 7,
          subcategory_id: 7,
        },
        {
          user_id: 8,
          product_id: 8,
          category_id: 8,
          subcategory_id: 8,
        },
        {
          user_id: 9,
          product_id: 9,
          category_id: 9,
          subcategory_id: 9,
        },
        {{
          user_id: 10,
          product_id: 10,
          category_id: 10,
          subcategory_id: 10,
        },
      ]),
    );
};
