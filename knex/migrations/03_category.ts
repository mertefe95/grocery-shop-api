exports.up = function (knex: any) {
  return knex.schema.createTable('category', (table: any) => {
    table.increments('id');
    table.text('name').notNullable();
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('category');
};
