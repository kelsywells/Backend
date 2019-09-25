
exports.up = function(knex) {

knex.schema.hasTable('member').then(function(exists) {
        if (!exists) {
    return knex.schema.createTable(
        'member', tbl => {
            tbl.increments()
            tbl.string('first_name')
            tbl.string('last_name')
            tbl.string('email')
            tbl.string('password')
            tbl.boolean('member')
            tbl.timestamps(true, true);
        }
    )
}
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('member')
};
