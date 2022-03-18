exports.up = function (knex) {
    return knex.schema.createTable('shopping_cart_item', (table) => {
        table.increments('id');
        table.integer('shopping_cart_id').unsigned().index().references('id').inTable('shopping_cart');
        table.integer('book_id').unsigned().index().references('id').inTable('book');
        table.integer('quantity');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('shopping_cart_item');
};
//# sourceMappingURL=06_shopping_cart_item.js.map