const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('member').select('id', 'email');
}

function findBy(filter) {

  return db('member').where(filter);
}

async function add(user) {
  const [id] = await db('member').insert(user);

  return findById(id);
}

function findById(id) {
  return db('member')
    .where({ id })
}
