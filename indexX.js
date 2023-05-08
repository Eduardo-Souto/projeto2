const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bem-vindo ao Meu Site</title>
      </head>
      <body>
        <h1>Olá, visitante!</h1>
        <p>Seja bem-vindo ao meu site.</p>
      </body>
    </html>
  `);
});

app.get('/produtos', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Lista de Produtos</title>
      </head>
      <body>
        <h1>Lista de Produtos</h1>
        <ul>
          <li>Produto A</li>
          <li>Produto B</li>
          <li>Produto C</li>
          <li>Produto D</li>
          <li>Produto E</li>
          <li>Produto F</li>       
        </ul>
      </body>
    </html>
  `);
});

app.get('/consulta/:parametro', (req, res) => {
  const parametro = req.params.parametro;
  res.send(`
    <html>
      <head>
        <title>Consulta</title>
      </head>
      <body>
        <h1>Resultado da Consulta</h1>
        <p>Você buscou por "${parametro}".</p>
      </body>
    </html>
  `);
});

app.get('/cadastro/:nome?', (req, res) => {
  const nome = req.params.nome || 'Produto';
  res.send(`
    <html>
      <head>
        <title>Cadastro de Produto</title>
      </head>
      <body>
        <h1>Cadastro de Produto</h1>
        <p>O ${nome} foi cadastrado com sucesso!</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});