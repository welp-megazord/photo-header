const pg = require('pg');

const client = new pg.Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
});

client.connect();

const restaurantQuery = `
select
    *
from
    restaurants
where
    id = $1
`;

const fetchRestaurant = (id) => {
  return client.query(restaurantQuery, [id])
    .then(result => result.rows[0]);
};

module.exports = { client, fetchRestaurant };
