const db = require('../../data/dbConfig');

module.exports = {
  insert,
  update,
  find,
  findBy,
  findById,
  remove
};

function find() {
  return db('listing').select('id', 'address');
}

function update(id, changes) {
  return db('listing')
    .where({ id })
    .update(changes);
}

async function insert(detail) {
  const [id] = await db('listing').insert(detail);

  return findById(id);
}

function findById(id) {
  return db('listing')
    .where({ id })
}

function remove(id) {
  return db('listing')
    .where({ id })
    .del();
}