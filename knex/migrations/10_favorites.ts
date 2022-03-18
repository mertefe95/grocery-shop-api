exports.up = function (knex: any) {
  return knex.schema.createTable('favorites', (table: any) => {
    table.increments('id');
    table.integer('user_id').nullable().unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.integer('product_id').nullable().unsigned().index().references('id').inTable('product').onDelete('CASCADE');
    table.integer('category_id').nullable().unsigned().index().references('id').inTable('category').onDelete('CASCADE');
    table.integer('subcategory_id').nullable().unsigned().index().references('id').inTable('subcategory').onDelete('CASCADE');
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('favorites');
};
