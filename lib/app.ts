import express = require('express');

const app: express.Application = express();

app.get('/', (_, res) => {
    res.send('Hello World');
})

module.exports = app;