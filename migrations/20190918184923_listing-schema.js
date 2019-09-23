
exports.up = function(knex) {
    return knex.schema.createTable(
        'listings', tbl => {
            tbl.increments()
            tbl.text('address').unique().notNullable()
            tbl.text('state').notNullable()
            tbl.text('description').notNullable()
            tbl.integer('price').notNullable()
            tbl.date('start_date')
            tbl.date('end_date')
            tbl.boolean('rented')
        }
    )
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('listings');
};
