var config = require('config')
  , express = require('express')
  , app = express()
  , routes = {
    '/': require('./routes/index')
  };

Object.keys(routes).forEach(function(basePath) {
  app.use(basePath, routes[basePath]);
});

app.listen(config.application.port, function() {
  console.log('Now listening on ' + config.application.port);
});