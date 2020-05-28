import express from 'express';
import routes from './routes';

const app = express();
app.use(routes);

/* As bibliotecas precisam expor as suas tipagens */
app.listen(3333);
