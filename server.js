const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilitar CORS para https://app.pipefy.com
app.use(cors({
  origin: 'https://app.pipefy.com',  // Permite requisições de Pipefy
  methods: ['GET', 'POST'],
}));

// Servir arquivos estáticos (index.html, icon.png, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para renderizar o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Porta em que o servidor vai rodar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
