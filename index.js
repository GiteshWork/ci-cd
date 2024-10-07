const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Sample CRUD routes
app.get('/', (req, res) => res.send('Hello, CI/CD World!'));

app.listen(port, () => {
  console.log(`App listening at http://192.168.0.13:${port}`);
});

// CRUD Routes for "items"
let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex !== -1) {
    items[itemIndex] = req.body;
    res.json(items[itemIndex]);
  } else {
    res.status(404).send('Item not found');
  }
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(i => i.id !== id);
  res.status(204).send();
});
