import express from 'express';

const app = express();

//
app.get('/', (req, res) => {
  return res.send('Hello world - aprendendo typescript');
})

/* As bibliotecas precisam expor as suas tipagens */
app.listen(3333);
