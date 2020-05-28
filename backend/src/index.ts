import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(routes);


/* As bibliotecas precisam expor as suas tipagens */
app.listen(3333);
