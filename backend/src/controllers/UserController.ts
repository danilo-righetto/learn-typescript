import { Request, Response } from 'express';

const users = [
  { name: 'Danilo', email: 'danilo@gmail.com'},
  { name: 'Enzo', email: 'enzo@gmail.com'},
  { name: 'Fabiana', email: 'fabiana@gmail.com'}
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};