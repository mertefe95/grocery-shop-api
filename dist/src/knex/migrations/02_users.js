exports.up = function (knex) {
    return knex.schema.createTable('faq-categories', (table) => {
        table.increments('id');
        table.string('name').notNullable();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('faq-categories');
};
//# sourceMappingURL=02_users.js.map