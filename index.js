const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

let db = [
  {'1' : {name: 'Hydrogen', atomicNumber: 01, category: 'Nonmetal', atomicMass: 1.080}},
  {'2' : {name: 'Iron', atomicNumber: 26, category: 'Transition Metal', atomicMass: 55.84}},
  {'1' : {name: 'Bismuth', atomicNumber: 83, category: 'Post-Transition Metal', atomicMass: 208.98}},

]

app.get('/', (req, res) => {
  return res.json(db)
});

app.listen(3333, () => {
  console.log('Started Server')
});