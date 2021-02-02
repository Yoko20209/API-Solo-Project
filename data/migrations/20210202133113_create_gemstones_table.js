
exports.up = function (knex, Promise) {
    return knex.schema.createTable('gemstones', function (table) {
        table.increments('id');
        table.string('stone').notNullable();
        table.string('color').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('gemstones');
};
