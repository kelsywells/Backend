
exports.seed = function(knex) {

  return knex('listings').truncate()
    .then(function () {

      return knex('listings').insert([
        {id: 1, 
        "address": "123 Ladybug Ln",
        "contact_phone": "(555) 123-4567",
        "state": "WA", 
        "description": "3 acre field of dandelions, daisies, and friendly ladybugs",
        "price": 75,
        "start_date": 2019-09-19,
        "end_date": 2019-10-19,
        "rented": false,
        "image": "https://unsplash.com/photos/FOeDIUwYiSw"
      }

      ]);
    });
};
