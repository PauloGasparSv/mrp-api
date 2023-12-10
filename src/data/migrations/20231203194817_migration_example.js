export function up(knex) {
	return knex.schema.createTable('example', function (table) {
		table.uuid('id').primary().defaultTo(knex.fn.uuid());
		table.text('name').notNullable();
		table.dateTime('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
	});
}

export function down(knex) {
	return knex.schema.dropTable('example');
}
