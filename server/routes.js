const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.route('/restaurant')
  .post(controllers.restaurant.post);

router.route('/restaurant/:id')
  .get(controllers.restaurant.get)
  .put(controllers.restaurant.put)
  .delete(controllers.restaurant.delete);

module.exports = { router };
