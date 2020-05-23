const path = require('path');
const express = require('express');
const publicPath = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(express.static(publicPath));

app.get('*', (res, req) => {
  res.sendFile = path.resolve(publicPath, 'index.html');
});
app.listen(3000, () => {
  console.log('Server is up and running');
});
