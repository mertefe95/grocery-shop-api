exports.up = function (knex: any) {
  return knex.schema.createTable('shopping_cart_item', (table: any) => {
    table.increments('id');
    table.integer('shopping_cart_id').notNullable().unsigned().index().references('id').inTable('shopping_cart').onDelete('CASCADE');
    table.integer('product_id').notNullable().unsigned().index().references('id').inTable('product').onDelete('CASCADE');
    table.integer('quantity').notNullable().defaultTo(1);
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('shopping_cart_item');
};
