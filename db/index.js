const fs = require('fs');
const { MongoClient } = require('mongodb');

let _db, _restaurants, nextId;

fs.readFile(process.env.MONGO_PSWD_FILE, (err, data) => {
  if (err) {
    console.log('Error reading Mongo password file');
    throw err;
  }
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const user = process.env.MONGO_USER;
  const pswd = data.toString().trim();
  const uri = `mongodb://${user}:${pswd}@${host}:${port}/yelp?authSource=admin`;
  MongoClient.connect(uri, { native_parser: true })
    .then(client => {
      console.log('Successfully connected to the database');
      _db = client.db();
      _restaurants = _db.collection('restaurants');
    })
    .catch(err => {
      console.error('Error connecting to db:', err);
      throw err;
    });
});


const db = () => _db;
const restaurants = () => _restaurants;

const postRestaurant = (data) => {
  const coll = restaurants();
  coll.findOne({}, {
    fields: ['_id'],
    sort: [['_id', 'desc']]
  }).then(({ _id }) => {
    data._id = (_id || 0) + 1;
    coll.insert(data);
  });
};

const getRestaurant = (id) => {
  return restaurants().findOne({ _id: +id });
};

const putRestaurant = (id, data) => {
  delete data._id;
  return restaurants().update({ _id: +id }, { $set: data });
};

const deleteRestaurant = (id) => {
  return restaurants().remove({ _id: +id });
};

module.exports = {
  db,
  restaurants,
  postRestaurant,
  getRestaurant,
  putRestaurant,
  deleteRestaurant
};
