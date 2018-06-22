const express = require('express');
const parser = require('body-parser');
const path = require('path');
const {router} = require('./routes.js');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

// require('../Gruntfile.js');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error connecting to server:', err);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
