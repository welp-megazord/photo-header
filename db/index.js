const sequelize = require('sequelize');
const db = new sequelize('yelp', 'Kevin', '', {
  host: 'localhost',
  dialect: 'postgres',
})

db.authenticate()
.then(() => {
  console.log('Database has been established successfully');
  const schema = require('./sql/schema'); //create tables
})
.catch(err => {
  console.log('Unable to connect to database: ', err);
})

module.exports = {
  db
}

