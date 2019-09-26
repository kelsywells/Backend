
exports.seed = function(knex) {

  return knex('member').truncate()
    .then(function () {

      return knex('member').insert([
        {"email": "johndenver@music.com", "password": "music"},
      ]);
    });
};
