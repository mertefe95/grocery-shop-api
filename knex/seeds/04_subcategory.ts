exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('subcategory')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('subcategory').insert([
        {
          id: 1,
          name: "Coffee",
          category_id: 1
        },
        {
          id: 2,
          name: "Tea",
          category_id: 1
        },
        {
          id: 3,
          name: "Juice",
          category_id: 1
        },
        {
          id: 4,
          name: "Soda",
          category_id: 1
        },
        {
          id: 5,
          name: "Sandwich loaves",
          category_id: 2
        },
        {
          id: 6,
          name: "Dinner rolls",
          category_id: 2
        },
        {
          id: 7,
          name: "Tortillas",
          category_id: 2
        },
        {
          id: 8,
          name: "Bagels",
          category_id: 2
        },
        {
          id: 9,
          name: "Vegetables",
          category_id: 3
        },
        {
          id: 10,
          name: "Spaghetti sauce",
          category_id: 3
        },
        {
          id: 11,
          name: "Ketchup",
          category_id: 3
        },
        {
          id: 12,
          name: "Cheeses",
          category_id: 4
        },
        {
          id: 13,
          name: "Eggs",
          category_id: 4
        },
        {
          id: 14,
          name: "Milk",
          category_id: 4
        },
        {
          id: 15,
          name: "Yogurt",
          category_id: 4
        },
        {
          id: 16,
          name: "Butter",
          category_id: 4
        },
        {
          id: 17,
          name: "Cereals",
          category_id: 5
        },
        {
          id: 18,
          name: "Flour",
          category_id: 5
        },
        {
          id: 19,
          name: "Sugar",
          category_id: 5
        },
        {
          id: 20,
          name: "Pasta",
          category_id: 5
        },
        {
          id: 21,
          name: "Mixes",
          category_id: 5
        },
        {
          id: 22,
          name: "Waffles",
          category_id: 6
        },
        {
          id: 23,
          name: "Vegetables",
          category_id: 6
        },
        {
          id: 24,
          name: "Individual meals",
          category_id: 6
        },
        {
          id: 25,
          name: "Ice cream",
          category_id: 6
        },
        {
          id: 26,
          name: "Lunch meat",
          category_id: 7
        },
        {
          id: 27,
          name: "Poultry",
          category_id: 7
        },
        {
          id: 28,
          name: "Beef",
          category_id: 7
        },
        {
          id: 29,
          name: "Pork",
          category_id: 7
        },
        {
          id: 30,
          name: "Fruits",
          category_id: 8
        },
        {
          id: 31,
          name: "Vegetables",
          category_id: 8
          
        },
        {
          id: 32,
          name: "All- purpose",
          category_id: 9
        },
        {
          id: 33,
          name: "Laundry detergent",
          category_id: 9
        },
        {
          id: 34,
          name: "Dishwashing liquid/detergent",
          category_id: 9
        },
        {
          id: 35,
          name: "Paper towels",
          category_id: 10
        },
        {
          id: 36,
          name: "Toilet paper",
          category_id: 10
        },
        {
          id: 37,
          name: "Aluminum foil",
          category_id: 10
        },
        {
          id: 38,
          name: "Sandwich bags",
          category_id: 10
        },
        {
          id: 39,
          name: "Shampoo",
          category_id: 11
        },
        {
          id: 40,
          name: "Soap",
          category_id: 11
        },
        {
          id: 41,
          name: "Hand soap",
          category_id: 11
        },
        {
          id: 42,
          name: "Shaving cream",
          category_id: 11
        },
        {
          id: 43,
          name: "Baby items",
          category_id: 12
        },
        {
          id: 44,
          name: "Pet items",
          category_id: 12
        },
        {
          id: 45,
          name: "Batteries",
          category_id: 12
        },
        {
          id: 46,
          name: "Greeting cards",
          category_id: 12
        },

      ]),
    );
};
