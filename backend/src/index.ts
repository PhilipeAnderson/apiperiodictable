import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './config/routes';
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3333, () => {
  console.log('Server Working!')
});

module.exports = app;