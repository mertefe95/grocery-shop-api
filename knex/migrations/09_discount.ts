exports.up = function (knex: any) {
  return knex.schema.createTable('discount', (table: any) => {
    table.increments('id');
    table.integer('rate').notNullable().defaultTo(0);
    table.integer('product_id').notNullable().unsigned().index().references('id').inTable('product').onDelete('CASCADE');
    table.timestamp('applicable_until').nullable();

  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('discount');
};
