exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('product')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('product').insert([
        {
          name: 'A Coffee',
          subcategory_id: 1,

        },
        {
          name: 'B Coffee',
          subcategory_id: 1,
        },
        {
          name: 'C Coffee',
          subcategory_id: 1,
        },
        {
          name: 'A Tea',
          subcategory_id: 2,
        },
        {
          name: 'B Tea',
          subcategory_id: 2,
        },
        {
          name: 'C Tea',
          subcategory_id: 2,
        },
        {
          name: 'A Juice',
          subcategory_id: 3,
        },
        {
          name: 'B Juice',
          subcategory_id: 3,
        },
        {
          name: 'C Juice',
          subcategory_id: 3,
        },
        {
          name: 'A Soda',
          subcategory_id: 4,
        },
        {
          name: 'B Soda',
          subcategory_id: 4,
        },
        {
          name: 'C Soda',
          subcategory_id: 4,
        },
        {
          name: 'A Sandwich loaf',
          subcategory_id: 5,
        },
        {
          name: 'B Sandwich loaf',
          subcategory_id: 5,
        },
        {
          name: 'C Sandwich loaf',
          subcategory_id: 5,
        },
        {
          name: 'A Dinner roll',
          subcategory_id: 6,
        },
        {
          name: 'B Dinner roll',
          subcategory_id: 6,
        },
        {
          name: 'C Dinner roll',
          subcategory_id: 6,
        },
        {
          name: 'A Tortilla',
          subcategory_id: 7,
        },
        {
          name: 'B Tortilla',
          subcategory_id: 7,
        },
        {
          name: 'C Tortilla',
          subcategory_id: 7,
        },
        {
          name: 'A Bagel',
          subcategory_id: 8,
        },
        {
          name: 'B Bagel',
          subcategory_id: 8,
        },
        {
          name: 'C Bagel',
          subcategory_id: 8,
        },
        {
          name: 'A Vegetable',
          subcategory_id: 9,
        },
        {
          name: 'B Vegetable',
          subcategory_id: 9,
        },
        {
          name: 'C Vegetable',
          subcategory_id: 9,
        },
        {
          name: 'A Spaghetti sauce',
          subcategory_id: 10,
        },
        {
          name: 'B Spaghetti sauce',
          subcategory_id: 10,
        },
        {
          name: 'C Spaghetti sauce',
          subcategory_id: 10,
        },
        {
          name: 'A Ketchup',
          subcategory_id: 11,
        },
        {
          name: 'B Ketchup',
          subcategory_id: 11,
        },
        {
          name: 'C Ketchup',
          subcategory_id: 11,
        },
        {
          name: 'A Cheese',
          subcategory_id: 12,
        },
        {
          name: 'B Cheese',
          subcategory_id: 12,
        },
        {
          name: 'C Cheese',
          subcategory_id: 12,
        },
        {
          name: 'A Egg',
          subcategory_id: 13,
        },
        {
          name: 'B Egg',
          subcategory_id: 13,
        },
        {
          name: 'C Egg',
          subcategory_id: 13,
        },
        {
          name: 'A Milk',
          subcategory_id: 14,
        },
        {
          name: 'B Milk',
          subcategory_id: 14,
        },
        {
          name: 'C Milk',
          subcategory_id: 14,
        },
        {
          name: 'A Yogurt',
          subcategory_id: 15,
        },
        {
          name: 'B Yogurt',
          subcategory_id: 15,
        },
        {
          name: 'C Yogurt',
          subcategory_id: 15,
        },
        {
          name: 'A Butter',
          subcategory_id: 16,
        },
        {
          name: 'B Butter',
          subcategory_id: 16,
        },
        {
          name: 'C Butter',
          subcategory_id: 16,
        },
        {
          name: 'A Cereal',
          subcategory_id: 17,
        },
        {
          name: 'B Cereal',
          subcategory_id: 17,
        },
        {
          name: 'C Cereal',
          subcategory_id: 17,
        },
        {
          name: 'A Flour',
          subcategory_id: 18,
        },
        {
          name: 'B Flour',
          subcategory_id: 18,
        },
        {
          name: 'C Flour',
          subcategory_id: 18,
        },
        {
          name: 'A Sugar',
          subcategory_id: 19,
        },
        {
          name: 'B Sugar',
          subcategory_id: 19,
        },
        {
          name: 'C Sugar',
          subcategory_id: 19,
        },
        {
          name: 'A Pasta',
          subcategory_id: 20,
        },
        {
          name: 'B Pasta',
          subcategory_id: 20,
        },
        {
          name: 'C Pasta',
          subcategory_id: 20,
        },
        {
          name: 'A Mix',
          subcategory_id: 21,
        },
        {
          name: 'B Mix',
          subcategory_id: 21,
        },
        {
          name: 'C Mix',
          subcategory_id: 21,
        },
        {
          name: 'A Waffle',
          subcategory_id: 22,
        },
        {
          name: 'B Waffle',
          subcategory_id: 22,
        },
        {
          name: 'C Waffle',
          subcategory_id: 22,
        },
        {
          name: 'A Vegetable',
          subcategory_id: 23,
        },
        {
          name: 'B Vegetable',
          subcategory_id: 23,
        },
        {
          name: 'C Vegetable',
          subcategory_id: 23,
        },
        {
          name: 'A Individual meal',
          subcategory_id: 24,
        },
        {
          name: 'B Individual meal',
          subcategory_id: 24,
        },
        {
          name: 'C Individual meal',
          subcategory_id: 24,
        },
        {
          name: 'A Ice cream',
          subcategory_id: 25,
        },
        {
          name: 'B Ice cream',
          subcategory_id: 25,
        },
        {
          name: 'C Ice cream',
          subcategory_id: 25,
        },
        {
          name: 'A Lunch meat',
          subcategory_id: 26,
        },
        {
          name: 'B Lunch meat',
          subcategory_id: 26,
        },
        {
          name: 'C Lunch meat',
          subcategory_id: 26,
        },
        {
          name: 'A Poultry',
          subcategory_id: 27,
        },
        {
          name: 'B Poultry',
          subcategory_id: 27,
        },
        {
          name: 'C Poultry',
          subcategory_id: 27,
        },
        {
          name: 'A Beef',
          subcategory_id: 28,
        },
        {
          name: 'B Beef',
          subcategory_id: 28,
        },
        {
          name: 'C Beef',
          subcategory_id: 28,
        },
          {
          name: 'A Pork',
          subcategory_id: 29,
        },
        {
          name: 'B Pork',
          subcategory_id: 29,
        },
        {
          name: 'C Pork',
          subcategory_id: 29,
        },
        {
          name: 'A Fruit',
          subcategory_id: 30,
        },
        {
          name: 'B Fruit',
          subcategory_id: 30,
        },
        {
          name: 'C Fruit',
          subcategory_id: 30,
        },
        {
          name: 'A Vegetable',
          subcategory_id: 31,
        },
        {
          name: 'B Vegetable',
          subcategory_id: 31,
        },
        {
          name: 'C Vegetable',
          subcategory_id: 31,
        },
        {
          name: 'A All- purpose',
          subcategory_id: 32,
        },
        {
          name: 'B All- purpose',
          subcategory_id: 32,
        },
        {
          name: 'C All- purpose',
          subcategory_id: 32,
        },
        {
          name: 'A Laundry detergent',
          subcategory_id: 33,
        },
        {
          name: 'B Laundry detergent',
          subcategory_id: 33,
        },
        {
          name: 'C Laundry detergent',
          subcategory_id: 33,
        },
        {
          name: 'A Dishwashing liquid/detergent',
          subcategory_id: 34,
        },
        {
          name: 'B Dishwashing liquid/detergent',
          subcategory_id: 34,
        },
        {
          name: 'C Dishwashing liquid/detergent',
          subcategory_id: 34,
        },
        {
          name: 'A Paper towel',
          subcategory_id: 35,
        },
        {
          name: 'B Paper towel',
          subcategory_id: 35,
        },
        {
          name: 'C Paper towel',
          subcategory_id: 35,
        },
        {
          name: 'A Toilet paper',
          subcategory_id: 36,
        },
        {
          name: 'B Toilet paper',
          subcategory_id: 36,
        },
        {
          name: 'C Toilet paper',
          subcategory_id: 36,
        },
        {
          name: 'A Aluminum foil',
          subcategory_id: 37,
        },
        {
          name: 'B Aluminum foil',
          subcategory_id: 37,
        },
        {
          name: 'C Aluminum foil',
          subcategory_id: 37,
        },
        {
          name: 'A Sandwich bag',
          subcategory_id: 38,
        },
        {
          name: 'B Sandwich bag',
          subcategory_id: 38,
        },
        {
          name: 'C Sandwich bag',
          subcategory_id: 38,
        },
        {
          name: 'A Shampoo',
          subcategory_id: 39,
        },
        {
          name: 'B Shampoo',
          subcategory_id: 39,
        },
        {
          name: 'C Shampoo',
          subcategory_id: 39,
        },
        {
          name: 'A Soap',
          subcategory_id: 40,
        },
        {
          name: 'B Soap',
          subcategory_id: 40,
        },
        {
          name: 'C Soap',
          subcategory_id: 40,
        },
        {
          name: 'A Hand soap',
          subcategory_id: 41,
        },
        {
          name: 'B Hand soap',
          subcategory_id: 41,
        },
        {
          name: 'C Hand soap',
          subcategory_id: 41,
        },
        {
          name: 'A Shaving cream',
          subcategory_id: 42,
        },
        {
          name: 'B Shaving cream',
          subcategory_id: 42,
        },
        {
          name: 'C Shaving cream',
          subcategory_id: 42,
        },
        {
          name: 'A Baby item',
          subcategory_id: 43,
        },
        {
          name: 'B Baby item',
          subcategory_id: 43,
        },
        {
          name: 'C Baby item',
          subcategory_id: 43,
        },
        {
          name: 'A Pet item',
          subcategory_id: 44,
        },
        {
          name: 'B Pet item',
          subcategory_id: 44,
        },
        {
          name: 'C Pet item',
          subcategory_id: 44,
        },
        {
          name: 'A Battery',
          subcategory_id: 45,
        },
        {
          name: 'B Battery',
          subcategory_id: 45,
        },
        {
          name: 'C Battery',
          subcategory_id: 45,
        },
        {
          name: 'A Greeting card',
          subcategory_id: 46,
        },
        {
          name: 'B Greeting card',
          subcategory_id: 46,
        },
        {
          name: 'C Greeting card',
          subcategory_id: 46,
        },

      ]),
    );
};
