import express, {Request, Response, NextFunction} from ('express');
import routes from express();
import db from ('../database/database')

routes.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.json(db)
});



module.exports = routes;