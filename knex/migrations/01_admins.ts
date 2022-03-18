exports.up = function (knex: any) {
  return knex.schema.createTable('admins', (table: any) => {
    table.increments('id');
    table.text('user_name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('admins');
};
