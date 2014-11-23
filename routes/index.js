var config = require('config')
  , express = require('express')
  , router = express.Router();

router.get('/', function(req, res) {
  res.status(200)
    .send('Hi there.');
});

module.exports = router;