exports.up = function (knex: any) {
  return knex.schema.createTable('subcategory', (table: any) => {
    table.increments('id');
    table.text('name').notNullable();
    table.integer('category_id').nullable();
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('subcategory');
};
