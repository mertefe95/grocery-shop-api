exports.up = function (knex) {
    return knex.schema.createTable('book', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('category_id');
        table.integer('page_count');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('book');
};
//# sourceMappingURL=08_product.js.map