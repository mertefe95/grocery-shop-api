exports.up = function (knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments('id');
        table.text('title').notNullable();
        table.text('text').notNullable();
        table.text('author').notNullable();
        table.integer('user_id').unsigned().index().references('id').inTable('competition_participant');
        table.integer('book_id').nullable();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('reviews');
};
//# sourceMappingURL=05_reviews.js.map