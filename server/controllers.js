const db = require('../db');

const restaurant = {
  // GET a restaurant
  get(req, res) {
    const { id } = req.params;
    console.log(`GET /restaurant/${id}`);
    db.getRestaurant(id)
      .then(data => {
        if (data) {
          address = data.address.split(', ');
          categories = data.categories.split(' ');
          data.address = address;
          data.categories = categories;
        } else {
          data = {};
        }
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send();
      });
  },
  // POST a new restaurant
  post(req, res) {
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
  },
  // PUT changes to a restaurant
  put(req, res) {
    const { id } = req.params;
    console.log(`PUT /api/restaurant/${id}`);
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
          // No such restaurant
          res.status(204).send();
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send();
      });
  },
  // DELETE a restaurant
  delete(req, res) {
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
      })
      .catch(err => {
        console.log(err);
        res.status(500).send();
      });
  }
};

module.exports = { restaurant };
