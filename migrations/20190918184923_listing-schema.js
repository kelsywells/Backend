
exports.up = function(knex) {
    return knex.schema.createTable(
        'listings', tbl => {
            tbl.increments()
            tbl.string('address').unique().notNullable()
            tbl.string('contact_phone')
            tbl.string('state').notNullable()
            tbl.string('description').notNullable()
            tbl.integer('price').notNullable()
            tbl.date('start_date')
            tbl.date('end_date')
            tbl.boolean('rented')
            tbl.string('image')
        }
    )
    .createTable(
        'booking', tbl => {
            tbl.increments()
            tbl.string('address')
            tbl.string('contact_phone')
            tbl.string('state')
            tbl.string('description')
            tbl.integer('price')
            tbl.date('start_date')
            tbl.date('end_date')
            tbl.boolean('rented')
            tbl.string('image')
        }
    )
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('listings')
  .dropTableIfExists('booking');
};
