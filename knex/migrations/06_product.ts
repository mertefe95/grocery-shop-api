exports.up = function (knex: any) {
  return knex.schema.createTable('product', (table: any) => {
    table.increments('id');
    table.string('name').notNullable();
    table.integer('subcategory_id').nullable().unsigned().index().references('id').inTable('subcategory').onDelete('CASCADE');
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('product');
};
