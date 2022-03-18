exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('shopping_cart')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('shopping_cart').insert([
        {
          user_id: 1
        },
        {
          user_id: 2
        },
        {
          user_id: 3
        },
        {
          user_id: 4
        },
        {
          user_id: 5
        },
        {
          user_id: 6
        },
        {
          user_id: 7
        },
        {
          user_id: 8
        },
        {
          user_id: 9
        },
        {
          user_id: 10
        },
      ]),
    );
};
