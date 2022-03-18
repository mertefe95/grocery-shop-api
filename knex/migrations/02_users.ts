exports.up = function (knex: any) {
  return knex.schema.createTable('users', (table: any) => {
    table.increments('id');
    table.text('user_name').notNullable();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('users');
};
