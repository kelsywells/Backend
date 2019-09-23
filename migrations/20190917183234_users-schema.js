
exports.up = function(knex) {

knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
    return knex.schema
     .createTable(
        'users', tbl => {
            tbl.increments()
            tbl.text('email')
            tbl.text('password');
        }
    )
    .createTable(
        'signup', tbl => {
            tbl.increments()
            tbl.text('first-name')
            tbl.text('last-name')
            tbl.text('email')
            tbl.text('password')
            tbl.boolean('rv-owner')
            tbl.boolean('land-owner');
        }
    )
}
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('signup');
};
