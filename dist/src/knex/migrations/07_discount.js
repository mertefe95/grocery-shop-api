exports.up = function (knex) {
    return knex.schema.createTable('discount', (table) => {
        table.increments('id');
        table.string('name').nullable();
        table.string('description').nullable();
        table.integer('book_id').nullable();
        table.timestamp('applicable_until').nullable();
        table.unique(['id'], {
            //use this to prevent multiple gather rows for a single match and team
            indexName: 'faqcat_index',
            storageEngineIndexType: 'hash',
        });
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('discount');
};
//# sourceMappingURL=07_discount.js.map