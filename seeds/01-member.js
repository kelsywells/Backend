
exports.seed = function(knex) {

  return knex('member').truncate()
    .then(function () {

      return knex('member').insert([
        {"first_name": "ghost", "last_name": "boy", "email": "ghostyboy@lambda.com", "password": "pass123", "member": true},
        {"first_name": "pumpkin", "last_name": "head", "email": "pumpkinhead@lambda.com", "password": "pass123", "member": true}
      ]);
    });
};
