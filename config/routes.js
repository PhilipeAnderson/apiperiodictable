const express = require('express');
const routes = express();

let db = [
  {'1' : {name: 'Hydrogen', atomicNumber: 01, category: 'Nonmetal', atomicMass: 1.080}},
  {'2' : {name: 'Iron', atomicNumber: 26, category: 'Transition Metal', atomicMass: 55.84}},
  {'3' : {name: 'Bismuth', atomicNumber: 83, category: 'Post-Transition Metal', atomicMass: 208.98}},
  {'4' : {name: 'Niobium', atomicNumber: 41, category: 'Transition Metal', atomicMass: 92.90}},
]

routes.get('/', (req, res) => {
  return res.json(db)
});

module.exports = routes;