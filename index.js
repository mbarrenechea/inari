const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const next = require('next');
const routes = require('./routes');

// Load environment variables from .env file if present
require('dotenv').load();
require('isomorphic-fetch');
require('es6-promise').polyfill();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

// Next app creation
const app = next({ dev });
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

// Express app creation
const server = express();

// configure Express
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Initializing next app before express server
app.prepare()
  .then(() => {
    server.use(handler);

    server.listen(port, (err) => {
      if (err) throw err;
      console.info(`> Ready on http://localhost:${port} [${dev}]`);
    });
  })
  .catch((err) => {
    console.error('An error occurred, unable to start the server');
    console.error(err);
  });
