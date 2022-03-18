exports.up = function (knex: any) {
  return knex.schema.createTable('shopping_cart', (table: any) => {
    table.increments('id');
    table.integer('user_id').nullable().unsigned().index().references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('shopping_cart');
};
