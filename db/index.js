const { MongoClient } = require('mongodb');

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/yelp';
let _db, _restaurants, nextId;

MongoClient.connect(mongoUri, { native_parser: true })
  .then(client => {
    console.log('Successfully connected to the database');
    _db = client.db();
    _restaurants = _db.collection('restaurants');
    // createIndex is idempotent, so no harm in running this if
    // the index already exists
    _restaurants.createIndex({ id: -1 }, {
      name: 'restaurantIdIndex',
      unique: true
    })
      .then(name => {
        console.log('Successfully created index:', name);
      })
      .catch(err => {
        console.error('Error creating index:', err);
        throw err;
      });
    // Find where sequential IDs should start from
    _restaurants.findOne({}, {
      fields: ['id'],
      sort: [['id', 'desc']]
    })
      .then(({ id }) => {
        nextId = id + 1;
        console.log(`IDs will start from ${nextId}`);
      });
  })
  .catch(err => {
    console.error('Error connecting to db:', err);
    throw err;
  });

const db = () => _db;
const restaurants = () => _restaurants;

const postRestaurant = (data) => {
  delete data.id;
  delete data._id;
  data.id = nextId++;
  return restaurants().insert(data);
};

const getRestaurant = (id) => {
  return restaurants().findOne({ id: +id })
    .then(result => {
      delete result._id;
      return result;
    });
};

const putRestaurant = (id, data) => {
  delete data.id;
  delete data._id;
  return restaurants().update({ id: +id }, { $set: data });
};

const deleteRestaurant = (id) => {
  return restaurants().remove({ id: +id });
};

module.exports = {
  db,
  restaurants,
  postRestaurant,
  getRestaurant,
  putRestaurant,
  deleteRestaurant
};
