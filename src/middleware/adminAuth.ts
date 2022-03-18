import { Request, Response, NextFunction } from 'express';
import knex from "../../knex/db-config";

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if (!req.session.id) {
      return res.status(401).send({ msg: 'Token not found. Authorization has been denied.' });
    }


    const isAdminExisting = await knex('admins').where('id', req.session.id).first();

    if (!isAdminExisting) {
      return res.status(400).send({ msg: 'Only Admin access has been allowed.' });
    }

    req.user = req.session.id;

    next();
  } catch (err) {
    return res.status(500).send({ msg: 'Authorization is denied.' });
  }

}


export default adminAuth;
