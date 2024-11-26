const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Configuração de CORS para permitir requisições do Pipefy
app.use(cors({
  origin: 'https://app.pipefy.com', // Domínio do Pipefy
  methods: ['GET', 'POST'],
}));

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir o manifest.json diretamente da raiz
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

// Rota principal para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Porta para o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
