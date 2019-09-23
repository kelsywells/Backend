
exports.seed = function(knex) {

  return knex('users').truncate()
    .then(function () {

      return knex('users').insert([
        {id: 1, "email": "ghostyboy@lambda.com", "password": "pass123"},
        {id: 2, "email": "pumpkinhead@lambda.com", "password": "pass123"}
      ]);
    });
};
