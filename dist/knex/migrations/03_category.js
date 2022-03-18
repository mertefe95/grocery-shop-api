exports.up = function (knex) {
    return knex.schema.createTable('category', (table) => {
        table.increments('id');
        table.text('name').notNullable();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('category');
};
//# sourceMappingURL=03_category.js.map