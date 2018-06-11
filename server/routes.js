const router = require('express').Router();

router.route('/fetchRestaurant')
  .get((req, res) => {
    console.log('GET request for /fetchRestaurant');
    res.status(200).send('');
  });

router.route('/fetchUserID')
  .get((req, res) => {
    console.log('GET request for /fetchUserID');
    res.status(200).send('');
  });

router.route('/fetchPhoto')
  .get((req, res) => {
    console.log('GET request for /fetchPhoto');
    res.status(200).send('');
  });

module.exports = {
  router : router
}
