const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an error
  //throw new Error('Something went wrong!');
  res.send('Hello World!');
});

// Centralized error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});