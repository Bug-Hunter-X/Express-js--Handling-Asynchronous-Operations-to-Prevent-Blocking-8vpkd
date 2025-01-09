const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation (simulated with setTimeout)
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 3000); // Simulate a 3-second delay
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});