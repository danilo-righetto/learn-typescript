import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Hello world - aprendendo typescript');
});

routes.get('/users', UserController.index);

export default routes;