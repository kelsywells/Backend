
exports.up = function(knex) {
    return knex.schema.createTable(
        'listings', tbl => {
            tbl.increments()
            tbl.string('address').unique().notNullable()
            tbl.string('state').notNullable()
            tbl.integer('zipcode')
            tbl.string('contact_phone')
            tbl
                .integer("user_id")
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            tbl.string('description').notNullable()
            tbl.integer('price').notNullable()
            tbl.date('start_date')
            tbl.date('end_date')
            tbl.boolean('rented')
            tbl.string('image')
        }
    )
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('listings')
};
