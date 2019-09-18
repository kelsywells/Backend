
exports.up = function(knex) {
    return knex.schema.createTable(
        'users', tbl => {
            tbl.increments()
            tbl.text('username', 128).unique().notNullable()
            tbl.text('password').notNullable()
            tbl.boolean('rv-owner').notNullable()
            tbl.boolean('land-owner').notNullable();
        }
    )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
