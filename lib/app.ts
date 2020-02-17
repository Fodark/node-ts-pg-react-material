import express = require('express');

const app: express.Application = express();
const testRouter = require('../api/test').router;

app.use('/test', testRouter);

app.get('/', (_, res) => {
    res.send('Hello World');
})

module.exports = app;