exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('discount')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('discount').insert([
        {
          rate: 5,
          product_id: 1,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 10,
          product_id: 2,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 15,
          product_id: 3,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 20,
          product_id: 4,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 25,
          product_id: 5,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 30,
          product_id: 6,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 35,
          product_id: 7,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 40,
          product_id: 8,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 45,
          product_id: 9,
          applicable_until: '2022-03-01', 
        },
        {
          rate: 50,
          product_id: 10,
          applicable_until: '2022-03-01', 
        },
      ]),
    );
};
