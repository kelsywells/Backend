
exports.up = function(knex) {
  return knex.schema.createTable(
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
            tbl.integer('owner_id')
            tbl.integer('listing_id')
            tbl.integer('user_id')
        }
    )
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('booking');
  
};
