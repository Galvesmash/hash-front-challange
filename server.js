require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('src'));
app.use('/scripts', express.static(`${__dirname}/node_modules/`));
app.listen(port, () => console.log('listening on %d', port));