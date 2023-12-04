
exports.up = function(knex) {

    return knex.schema.createTable('example', function(table) {
        table.increments('id');
        table.uuid('uuid').primary().defaultTo(knex.raw('(UUID())'))
        table.text('Name').unique().notNullable()
        
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    });
  
};

exports.down = function(knex) {

    return knex.schema.dropTable("example")
  
};
