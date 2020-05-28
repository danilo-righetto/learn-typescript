import { Request, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
  { name: 'Danilo', email: 'danilo@gmail.com' },
  { name: 'Enzo', email: 'enzo@gmail.com' },
  { name: 'Fabiana', email: 'fabiana@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
       to: { name: 'Danilo', email: 'danilo@gmail.com' },
       message: { body: 'Seja bem vindo', subject: 'Bem vindo ao sistema' }
    });
  return res.send();
}
};