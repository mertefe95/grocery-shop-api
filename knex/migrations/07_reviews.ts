exports.up = function (knex: any) {
  return knex.schema.createTable('reviews', (table: any) => {
    table.increments('id');
    table.text('title').notNullable();
    table.text('text').notNullable();
    table.integer('rating').notNullable().defaultTo(0);
    table.integer('user_id').nullable().unsigned().index().references('id').inTable('users').onDelete('CASCADE');
    table.integer('product_id').nullable().unsigned().index().references('id').inTable('product').onDelete('CASCADE');
  });
};

exports.down = function (knex: any) {
  return knex.schema.dropTable('reviews');
};
