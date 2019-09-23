const db = require('../../data/dbConfig');

module.exports = {
  insert,
  update,
  find,
  findById,
  remove
};

function find() {
  return db('listings').select('id', 'address');
}

function update(id, changes) {
  return db('listings')
    .where({ id })
    .update(changes);
}

async function insert(detail) {
  const [id] = await db('listings').insert(detail);

  return findById(id);
}

function findById(id) {
  return db('listings')
    .where({ id })
}

function remove(id) {
  return db('listings')
    .where({ id })
    .del();
}