exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.text('user_name').notNullable();
        table.text('first_name').notNullable();
        table.text('last_name').notNullable();
        table.text('email').notNullable();
        table.text('password').notNullable();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
//# sourceMappingURL=02_users.js.map