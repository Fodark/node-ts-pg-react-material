import express = require('express');

const app: express.Application = require('./app');

app.listen(3000, () => {
    console.log('Listening on port 3000');
})