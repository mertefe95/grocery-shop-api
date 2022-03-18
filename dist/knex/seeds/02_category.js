exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('category')
        .del()
        .then(() => 
    // Inserts seed entries
    knex('category').insert([
        {
            name: "Memoir"
        },
        {
            name: "Autobiography"
        },
        {
            name: "Art/architecture",
        },
        {
            name: "Classic"
        },
        {
            name: "Crime"
        },
        {
            name: "Fantasy"
        },
        {
            name: "Graphic novel"
        },
        {
            name: "Historical fiction"
        },
        {
            name: "Horror"
        }
    ]));
};
//# sourceMappingURL=02_category.js.map