const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'en-gb.html'));
});

app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
