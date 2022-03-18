exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('reviews').insert([
        {
          title: 'This product is very good!',
          text: 'I really enjoyed using this product.',
          user_id: 1,
          product_id: 1,
          rating: 5
        },
        {
          title: 'Not liked this product.',
          text: 'This product is below average.',
          user_id: 2,
          product_id: 2,
          rating: 2
          
        },
        {
          title: 'Just an average product.',
          text: 'This product is average.',
          user_id: 3,
          product_id: 3,
          rating: 3
          
        },
        {
          title: 'This product is performance/cost average',
          text: 'This product is performance/cost average',
          user_id: 4,
          product_id: 4,
          rating: 4
        },
        {
          title: 'I refunded this product.',
          text: 'I refunded this product because it came out not what i was expecting.',
          user_id: 5,
          product_id: 5,
          rating: 1
        },
        {
          title: 'This product is very good!',
          text: 'I really enjoyed using this product.',
          user_id: 6,
          product_id: 6,
          rating: 5
        },
        {
          title: 'Not liked this product.',
          text: 'This product is below average.',
          user_id: 7,
          product_id: 7,
          rating: 2
        },
        {
          title: 'Just an average product.',
          text: 'This product is average.',
          user_id: 8,
          product_id: 8,
          rating: 3
        },
        {
          title: 'This product is performance/cost average',
          text: 'This product is performance/cost average',
          user_id: 9,
          product_id: 9,
          rating: 4
        },
        {
          title: 'I refunded this product.',
          text: 'I refunded this product because it came out not what i was expecting.',
          user_id: 10,
          product_id: 10,
          rating: 0
        },
      ]),
    );
};
