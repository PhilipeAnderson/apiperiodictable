import express, {Request, Response, NextFunction} from 'express';
import db from '../database/database'

const routes = express();

routes.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.json(db)
});

module.exports = routes;