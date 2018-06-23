const pg = require('pg');

const client = new pg.Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Successfully connected to the database');
  }
});

const postRestaurantQuery = `
insert into restaurants (
    name,
    address,
    phone_number,
    url,
    google_map,
    categories
)
values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
)
`;

const getRestaurantQuery = `
select
    *
from
    restaurants
where
    id = $1
`;

const putRestaurantQuery = `
update
    restaurants
set
    name = coalesce($2, name),
    address = coalesce($3, address),
    phone_number = coalesce($4, phone_number),
    url = coalesce($5, url),
    google_map = coalesce($6, google_map),
    categories = coalesce($7, categories)
where
    id = $1
`;

const deleteRestaurantQuery = `
delete from
    restaurants
where
    id = $1
`;

const postRestaurant = (data) => {
  const { name, address, phoneNumber, url, googleMap, categories } = data;
  const args = [ name, address, phoneNumber, url, googleMap, categories ];
  return client.query(postRestaurantQuery, args);
};

const getRestaurant = (id) => {
  return client.query(getRestaurantQuery, [ id ])
    .then(result => result.rowCount ? result.rows[0] : null);
};

const putRestaurant = (id, data) => {
  const { name, address, phoneNumber, url, googleMap, categories } = data;
  const args = [ id, name, address, phoneNumber, url, googleMap, categories ];
  return client.query(putRestaurantQuery, args);
};

const deleteRestaurant = (id) => {
  return client.query(deleteRestaurantQuery, [ id ]);
};

module.exports = {
  client,
  postRestaurant,
  getRestaurant,
  putRestaurant,
  deleteRestaurant
};
