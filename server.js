require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src'));
app.use('/scripts', express.static(`${__dirname}/node_modules/`));
app.listen(port, () => console.log(`Listening on port ${port}!`));