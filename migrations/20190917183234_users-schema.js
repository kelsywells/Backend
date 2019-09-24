
exports.up = function(knex) {

knex.schema.hasTable('member').then(function(exists) {
        if (!exists) {
    return knex.schema
    .createTable(
        'member', tbl => {
            tbl.increments()
            tbl.text('first_name')
            tbl.text('last_name')
            tbl.text('email')
            tbl.text('password')
            tbl.boolean('member')
        }
    )
}
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('member')
};
