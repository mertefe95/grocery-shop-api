exports.up = function (knex) {
    return knex.schema.createTable('book', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('category_id');
        table.integer('page_count');
        table.unique(['id'], {
            //use this to prevent multiple gather rows for a single match and team
            indexName: 'faqcat_index',
            storageEngineIndexType: 'hash',
        });
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('book');
};
//# sourceMappingURL=08_book.js.map