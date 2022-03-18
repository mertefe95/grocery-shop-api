import { Request, Response, NextFunction } from 'express';
import knex from "../../knex/db-config";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if (!req.session.id) {
      return res.status(401).send({ msg: 'Token not found. Authorization has been denied.' });
    }

    req.user = req.session.id;

    next();
  } catch (err) {
    return res.status(500).send({ msg: 'Authorization is denied.' });
  }

}


export default adminAuth;
