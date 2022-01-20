const express = require('express');
const routes = express();
const db = require('../database/database')

routes.get('/', (req, res) => {
  return res.json(db)
});

module.exports = routes;