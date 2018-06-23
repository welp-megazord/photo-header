const express = require('express');
const db = require('../db');

const router = express.Router();

router.route('/restaurant')
  .post((req, res) => {
    console.log('POST /restaurant');
    // console.log('req.body:', req.body);
    const data = req.body;
    if (Array.isArray(data.address)) {
      data.address = data.address.join(', ');
    }
    if (Array.isArray(data.categories)) {
      data.categories = data.categories.join(' ');
    }
    db.postRestaurant(req.body)
      .then(() => res.status(202).send())
      .catch(err => {
        console.log(err);
        res.status(500).send();
      });
  });

router.route('/restaurant/:id')
  .get((req, res) => {
    const { id } = req.params;
    console.log(`GET /restaurant/${id}`);
    db.getRestaurant(id)
      .then(data => {
        address = data.address.split(', ');
        categories = data.categories.split(' ');
        data.address = address;
        data.categories = categories;
        res.status(200).send(data);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    db.getRestaurant(id)
      .then(data => {
        if (data) {
          db.putRestaurant(id, req.body)
            .then(() => res.status(202).send())
            .catch(err => {
              console.log(err);
              res.status(500).send();
            });
        } else {
          // No such resaurant
          res.status(204).send();
        }
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    console.log(`DELETE /api/restaurant/${id}`);
    db.getRestaurant(id)
      .then(data => {
        if (data) {
          db.deleteRestaurant(id)
            .then(() => res.status(202).send())
            .catch(err => {
              console.log(err);
              res.status(500).send();
            });
        } else {
          res.status(204).send();
        }
      });
  });

// router.route('/user')
//   .get((req, res) => {
//     console.log('GET /user');
//     res.status(200).send('');
//   });

// router.route('/photo')
//   .get((req, res) => {
//     console.log('GET /photo');
//     res.status(200).send('');
//   });

module.exports = { router };
