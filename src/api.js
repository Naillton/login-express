const express = require('express');

let cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use((erro, _req, res, next) => {
  const { name, message } = erro;
  switch (name) {
    case 'BadRequest':
      res.status(400).json({ message });
    break;
    case 'NotFoundError':
      res.status(404).json({ message });
    break;
    case 'Conflict':
      res.status(409).json({ message });
    break;
    case 'UnauthorizedError':
      res.status(401).json({ message });
    break;
    default:
      res.status(500).json({ message });
    break;
  }
});

module.exports = app;
