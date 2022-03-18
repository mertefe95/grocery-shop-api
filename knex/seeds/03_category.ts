exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('category').insert([
        {
          name: "Beverages"
        },
        {
          name: "Bread/Bakery"
        },
        {
          name: "Canned/Jarred Goods",
          
        },
        {
          name: "Dairy"
        },
        {
          name: "Dry/Baking Goods"
        },
        {
          name: "Frozen Foods"
        },
        {
          name: "Meat"
        },
        {
          name: "Produce"
        },
        {
          name: "Cleaners"
        },
        {
          name: "Paper Goods"
        },
        {
          name: "Personal Care"
        },
        {
          name: "Other"
        },
      ]),
    );
};
