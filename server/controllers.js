const db = require('../db');

const maybeLog = process.env.DEBUG
  ? console.log.bind(console)
  : () => {};

const restaurant = {
  // GET a restaurant
  get(req, res) {
    const { id } = req.params;
    maybeLog(`GET /restaurant/${id}`);
    db.getRestaurant(id)
      .then(data => {
        if (data) {
          data.address = data.address.split(', ');
          data.categories = data.categories.split(' ');
        } else {
          data = {};
        }
        res.status(200).send(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send();
      });
  },
  // POST a new restaurant
  post(req, res) {
    maybeLog('POST /restaurant');
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
        console.error(err);
        res.status(500).send();
      });
  },
  // PUT changes to a restaurant
  put(req, res) {
    const { id } = req.params;
    maybeLog(`PUT /api/restaurant/${id}`);
    db.getRestaurant(id)
      .then(data => {
        if (data) {
          let body = req.body || {};
          if (Array.isArray(body.address)) {
            body.address = body.address.join(', ');
          }
          if (Array.isArray(body.categories)) {
            body.categories = body.categories.join(' ');
          }
          db.putRestaurant(id, req.body)
            .then(() => res.status(202).send())
            .catch(err => {
              console.error(err);
              res.status(500).send();
            });
        } else {
          // No such restaurant
          res.status(204).send();
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send();
      });
  },
  // DELETE a restaurant
  delete(req, res) {
    const { id } = req.params;
    maybeLog(`DELETE /api/restaurant/${id}`);
    db.getRestaurant(id)
      .then(data => {
        if (data) {
          db.deleteRestaurant(id)
            .then(() => res.status(202).send())
            .catch(err => {
              console.error(err);
              res.status(500).send();
            });
        } else {
          res.status(204).send();
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send();
      });
  }
};

module.exports = { restaurant };
