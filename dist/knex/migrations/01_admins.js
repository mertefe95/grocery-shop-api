exports.up = function (knex) {
    return knex.schema.createTable('admins', (table) => {
        table.increments('id');
        table.text('user_name').notNullable();
        table.text('email').notNullable();
        table.text('password').notNullable();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('admins');
};
//# sourceMappingURL=01_admins.js.map