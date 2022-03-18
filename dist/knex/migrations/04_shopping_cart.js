exports.up = function (knex) {
    return knex.schema.createTable('shopping_cart', (table) => {
        table.increments('id');
        table.integer('user_id').unsigned().index().references('id').inTable('users');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('shopping_cart');
};
//# sourceMappingURL=04_shopping_cart.js.map